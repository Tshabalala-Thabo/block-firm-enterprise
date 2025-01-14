import { Calendar, Grip, Clipboard, Users, Settings, ArrowLeftRight, Package, ChevronDown, ChevronsUpDown, User, HelpCircle,LogOut } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar"

import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@radix-ui/react-collapsible"

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
// Menu items.
const items = [
    {
        title: "Dashboard",
        url: "#",
        icon: Grip,
    },
    {
        title: "Customers",
        url: "#",
        icon: Users,
    },
    {
        title: "Orders",
        url: "#",
        icon: Clipboard,
    },
    {
        title: "Schedule",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Transactions",
        url: "#",
        icon: ArrowLeftRight,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
]

function ProfileDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="flex items-center w-full p-2 rounded-md hover:bg-accent">
                    <Avatar className="w-8 h-8 mr-2">
                        <AvatarImage src="/avatar.png" alt="User" />
                        <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 text-left">
                        <p className="text-sm font-medium">John Doe</p>
                        <p className="text-xs text-muted-foreground">john@example.com</p>
                    </div>
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="start" side="right" forceMount>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <HelpCircle className="mr-2 h-4 w-4" />
                    <span>Help</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export function AppSidebar() {
    return (
        <Sidebar className="w-56">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="mb-5 mt-2 h-auto"><img src="logo.png" className="h-auto w-full" alt="logo" /></SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url} className="px-5 py-5">
                                            <item.icon className="h-6 w-6 scale-150 mr-3" />
                                            <span className="text-sm text-base">{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                            <Collapsible className="group/collapsible">
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton className="px-5">
                                            <Package className="h-6 w-6 scale-150 mr-3" />
                                            <span className="text-sm text-base">Inventory</span>
                                            <ChevronDown className="ml-auto" />
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            <SidebarMenuSubItem>
                                                <span className="text-sm text-base">Products</span>
                                            </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                        <SidebarMenuSub>
                                            <SidebarMenuSubItem>
                                                <span className="text-sm text-base">Gategories</span>
                                            </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                        <SidebarMenuSub>
                                            <SidebarMenuSubItem>
                                                <span className="text-sm text-base">Colors</span>
                                            </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        </SidebarMenu>
                    </SidebarGroupContent>

                </SidebarGroup>
            </SidebarContent>
            <SidebarGroup className="mt-auto">
                <ProfileDropdown />
            </SidebarGroup>
        </Sidebar>
    )
}
