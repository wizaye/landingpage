<p align="center">
<a href="https://github.com/HXQLabs/helixque-landing">
  <img src="assets/banner.jpg" alt="Helixque Landing Page" width="100%">
</a>
</p>
<p align="center"><b>Modern, responsive landing page for Helixque</b></p>

<p align="center">
<a href="https://discord.gg/dQUh6SY9Uk">
<img alt="Discord" src="https://img.shields.io/badge/Discord-Join-5865F2?logo=discord&logoColor=white&style=for-the-badge" />
</a>
<img alt="Commit activity per month" src="https://img.shields.io/github/commit-activity/m/HXQLabs/helixque-landing?style=for-the-badge" />
<img alt="License" src="https://img.shields.io/badge/license-Apache%202.0-blue?style=for-the-badge" />
</p>

<p align="center">
    <a href="https://github.com/HXQLabs/helixque-landing"><b>GitHub</b></a> •
    <a href="https://github.com/HXQLabs/helixque-landing/releases"><b>Releases</b></a> •
    <a href="https://discord.gg/dQUh6SY9Uk"><b>Discord</b></a> •
    <a href="#deployment"><b>Deployment Guide</b></a>
</p>

Welcome to the **Helixque Landing Page** - a modern, responsive website built with Next.js 15, showcasing the features and benefits of [Helixque](https://github.com/HXQLabs/Helixque), a professional real-time video chat application. This landing page features beautiful animations, interactive components, and a clean design to effectively communicate Helixque's value proposition. 🚀

> This landing page is continuously evolving with new features and improvements. Your suggestions, ideas, and reported bugs help us immensely. Do not hesitate to join the conversation on [Discord](https://discord.gg/dQUh6SY9Uk) or raise a GitHub issue. We read everything and respond to most.

# Helixque Landing Page

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

This is the official landing page for **Helixque** - a professional networking platform designed for builders, learners, and mentors in the tech community. The landing page showcases Helixque's features and benefits, including instant matching based on skills, industry, and language preferences, facilitating meaningful connections for learning, mentoring, and collaboration through text or video without the awkwardness of traditional networking.

## ✨ Landing Page Features

- **Modern Design**: Clean, responsive design built with Next.js 15 and Tailwind CSS v4
- **Interactive Animations**: Beautiful animations and transitions using Framer Motion
- **Component Library**: Comprehensive UI components with Radix UI primitives and custom components
- **Content Management**: MDX-based content system for announcements, changelogs, and documentation
- **Performance Optimized**: Fast loading with Next.js App Router, static generation, and server-side rendering
- **Accessibility**: Built with accessibility in mind using Radix UI components
- **Theme Support**: Dark/light mode toggle with next-themes
- **Analytics Ready**: Integrated with Vercel Analytics and Speed Insights

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/HXQLabs/helixque-landing.git
   cd helixque-landing
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. Set up environment variables (optional for full functionality):
   - Create a `.env.local` file in the root directory
   - Add your GitHub Personal Access Token for enhanced rate limits:

     ```text
     NEXT_PUBLIC_GH_TOKEN=your_github_token_here
     ```

   - Add Discord invite code and GitHub repo for community features:

     ```text
     NEXT_PUBLIC_DISCORD_INVITE_CODE=your_discord_invite
     NEXT_PUBLIC_GITHUB_REPO=your_github_repo
     ```

4. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 📖 Usage

### For Visitors

1. **Explore Features**: Browse through the landing page to learn about Helixque's capabilities
2. **Join Community**: Connect with the Helixque community through Discord
3. **Stay Updated**: Check announcements and changelogs for the latest updates
4. **Try Helixque**: Follow links to access the actual Helixque application

### For Developers

- **Development**: The app auto-reloads during development. Edit files in the `app/` directory for page changes.
- **Content Management**: Add announcements and changelogs in the `content/` directory using MDX format.
- **Styling**: Customize UI components in the `components/` directory. The project uses Tailwind CSS for styling.
- **API Integration**: Extend functionality by adding API routes in `app/api/` or integrating with external services.
- **Component Development**: Create new UI components in the `components/ui/` directory following the established patterns.

## 🏗️ Tech Stack & Architecture

### Core Technologies

- **Framework**: Next.js 15 (App Router)
- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS v4, Framer Motion
- **UI Components**: Radix UI, Lucide Icons
- **Content**: MDX with Fumadocs
- **3D Graphics**: Three.js, React Three Fiber

### Key Dependencies

- `@radix-ui/*`: Accessible UI primitives
- `framer-motion`: Animation library
- `next-themes`: Theme management
- `recharts`: Data visualization
- `gray-matter`: Frontmatter parsing for MDX
- `react-markdown`: Markdown rendering

### Architecture Overview

- **Pages**: Built with Next.js App Router (`app/` directory) with static and dynamic routes
- **Components**: Modular UI components in `components/` organized by:
  - `sections/`: Landing page sections (hero, features, pricing, etc.)
  - `ui/`: Reusable UI components and primitives
  - `common/`: Shared components (header, footer, layout)
  - `fancy/`: Specialized animated components
- **Content**: MDX-based content system for announcements, changelogs, and documentation
- **API Routes**: Server-side API endpoints for Discord integration and external data fetching
- **Styling**: Utility-first CSS with Tailwind CSS v4, custom themes, and responsive design
- **Deployment**: Optimized for static generation and server-side rendering with Vercel

## 🤝 Contributing

We welcome contributions from the community! This landing page is built by developers for developers, and your input helps make it better.

### How to Contribute

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes and ensure tests pass
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin feature/your-feature-name`
6. Open a Pull Request

### Development Guidelines

- **Code Style**: Follow the existing TypeScript and React patterns
- **Components**: Use the established component structure in `components/`
- **Styling**: Prefer Tailwind classes and follow the design system
- **Commits**: Use clear, descriptive commit messages
- **Testing**: Test your changes thoroughly before submitting
- **Documentation**: Update relevant documentation for new features

### Areas for Contribution

- UI/UX improvements and design enhancements
- New landing page sections and components
- Performance optimizations and loading improvements
- Accessibility enhancements
- Animation and interaction improvements
- Documentation improvements
- Bug fixes and issue resolution
- Content updates and copy improvements

## 📄 License

This project is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file for details.

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

### Acknowledgments

Thanks to the open-source projects that made this landing page possible:

- [Next.js](https://nextjs.org/) - React framework for production
- [React](https://react.dev/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Radix UI](https://www.radix-ui.com/) - Accessible UI primitives
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [MDX](https://mdxjs.com/) - Markdown with JSX support
- [Three.js](https://threejs.org/) - 3D graphics library

## Repository Activity

<img src="https://repobeats.axiom.co/api/embed/131bf3b02c064ea224b96e617a9d480d9c18837e.svg" alt="Repository Activity" />

## Contributors

Thank you to all the amazing contributors who have helped make this landing page better!

<a href="https://github.com/HXQLabs/helixque-landing/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=HXQLabs/helixque-landing" />
</a>
