'use client';

import { Bolt, List } from 'lucide-react';
import * as React from 'react';

import AppLogo from '@/components/app-logo';
import { NavHome } from '@/components/nav-cruds';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from '@/components/ui/sidebar';
import { Link } from '@inertiajs/react';

const data = {
    home: [
        {
            name: 'Main',
            url: '/main',
            icon: Bolt,
        },
    ],
    navMain: [
        {
            title: 'CRUD',
            url: '#',
            icon: List,
            isActive: true,
            items: [
                {
                    title: 'Buku',
                    url: '/crud_books',
                },
                {
                    title: 'Peminjaman',
                    url: '/crud_borrowings',
                },
                {
                    title: 'Pustakawan',
                    url: '/crud_borrowers',
                },
                {
                    title: 'Peminjam',
                    url: '/crud_librarians',
                },
            ],
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props} variant="inset">
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
                <NavHome home={data.home} />
                <NavMain items={data.navMain} />
            </SidebarContent>

            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
