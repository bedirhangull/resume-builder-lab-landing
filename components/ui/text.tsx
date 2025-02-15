import React from 'react'
import { cn } from "@/lib/utils"

type TextProps = {
  children: React.ReactNode
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'caption'
  color?: 'primary' | 'secondary' | 'muted' | 'black'
  align?: 'left' | 'center' | 'right'
  className?: string
  bold?: boolean
}

export function Text({
  children,
  variant = 'body',
  color = 'primary',
  align = 'left',
  bold = false,
  className,
  ...props
}: TextProps) {
  const baseStyles = "max-w-prose"
  
  const variantStyles = {
    h1: "text-4xl sm:text-5xl md:text-6xl font-extrabold",
    h2: "text-3xl sm:text-4xl md:text-5xl font-bold",
    h3: "text-2xl sm:text-3xl md:text-4xl font-semibold",
    h4: "text-xl sm:text-2xl md:text-3xl font-semibold",
    body: "text-base sm:text-lg",
    caption: "text-sm sm:text-base"
  }

  const colorStyles = {
    black : "text-black",
    primary: "text-primary",
    secondary: "text-secondary",
    muted: "text-muted-foreground"
  }

  const alignStyles = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  }

  const boldStyles = "font-bold"

  const Element = variant.startsWith('h') ? variant : 'p'

  return (
    <Element
      className={cn(
        boldStyles,
        baseStyles,
        variantStyles[variant],
        colorStyles[color],
        alignStyles[align],
        className
      )}
      {...props}
    >
      {children}
    </Element>
  )
}

