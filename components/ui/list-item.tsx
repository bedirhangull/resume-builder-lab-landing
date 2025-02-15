import { cn } from "@/lib/utils"
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu"
import React from "react"
import { LucideIcon } from "lucide-react"

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
    title: string
    icon?: LucideIcon
    iconClassName?: string
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    ListItemProps
>(({ className, title, children, icon: Icon, iconClassName, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="flex items-center gap-2 ">
                        {Icon && (
                            <Icon className={cn("h-6 w-6", iconClassName)} />
                        )}

                        <div className="text-md font-bold leading-none">{title}</div>
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

export { ListItem }