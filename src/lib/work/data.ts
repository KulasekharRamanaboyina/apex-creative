export interface ConceptProject {
  id: string;
  slug: string;
  title: string;
  badge: 'APEX CONCEPT' | 'SELF-INITIATED' | 'CONCEPT PROJECT';
  category: 'Brand Identity' | '3D & Visual Motion' | 'Digital Experience' | 'Creative Direction' | 'Campaign Concept';
  tagline: string;
  image: string;
  gradient: string;
  overview: string;
  designExploration: string[];
  deliverables: string[];
  specs: { label: string; value: string }[];
}

export const CONCEPT_PROJECTS: ConceptProject[] = [
  {
    id: 'hyperion-concept',
    slug: 'hyperion-concept',
    title: 'Hyperion Autonomous Mobility',
    badge: 'APEX CONCEPT',
    category: 'Brand Identity',
    tagline: 'Self-initiated brand identity & 3D vehicle presentation exploration',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    gradient: 'from-[#ffc900] to-[#ffc900]',
    overview: 'An APEX Creative Lab exploration into aerodynamic brand geometry, custom gradient lighting, and digital flagship architecture for a theoretical autonomous electric vehicle brand.',
    designExploration: [
      'Geometric letterform construction based on wind-tunnel dynamics.',
      'Signature dual-tone gradient accents mapped to autonomous sensor surfaces.',
      'High-contrast dark interface system for in-vehicle UI presentation.'
    ],
    deliverables: [
      'Self-Initiated Brand Identity Guidelines',
      '3D Volumetric Vehicle Shaders',
      'Digital Flagship UX Prototype'
    ],
    specs: [
      { label: 'Project Type', value: 'Self-Initiated Lab Experiment' },
      { label: 'Primary Typeface', value: 'Montserrat Black / Inter' },
      { label: 'Color System', value: 'Crimson & Deep Purple Accent' }
    ]
  },
  {
    id: 'aura-sound-concept',
    slug: 'aura-sound-concept',
    title: 'Aura Spatial Acoustics',
    badge: 'SELF-INITIATED',
    category: 'Digital Experience',
    tagline: 'Experimental dark-theme audio UI & WebGL soundwave showcase',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    gradient: 'from-[#ffc900] to-[#ffc900]',
    overview: 'A creative lab study investigating how web animation physics and tactile dark-mode typography can convey physical sound resonance on digital screens.',
    designExploration: [
      'Tactile dark glassmorphism surfaces (#080908 Ink Black base).',
      'Interactive WebGL audio visualizer responsive to cursor gestures.',
      'Precision typographic layout utilizing Montserrat display weights.'
    ],
    deliverables: [
      'Interactive Soundwave Web Prototype',
      'Dark Theme Component Library',
      'Motion Ident Concept'
    ],
    specs: [
      { label: 'Project Type', value: 'APEX Concept Study' },
      { label: 'Frame Rate', value: '60 FPS Canvas Physics' },
      { label: 'Theme', value: 'Ink Black Dark Contrast' }
    ]
  },
  {
    id: 'vortex-concept',
    slug: 'vortex-concept',
    title: 'Vortex Quantum Terminal',
    badge: 'CONCEPT PROJECT',
    category: 'Creative Direction',
    tagline: 'High-frequency financial intelligence interface & visual strategy',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80',
    gradient: 'from-[#ffc900] to-[#ffc900]',
    overview: 'An internal design exploration reimagining complex financial data streams into clean, highly legible visual typography and precision metric accents.',
    designExploration: [
      'Teal (#ffc900) metric highlights paired with Electric Blue anchors.',
      'Zero-clutter tabular typography for millisecond data readability.',
      'Modular dashboard grid system designed for multi-monitor setups.'
    ],
    deliverables: [
      'Trading Interface Wireframe & UI Package',
      'Data Visualization Design Token System',
      'Brand Positioning Concept'
    ],
    specs: [
      { label: 'Project Type', value: 'APEX Financial Concept' },
      { label: 'Grid Architecture', value: '12-Column Responsive Layout' },
      { label: 'Accent Tokens', value: '#ffc900 Teal & Electric Blue' }
    ]
  },
  {
    id: 'lumina-concept',
    slug: 'lumina-concept',
    title: 'Lumina Spatial Vision',
    badge: 'APEX CONCEPT',
    category: '3D & Visual Motion',
    tagline: 'Spatial computing visual identity & volumetric shader exploration',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80',
    gradient: 'from-[#ffc900] to-[#ffc900]',
    overview: 'A futuristic design exploration examining brand identity performance within 3D augmented reality and spatial display environments.',
    designExploration: [
      'Luminous gradient motion loops transitioning Flame Orange to Crimson.',
      'Depth-layered typography readable across 3D coordinates.',
      'Kinetic animated logo marks optimized for AR spatial frames.'
    ],
    deliverables: [
      '3D Volumetric Logo Renders',
      'Spatial Motion Styleframes',
      'AR Prototype Interface'
    ],
    specs: [
      { label: 'Project Type', value: 'Self-Initiated 3D Motion Study' },
      { label: 'Render Pipeline', value: '3D Shader Loop' },
      { label: 'Tag', value: 'APEX Lab Experiment' }
    ]
  }
];
