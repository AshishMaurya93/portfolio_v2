import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import PageTransition from "@/components/page-transition"
import { cn } from "@/lib/utils"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ashish Maurya | Front-End Developer",
  description: "Portfolio showcasing Ashish Maurya's front-end development work and projects",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={cn(geist.className, "bg-background antialiased")}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <Navigation />
          <PageTransition>
            <main className="min-h-screen">{children}</main>
          </PageTransition>
        </ThemeProvider>
      </body>
    </html>
  )
}
