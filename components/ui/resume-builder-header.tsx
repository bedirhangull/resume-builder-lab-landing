import Link from 'next/link'
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold">ResumeBuilder</span>
        </Link>
        <nav className="flex items-center space-x-4">
          <Link href="/build">
            <Button variant="ghost">Build Resume</Button>
          </Link>
          <Link href="/templates">
            <Button variant="ghost">Templates</Button>
          </Link>
          <Link href="/about">
            <Button variant="ghost">About</Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}

