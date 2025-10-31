# GladiatorrX - Cyber Security Intelligence Platform

A modern, professional web application for searching data breaches and leaked information using the LeakOSINT API. Built with Next.js 16, TypeScript, Tailwind CSS, and Aceternity UI components.

## Features

- 🔍 **Advanced Search**: Search across multiple breach databases instantly
- 🎨 **Modern UI**: Beautiful, responsive interface with dark mode support
- ⚡ **Real-time Results**: Lightning-fast search with detailed insights
- 🛡️ **Security Focused**: Built for cybersecurity professionals
- 📊 **Detailed Analytics**: Comprehensive breach information and statistics
- 🎭 **Smooth Animations**: Powered by Framer Motion and Aceternity UI

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **UI Components**: Aceternity UI
- **Icons**: Lucide React
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd gladiator
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your LeakOSINT API token:

```
LEAKOSINT_API_TOKEN=your_token_here
```

4. Run the development server:

```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
gladiator/
├── app/
│   ├── api/
│   │   └── search/
│   │       └── route.ts          # API endpoint for LeakOSINT
│   ├── globals.css               # Global styles and animations
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/
│   ├── ui/
│   │   ├── background-beams.tsx  # Background animation
│   │   ├── card-hover-effect.tsx # Feature cards
│   │   ├── spotlight.tsx         # Spotlight effect
│   │   └── text-generate-effect.tsx # Text animation
│   └── search-form.tsx           # Main search component
├── lib/
│   └── utils.ts                  # Utility functions
├── types/
│   └── api.ts                    # TypeScript types
└── public/                       # Static assets
```

## API Integration

The application integrates with the LeakOSINT API:

**Endpoint**: `https://leakosintapi.com/`

**Request Format**:

```json
{
  "token": "your_api_token",
  "request": "search_query",
  "limit": 100,
  "lang": "en"
}
```

## Features Explained

### Search Functionality

- Search by email, name, phone, or any identifier
- Real-time results from multiple databases
- Expandable database cards with detailed information

### UI Components

- **Spotlight Effect**: Animated spotlight on hero section
- **Background Beams**: Dynamic background animations
- **Text Generate Effect**: Animated text reveal
- **Hover Cards**: Interactive feature cards with smooth hover effects

### Dark Mode

- Automatic dark mode based on system preferences
- Smooth transitions between themes
- Optimized colors for both light and dark modes

## Customization

### Colors

Edit `app/globals.css` to customize the color scheme:

```css
:root {
  --background: #fafafa;
  --foreground: #171717;
}
```

### API Configuration

Modify `app/api/search/route.ts` to adjust:

- Request limits
- Language settings
- Error handling

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variable `LEAKOSINT_API_TOKEN`
4. Deploy

### Other Platforms

Build the application:

```bash
pnpm build
```

Start the production server:

```bash
pnpm start
```

## Environment Variables

| Variable              | Description              | Required |
| --------------------- | ------------------------ | -------- |
| `LEAKOSINT_API_TOKEN` | Your LeakOSINT API token | Yes      |

## License

This project is for educational and professional use. Ensure compliance with data protection laws and the LeakOSINT API terms of service.

## Support

For issues or questions:

- Create an issue in the repository
- Contact: security@gladiatorrx.com

## Acknowledgments

- [Aceternity UI](https://ui.aceternity.com/) for beautiful components
- [LeakOSINT](https://leakosintapi.com/) for the API
- [Next.js](https://nextjs.org/) team for the amazing framework

---

Built with 🛡️ by GladiatorrX - Protecting Digital Identities
