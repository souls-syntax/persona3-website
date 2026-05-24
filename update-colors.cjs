const fs = require('fs');

let content = fs.readFileSync('src/BlogPost.jsx', 'utf8');

// Update export default function BlogPost
content = content.replace('export default function BlogPost() {', 'export default function BlogPost({ src }) {');

// Remove bgVideo import
content = content.replace('import bgVideo from "./assets/main1.mp4";\n', '');

// Replace video wrapper
const oldWrapper = `<div id="menu-screen">\n        <video src={bgVideo} autoPlay loop muted playsInline />`;
const oldWrapper2 = `<div id="menu-screen">\n      <video src={bgVideo} autoPlay loop muted playsInline />`;
const newWrapper = `<div id="hsr-blog-screen" style={{ position: 'absolute', inset: 0, overflow: 'hidden', background: '#06030f' }}>\n      <video className="hsr-bg-video" src={src} autoPlay loop muted playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, filter: 'blur(10px) brightness(0.4) saturate(1.2)' }} />\n      <div className="hsr-dim-overlay" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, transparent 20%, rgba(6,3,15,0.8) 100%)', zIndex: 1 }} />`;

content = content.replace(new RegExp(oldWrapper.replace(/[.*+?^\${}()|[\\]\\\\]/g, '\\\\$&'), 'g'), newWrapper);
content = content.replace(new RegExp(oldWrapper2.replace(/[.*+?^\${}()|[\\]\\\\]/g, '\\\\$&'), 'g'), newWrapper);

// Replace #c4001a with #22d3ee
content = content.replace(/#c4001a/g, '#22d3ee');
// Replace rgba(196,0,26,... with rgba(34,211,238,...
content = content.replace(/196,0,26/g, '34,211,238');
// Replace #e0001f with #06b6d4
content = content.replace(/#e0001f/g, '#06b6d4');

fs.writeFileSync('src/BlogPost.jsx', content);
console.log('Done');
