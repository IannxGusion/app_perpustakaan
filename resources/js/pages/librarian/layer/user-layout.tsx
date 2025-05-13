import AppLayoutTemplate from '@/pages/librarian/layer/app-header-layout'; // Layout template, navbar(app-header-layout) atau sidebar(app-sidebar-layout)
import { type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';

interface UserLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default ({ children, breadcrumbs, ...props }: UserLayoutProps) => (
    <AppLayoutTemplate breadcrumbs={breadcrumbs} {...props}>
        {children}
    </AppLayoutTemplate>
);
