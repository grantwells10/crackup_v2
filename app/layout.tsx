import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Crack'd Up - Flavored Liquid Eggs",
  description: "The first line of flavor-infused whole liquid eggs",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inika:wght@400;700&family=Gabarito:wght@400;700;800;900&family=Patrick+Hand&display=swap" rel="stylesheet" />
      </head>
      <body className={`font-inika ${inter.className}`}>{children}</body>
    </html>
  )
}
