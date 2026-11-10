# Adarsh Kumar Jha — 3D Retro Computer Desk OS & Vector Signature Portfolio

A production-grade, photorealistic 3D interactive portfolio combining:
1. **Henry Heffernan's 3D Retro Room & OS ([henryheffernan.com](https://henryheffernan.com))**: Three.js WebGL scene featuring baked shadows, camera keyframe pan/zoom, interactive CRT monitor with CSS3D screen occlusions, desk lamp toggles, ambient sound, and a physical desk printer.
2. **Maxime Heckel's Animated Vector Signature ([blog.maximeheckel.com](https://blog.maximeheckel.com))**: Precision SVG handwritten signature animation using `framer-motion` stroke pathLength interpolation with glowing blue/indigo accents and an interactive click-to-replay animation.

---

## Architecture Overview

```
portfolio/
├── package.json              # Unified build runner
├── 3d-room/                  # Three.js 3D scene & camera controller
│   ├── src/                  # WebGL shaders, camera keyframes, UI overlay, BIOS screen
│   ├── static/               # Baked GLB models, ambient audio, monitor reflection textures
│   └── public/               # Final bundled production site
│       ├── index.html        # 3D room entrypoint
│       ├── bundle.*.js       # Three.js runtime & shaders
│       └── os/               # Embedded React Desktop OS (iframe)
└── inner-os/                 # Virtual React 90s Desktop OS
    ├── src/
    │   ├── components/os/    # Desktop, window manager, start menu, toolbar
    │   ├── components/showcase/
    │   │   ├── Signature.tsx # Maxime Heckel animated SVG stroke component
    │   │   ├── Home.tsx      # Adarsh Kumar Jha headline & credentials
    │   │   ├── About.tsx     # IIIT-Delhi CS & AI, GATE AIR 252, TBO AI Engineer
    │   │   ├── Experience.tsx# TBO.com, R2C IIIT-Delhi, Oracle Research, VICAS
    │   │   ├── Software.tsx  # Lakehouse CDC, Nova Sonic IVR, Automated Outreach
    │   │   └── ResumeDownload.tsx # Physical printer integration (22KB ATS PDF)
    │   └── assets/resume/    # Adarsh_Kumar_Jha_Resume.pdf (ATS-optimized)
```

---

## Local Development & Preview

### Prerequisites
- Node.js (v18+)
- Python 3 (for local static server)

### 1. Build Everything
```bash
cd /Users/adarsh/portfolio
npm run build
```
*(Compiles `inner-os` into `inner-os/build`, bundles `3d-room` with Webpack, and automatically copies the OS bundle into `3d-room/public/os/`)*

### 2. Live Preview
```bash
npm run preview
# Open http://localhost:8080 in your browser
```

---

## One-Click Deployment Options

### Option A: GitHub Pages (`https://ad4rush.github.io`)
Deploy the compiled `3d-room/public/` directory directly to GitHub Pages:
```bash
cd /Users/adarsh/portfolio/3d-room/public
git init
git branch -M main
git remote add origin git@github.com:ad4rush/ad4rush.github.io.git
git add -A
git commit -m "Deploy Adarsh Kumar Jha 3D Retro OS Portfolio"
git push -u origin main --force
```

### Option B: Vercel / Cloudflare Pages
- Root Directory: `3d-room`
- Build Command: `cd ../inner-os && npm run build && cd ../3d-room && npm run build`
- Output Directory: `public`
