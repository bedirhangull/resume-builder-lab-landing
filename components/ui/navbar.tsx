"use client"
import * as React from "react"
import Link from "next/link"
import { useEffect, useState } from "react"
import Logo from "@/public/logo.svg"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
  SheetHeader,
  SheetClose,
} from "@/components/ui/sheet"
import { Menu, Sparkles, BriefcaseBusiness, FileText, PenLine, CheckCircle, BarChart, Users, Lightbulb, Upload, Globe, DollarSign, BookOpen } from 'lucide-react'
import { ListItem } from "@/components/ui/list-item"
import Image from "next/image"

const resumeTemplates = [
  {
    title: "Professional",
    href: "/templates/professional",
    description: "Clean and modern templates suitable for various industries.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Creative",
    href: "/templates/creative",
    description: "Eye-catching designs for creative professionals and artists.",
    icon: Sparkles,
  },
  {
    title: "Executive",
    href: "/templates/executive",
    description: "Sophisticated templates for senior-level positions and C-suite executives.",
    icon: Users,
  },
]

const resumeExamples = [
  {
    title: "Tech Industry",
    href: "/examples/tech",
    description: "Sample resumes for software engineers, data scientists, and IT professionals.",
    icon: BarChart,
  },
  {
    title: "Business & Finance",
    href: "/examples/business",
    description: "Examples for roles in management, finance, and consulting.",
    icon: DollarSign,
  },
  {
    title: "Creative Fields",
    href: "/examples/creative",
    description: "Resumes for designers, writers, and other creative professionals.",
    icon: PenLine,
  },
]

const faangCompanies = [
  {
    name: "Facebook",
    icon: "/icons/facebook.svg",
    href: "/examples/faang/facebook",
  },
  {
    name: "Amazon",
    icon: "/icons/amazon.svg",
    href: "/examples/faang/amazon",
  },
  {
    name: "Apple",
    icon: "/icons/apple.svg",
    href: "/examples/faang/apple",
  },
  {
    name: "Netflix",
    icon: "/icons/netflix.svg",
    href: "/examples/faang/netflix",
  },
  {
    name: "Google",
    icon: "/icons/google.svg",
    href: "/examples/faang/google",
  },
]

const coverLetterTools = [
  {
    title: "AI-Powered Generator",
    href: "/cover-letter/ai-generator",
    description: "Create a personalized cover letter with our AI tool.",
    icon: Sparkles,
  },
  {
    title: "Writing Tool",
    href: "/cover-letter/writing-tool",
    description: "Interactive tool to help you craft the perfect cover letter.",
    icon: PenLine,
  },
  {
    title: "Job Posting Analyzer",
    href: "/cover-letter/job-analyzer",
    description: "Upload a job posting to generate a tailored cover letter and bullet points.",
    icon: Upload,
  },
]

const additionalTools = [
  {
    title: "ATS-Friendly Check",
    href: "/tools/ats-check",
    description: "Ensure your resume is optimized for Applicant Tracking Systems.",
    icon: CheckCircle,
  },
  {
    title: "Resume Review",
    href: "/tools/resume-review",
    description: "Get your resume reviewed by professionals and peers.",
    icon: Users,
  },
  {
    title: "Resume Tips",
    href: "/tools/resume-tips",
    description: "Expert advice on crafting a standout resume.",
    icon: Lightbulb,
  },
]

