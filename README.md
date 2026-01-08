
# My Portfolio Template

A modern, responsive, and SEO-optimized **Next.js 16 portfolio template** designed for developers, designers, and professionals. This open-source project helps you showcase your skills, experience, and projects with an elegant interface that stands out. Built with server-side rendering, TypeScript, and the latest web standards for optimal performance.

This repository is a fork of [original-repo](https://github.com/namanbarkiya/minimal-next-portfolio),
with additional features and modifications.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with Turbopack
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Form Handling**: Server actions with validation
- **Analytics**: Google Analytics + Vercel Analytics
- **Deployment**: [Vercel](https://vercel.com)

## 🔧 Getting Started

To get started with your own portfolio website:

1. Clone this repository.

2. Copy the contents of `.env.copy` to a new `.env` file and fill in the required information.

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your web browser to see the website.

## 🎨 Customization

Easily personalize your portfolio using the configuration files below:

| Section            | How to Customize                                       | File Location             |
| ------------------ | ------------------------------------------------------ | ------------------------- |
| **Personal Info**  | Edit your name, bio, and social links                  | `config/site.ts`          |
| **Skills**         | Add or modify the technologies and skills you showcase | `config/skills.ts`        |
| **Projects**       | Highlight your technical projects                      | `config/projects.ts`      |
| **Experience**     | Add your work and professional experience              | `config/experience.ts`    |
| **Contributions**  | Display open-source/community contributions            | `config/contributions.ts` |
| **Colors & Theme** | Customize color palette and themes                     | `tailwind.config.js`      |

All configuration files are well-organized and documented for a smooth customization process.


## 🙏 Credits

This project is based on:

- **Original Author**: @namanbarkiya  
- **Repository**: https://github.com/namanbarkiya/minimal-next-portfolio

All credits for the initial implementation go to the original author.
