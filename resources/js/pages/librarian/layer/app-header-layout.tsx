import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
import { Footer } from '@/components/element/footer';
import { AppHeader } from '@/pages/librarian/layer/app-header';
import { type BreadcrumbItem } from '@/types';
import type { PropsWithChildren } from 'react';

export default function AppHeaderLayout({ children, breadcrumbs }: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) {
    return (
        <AppShell>
            <AppHeader breadcrumbs={breadcrumbs} />
            <AppContent>{children}</AppContent>
            <Footer />
        </AppShell>
    );
}