const blogPosts = [
  {
    title: "10 Resume Mistakes to Avoid",
    href: "/blog/resume-mistakes",
    description: "Learn about common resume pitfalls and how to steer clear of them.",
    color: "bg-pink-100",
    icon: FileText,
  },
  {
    title: "Mastering the Art of the Cover Letter",
    href: "/blog/cover-letter-mastery",
    description: "Tips and tricks to write compelling cover letters that get you noticed.",
    color: "bg-blue-100",
    icon: PenLine,
  },
  {
    title: "Navigating the Job Market in 2023",
    href: "/blog/job-market-2023",
    description: "Insights into current trends and strategies for job seekers.",
    color: "bg-green-100",
    icon: BarChart,
  },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white",
        isScrolled ? "bg-background/80 backdrop-blur-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div
            className="flex-shrink-0 rounded-lg shadow-sm ring-1"
          >
            <Link href="/">
              <Image className="rounded-lg" src={Logo} width={36} height={36} alt="resume wizard logo" />
            </Link>
          </div>
          <div className="hidden md:flex flex-grow justify-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Resume Templates</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[600px] lg:w-[700px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/templates"
                          >
                            <FileText className="h-6 w-6 text-primary" />
                            <div className="mb-2 mt-4 text-lg font-bold">
                              Resume Templates
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Choose from our wide selection of professional resume templates.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      {resumeTemplates.map((template) => (
                        <ListItem
                          key={template.title}
                          title={template.title}
                          href={template.href}
                          icon={template.icon}
                        >
                          {template.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Resume Examples</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[600px] lg:w-[700px] lg:grid-cols-[1fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/examples"
                          >
                            <CheckCircle className="h-6 w-6 text-primary" />
                            <div className="mb-2 mt-4 text-lg font-bold">
                              Resume Examples
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Explore real-world resume examples from various industries and top companies.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      {resumeExamples.map((example) => (
                        <ListItem
                          key={example.title}
                          title={example.title}
                          href={example.href}
                          icon={example.icon}
                        >
                          {example.description}
                        </ListItem>
                      ))}
                      <li className="lg:col-span-2">
                        <div className="mt-4 pt-4 border-t">
                          <h4 className="mb-2 text-sm font-bold leading-none">FAANG Company Examples</h4>
                          <ul className="grid grid-cols-5 gap-2">
                            {faangCompanies.map((company) => (
                              <li key={company.name}>
                                <Link
                                  href={company.href}
                                  className="flex flex-col items-center p-2 rounded-md hover:bg-muted transition-colors"
                                >
                                  <img src={company.icon} alt={company.name} className="w-8 h-8 mb-1" />
                                  <span className="text-xs text-center">{company.name}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Cover Letters</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[600px] lg:w-[700px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/cover-letter"
                          >
                            <PenLine className="h-6 w-6 text-primary" />
                            <div className="mb-2 mt-4 text-lg font-bold">
                              Cover Letter Tools
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Create compelling cover letters with our AI-powered tools and expert guidance.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      {coverLetterTools.map((tool) => (
                        <ListItem
                          key={tool.title}
                          title={tool.title}
                          href={tool.href}
                          icon={tool.icon}
                        >
                          {tool.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[600px] lg:w-[700px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/tools"
                          >
                            <BarChart className="h-6 w-6 text-primary" />
                            <div className="mb-2 mt-4 text-lg font-bold">
                              Career Tools
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Boost your job search with our suite of powerful career tools and resources.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      {additionalTools.map((tool) => (
                        <ListItem
                          key={tool.title}
                          title={tool.title}
                          href={tool.href}
                          icon={tool.icon}
                        >
                          {tool.description}
                        </ListItem>
                      ))}
                      <li className="lg:col-span-2">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex items-center justify-between w-full p-4 rounded-md bg-muted hover:bg-muted/80 transition-colors"
                            href="/tools/salary-insights"
                          >
                            <div>
                              <h4 className="text-sm font-medium mb-1">Salary Insights</h4>
                              <p className="text-xs text-muted-foreground">Discover salary trends and negotiate better compensation</p>
                            </div>
                            <DollarSign className="h-6 w-6 text-primary ml-4" />
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Blog</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[600px] lg:w-[700px] lg:grid-cols-[1fr_1fr]">
                      <li className="row-span-4">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/blog"
                          >
                            <BookOpen className="h-6 w-6 text-primary" />
                            <div className="mb-2 mt-4 text-lg font-bold">
                              Career Blog
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Explore our latest articles on career advice, job search strategies, and industry insights.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      {blogPosts.map((post) => (
                        <li key={post.title}>
                          <NavigationMenuLink asChild>
                            <a
                              className={`block select-none space-y-1  rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${post.color}`}
                              href={post.href}
                            >
                              <div className="flex items-center justify-between">
                                <div className="text-sm font-medium leading-none">{post.title}</div>
                                <post.icon className="h-4 w-4 text-primary" />
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {post.description}
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/languages" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      <Globe className="w-4 h-4 mr-2" />
                      Languages
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center space-x-2">
            <Button asChild variant="default" size="lg" className="hidden sm:inline-flex font-bold shadow-sm">
              <Link href="/register">
                <span>Coming Soon</span>
              </Link>
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="sm:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Resume Builder Menu</SheetTitle>
                  <SheetDescription>
                    Access our resume building tools and resources.
                  </SheetDescription>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 mt-8">
                  <MobileNavItem href="/templates" icon={FileText} onClick={() => setIsOpen(false)}>
                    Resume Templates
                  </MobileNavItem>
                  <MobileNavItem href="/examples" icon={CheckCircle} onClick={() => setIsOpen(false)}>
                    Resume Examples
                  </MobileNavItem>
                  <MobileNavItem href="/cover-letter" icon={PenLine} onClick={() => setIsOpen(false)}>
                    Cover Letters
                  </MobileNavItem>
                  <MobileNavItem href="/tools" icon={BarChart} onClick={() => setIsOpen(false)}>
                    Career Tools
                  </MobileNavItem>
                  <MobileNavItem href="/tools/salary-insights" icon={DollarSign} onClick={() => setIsOpen(false)}>
                    Salary Insights
                  </MobileNavItem>
                  <MobileNavItem href="/blog" icon={BookOpen} onClick={() => setIsOpen(false)}>
                    Blog
                  </MobileNavItem>
                  <MobileNavItem href="/languages" icon={Globe} onClick={() => setIsOpen(false)}>
                    Languages
                  </MobileNavItem>
                </nav>
                <SheetClose asChild>
                  <Button className="w-full mt-8" size="lg">
                    Coming Soon
                  </Button>
                </SheetClose>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  )
}

function MobileNavItem({
  href,
  icon: Icon,
  children,
  onClick
}: {
  href: string;
  icon: React.ElementType;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      className="flex items-center space-x-2 text-lg font-medium p-2 rounded-md hover:bg-accent"
      onClick={onClick}
    >
      <Icon size={20} />
      <span>{children}</span>
    </Link>
  )
}

