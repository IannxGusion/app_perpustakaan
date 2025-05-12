import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import type { NavGroup, NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, Folder, List, Bolt } from 'lucide-react';
import AppLogo from '@/components/app-logo';

const mainNavItems: NavGroup[] = [
    {
        title: 'Main',
        href: '/main',
        icon: Bolt,
    },
    {
        title: 'CRUDs',
        icon: List,
        items: [
            {
                title: 'CRUD: Peminjam',
                href: '/crud_peminjam',
                icon: Folder,
            },
            {
                title: 'CRUD: Pustakawan',
                href: '/crud_pustakawan',
                icon: Folder,
            },
            {
                title: 'CRUD: Peminjaman',
                href: '/crud_peminjaman',
                icon: Folder,
            },
            {
                title: 'CRUD: Buku',
                href: '/crud_buku',
                icon: Folder,
            }
        ]
    },
    
];

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: Folder,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/main" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
