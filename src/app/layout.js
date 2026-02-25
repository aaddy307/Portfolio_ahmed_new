import './globals.css';

export const metadata = {
  title: 'Ahmed Khan - Web Developer & AI Enthusiast',
  description: 'Ahmed Khan - Web Developer, UI/UX Designer, and AI & ML Enthusiast. Ex-student of Universal AI University, Karjat.',
  keywords: 'Ahmed Khan, Web Developer, UI/UX Designer, AI ML, React, Node.js, Portfolio',
  authors: [{ name: 'Ahmed Khan' }],
  openGraph: {
    title: 'Ahmed Khan - Web Developer & AI Enthusiast',
    description: 'Full-stack developer and AI/ML student. Creating intelligent web solutions.',
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}