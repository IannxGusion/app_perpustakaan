import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"
//import { usePage } from "@inertiajs/react"

function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  //const page = usePage<SharedData>();
  //const { auth } = page.props;

  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        //auth.user.role === "ADMIN" && "bg-red-400 dark:bg-red-700",
        //auth.user.role === "PUSTAKAWAN" && "bg-green-400 dark:bg-green-700",
        //auth.user.role === "PEMIJAM" && "bg-blue-400 dark:bg-blue-700",                                        >
      className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }
