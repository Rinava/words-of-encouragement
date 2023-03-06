import './globals.css';

export const metadata = {
  title: 'Words of Encouragement',
  description:
    'Write a message to someone who needs it or read a message from someone who cares.',
  keywords: ['Encouragement', 'Saddness', 'Hope', 'Love', 'Words'],
  authors: [{ name: 'Lara Mateo', url: 'https://www.laramateo.com/' }],
  creator: 'Lara Mateo',
  publisher: 'Lara Mateo',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',  
  },
  openGraph: {
    title: 'Words of Encouragement',
    description:
      'Write a message to someone who needs it or read a message from someone who cares.',

    siteName: 'Words of Encouragement',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
