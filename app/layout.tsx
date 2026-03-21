// Root layout for Next.js app
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'liminal · space',
  description: 'A retro liminal space experience with abstract non-conventional design',
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
