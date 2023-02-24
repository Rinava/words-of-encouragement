import './globals.css'

export const metadata = {
  title: 'Words of Encouragement',
  description: 'Write a message to someone who needs it or read a message from someone who cares.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
