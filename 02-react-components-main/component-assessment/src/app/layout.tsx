import '../app/styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'User Management',
  description: 'User management dashboard',
  // Optional: Add more meta tags for better SEO
  viewport: 'width=device-width, initial-scale=1.0',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* You can add other meta tags like charset, viewport, etc. */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#3182ce" />
      </head>
      <body className="min-h-screen bg-gray-50 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
