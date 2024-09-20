"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cn } from "@/lib/utils"

// Keyframe animation for changing the border color
const AnimatedBorder = `
  @keyframes borderColorChange {
    0% { border-color: rgb(255, 0, 0); } /* Red */
    33% { border-color: rgb(0, 255, 0); } /* Green */
    66% { border-color: rgb(0, 0, 255); } /* Blue */
    100% { border-color: rgb(255, 0, 0); } /* Back to Red */
  }
`

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <>
    <style>{AnimatedBorder}</style> {/* Inject animation */}
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex h-40 w-40 shrink-0 overflow-hidden rounded-full border-4 shadow-lg", // Size of the avatar
        "animate-[borderColorChange_3s_infinite] flex items-center justify-center", // Centering content
        className
      )}
      {...props}
    />
  </>
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn(
      "h-full w-full object-cover rounded-full", // Ensures the image fills the container and stays centered
      className
    )}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
