# Marwa Ashraf — Professional Portfolio

A modern, high-fidelity, and fully responsive developer portfolio built using React, Vite, Tailwind CSS, and Framer Motion. This website showcases professional credentials, projects, and structured technical toolkits.

---

## 🚀 Key Features

*   **Modular Architecture**: Re-architected from a single monolithic file into reusable, clean React components (Hero, Navbar, Skills Marquee, Projects Grid, chronologic Timeline, and Contact).
*   **Infinite Scrolling Marquee**: A custom, performance-optimized, dual-row horizontal skills carousel with:
    *   Alternating animation directions (left-to-right top row, right-to-left bottom row).
    *   Seamless layout looping.
    *   Hover-to-pause capability for easy reading and interaction.
    *   Radial edge-fade gradient overlays for high-fidelity aesthetics.
*   **Intelligent Projects Grid**: Includes category filtering (AI, Full-Stack, Backend, Frontend) and dynamically adjusts layout settings (using Grid/Flex sizing) to automatically center cards when a filter displays fewer than 3 items.
*   **Persistent Theme System**: Integrated light and dark mode with persistent user choice saved in `localStorage`.
*   **Centralized Data Management**: Clean separation of static profile data (skills list, chronologic timeline steps, and project highlights) from UI components into a dedicated `portfolioData.js` file.

---

## 🛠️ Technology Stack

*   **Frontend**: React
*   **Build Tool**: Vite
*   **Styling**: Tailwind CSS
*   **Animations**: Framer Motion
*   **Icons**: Lucide React

---

## 📂 Project Structure

```bash
Portfolio/
├── public/                 # Static assets
│   ├── logo.png            # Main branding logo & Favicon
│   └── favicon.svg         # Legacy favicon backup
├── src/
│   ├── assets/             # Project screenshots & images
│   ├── components/         # Reusable React UI components
│   │   ├── Navbar.jsx      # Sticky glassmorphic navbar with active section observer
│   │   ├── Hero.jsx        # Landing profile banner & connections
│   │   ├── Skills.jsx      # Infinite scrolling tool marquee
│   │   ├── Projects.jsx    # Centered filtering projects grid
│   │   ├── Timeline.jsx    # Chronological education/work timeline
│   │   ├── ContactMe.jsx   # Controlled feedback contact form
│   │   └── Footer.jsx      # Simplified brand footer
│   ├── data/
│   │   └── portfolioData.js # Central static portfolio configuration
│   ├── App.jsx             # Root wrapper and layout assembler
│   ├── index.css           # Tailwind custom imports and global animations
│   └── main.jsx            # DOM entry point
├── index.html              # HTML shell & page title settings
├── package.json            # Node project configuration
└── vite.config.js          # Vite configuration
```

---

## ⚙️ Installation & Development Setup

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed.

### 1. Clone the repository
```bash
git clone https://github.com/MarwaAshraf1812/My_Portfolio.git
cd Portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Build for production
To compile and build the production bundle:
```bash
npm run build
```

---

## 🔒 License

This project is open-source and available under the MIT License.
