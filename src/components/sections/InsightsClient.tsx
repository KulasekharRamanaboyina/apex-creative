'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Post } from '@/lib/sanity/posts';

const CATEGORIES = ['All', 'Branding', 'Design', 'Marketing', 'SEO', 'Technology', 'Creative Strategy'];

export const InsightsClient: React.FC<{ posts: Post[] }> = ({ posts }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All'
    ? posts
    : posts.filter(p => p.category === selectedCategory);

  const featuredPost = filteredPosts[0] || posts[0];
  const gridPosts = selectedCategory === 'All' ? filteredPosts.slice(1) : filteredPosts;

  return (
    <div className="bg-[#f5f3ef] text-[#080908] pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-4xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#080908]/5 text-xs font-mono font-bold uppercase tracking-widest text-[#ffc900] mb-3">
            <span>APEX Editorial &amp; Thought Leadership</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-heading font-black tracking-tight uppercase leading-[0.95] mb-6">
            APEX <span className="apex-gradient-text">INSIGHTS</span>
          </h1>
          <p className="text-lg text-[#080908]/75 font-sans leading-relaxed">
            Real-time perspectives on brand strategy, visual design discipline, performance marketing, and modern web architecture.
          </p>
        </div>

        {/* Interactive Categories Filter Bar */}
        <div className="flex flex-wrap gap-2 mb-12 p-2 rounded-2xl bg-[#080908]/5 border border-[#080908]/10">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs font-heading font-bold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#080908] text-[#f5f3ef] shadow-md shadow-[#080908]/15 -translate-y-0.5'
                    : 'text-[#080908]/70 hover:text-[#080908] hover:bg-[#f5f3ef]/60'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Featured Post (Shown when 'All' is selected and posts exist) */}
        {selectedCategory === 'All' && featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-16 bg-[#f5f3ef] rounded-[2rem] overflow-hidden border border-[#080908]/10 shadow-xl hover:shadow-2xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0 group"
          >
            <div className="lg:col-span-7 h-72 lg:h-auto overflow-hidden relative bg-[#080908]">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 rounded-full bg-[#ffc900] text-[#080908] text-[10px] font-mono font-bold uppercase shadow-md">
                  {featuredPost.category} · FEATURED
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-3 text-xs font-mono text-[#080908]/50 mb-3">
                  <span>{featuredPost.author.name}</span>
                  <span>·</span>
                  <span>{featuredPost.readTime}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#080908] group-hover:text-[#ffc900] transition-colors mb-3 leading-snug">
                  {featuredPost.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#080908]/75 font-sans leading-relaxed">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#080908]/10 flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#080908]/50">{featuredPost.publishedAt}</span>
                <Link
                  href={`/insights/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-heading font-bold text-[#ffc900] group-hover:text-[#ffc900] transition-colors"
                >
                  <span>Read Full Article</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* Articles Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {gridPosts.map((post) => (
              <div
                key={post.slug}
                className="bg-[#f5f3ef] rounded-3xl overflow-hidden border border-[#080908]/10 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="h-56 overflow-hidden relative bg-[#080908]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#080908]/80 backdrop-blur-md text-[#f5f3ef] text-[10px] font-mono font-bold uppercase">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex-grow flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center gap-2 text-[10px] font-mono text-[#080908]/50 mb-2">
                      <span>{post.author.name}</span>
                      <span>·</span>
                      <span>{post.publishedAt}</span>
                    </div>

                    <h3 className="text-xl font-heading font-bold text-[#080908] group-hover:text-[#ffc900] transition-colors mb-3 line-clamp-2 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-xs text-[#080908]/70 font-sans leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#080908]/10 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#080908]/50">{post.readTime}</span>
                    <Link
                      href={`/insights/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-[#ffc900] group-hover:text-[#ffc900] transition-colors"
                    >
                      <span>Read Article</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
};
