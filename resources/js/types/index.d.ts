import { Book, LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';
export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    href?: string;
    icon?: LucideIcon | null;
    items?: NavItem[];
}

export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

export interface Categories {
    [x: string]: unknown;
    id: number;
    name: string;
    description: string;
    colour?: string;
    icon?: string;
}

export interface Result {
    id: number;
    book: Book;
}

export interface Book {
    id: number;
    title: string;
    categories: Categories;
    content: text;
    author: string;
    publisher: string;
    publication_date: date;
    status: string;
    cover: string;

    review: ErrReview;
    collected: string;
}

export interface Borrowing {
    id: number;
    book: Book;
    user: User;
    borrow_date: string;
    return_date: string;
    status: string;
    updated_at: string;
}

export interface ErrReview {
    id: number;
    star: number;
    comment: string;
    created_at: string;
}

export interface Collection {
    id: number;
    name: string;
    borrowing: Borrowing;
}
export interface Review {
    id: number;
    star: number;
    comment: string;
    created_at: string;
    user: User;
}

export interface SearchResult {
    books: Book[];
    categories: Categories[];
}
