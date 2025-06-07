import { Donut } from '@/components/element/donut';
import { Multiple } from '@/components/element/multiple';
import { CarouselPlugin } from '@/components/element/plugin';
import AppLayout from '@/pages/admin/layer/app-layout';
import { Head } from '@inertiajs/react';

import type { Book, BreadcrumbItem, Categories } from '@/types';
import Heading from '@/components/heading';

const breadcrumbs: BreadcrumbItem[] = [{ title: 'Dashboard', href: '/main' }];

export default function Dashboard({ ...props }: { books: Book[]; categories: Categories[] }) {
    const { books, categories } = props;

    const totalBooks = books.length;
    const totalCategories = categories.length;
    const activeBooks = books.filter((b) => b.status === 'Available').length;
    const latestBooks = books.slice(0, 5);

    const activities = ["Buku 'React Advanced' ditambahkan", 'Admin login pada 09:00', "Kategori 'Science' diperbarui", 'Backup database berhasil'];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard Admin" />

            <div className="min-h-screen bg-gray-50 p-6 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                <div className="mx-auto max-w-7xl space-y-8">
                    {/* Header */}
                    <header>
                        <h1 className="mb-2 text-4xl font-bold">Dashboard Admin</h1>
                        <p className="text-gray-600 dark:text-gray-300">Monitor kinerja sistem dan aktivitas terkini.</p>
                    </header>

                    {/* Summary Cards */}
                    <section className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                        <StatCard title="Total Buku" value={totalBooks.toString()} icon="📚" />
                        <StatCard title="Buku Tersedia" value={activeBooks.toString()} icon="✅" />
                        <StatCard title="Kategori" value={totalCategories.toString()} icon="🏷️" />
                    </section>

                    {/* Main Content Grid */}
                    <section className="grid gap-6 md:grid-cols-3">
                        {/* Left: Donut Chart */}
                        <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800 dark:shadow-white">
                            <Heading title='Distribusi Buku' description='Menunjukkan total buku untuk setiap kategori
'/>
                            <Donut />
                        </div>

                        {/* Middle: Latest Books */}
                        <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800 dark:shadow-white">
                            <h2 className="mb-4 text-xl font-semibold">📖 Buku Terbaru</h2>
                            <ul className="scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-transparent max-h-[280px] space-y-3 overflow-y-auto">
                                {latestBooks.map((book, i) => (
                                    <li
                                        key={i}
                                        className="cursor-pointer rounded-md bg-blue-50 p-3 transition hover:bg-blue-100 dark:bg-blue-900 dark:hover:bg-blue-800"
                                    >
                                        <p className="font-semibold">{book.title}</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">{book.author}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right: Activity Feed */}
                        <div className="flex flex-col rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800 dark:shadow-white">
                            <h2 className="mb-4 text-xl font-semibold">🕒 Aktivitas Terbaru</h2>
                            <ul className="scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-transparent max-h-[280px] flex-1 space-y-2 overflow-y-auto">
                                {activities.map((act, i) => (
                                    <li key={i} className="rounded-md bg-blue-50 p-3 dark:bg-blue-900">
                                        {act}
                                    </li>
                                ))}
                            </ul>
                            <button className="mt-4 self-end rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">
                                Lihat Semua
                            </button>
                        </div>
                    </section>

                    {/* Bottom Section */}
                    <section className="grid gap-6 md:grid-cols-2">
                        {/* Multiple Component */}
                        <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800 dark:shadow-gray-900">
                            <h2 className="mb-4 text-xl font-semibold">Multi Actions</h2>
                            <Multiple />
                        </div>

                        {/* Carousel */}
                        <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800 dark:shadow-gray-900">
                            <h2 className="mb-4 text-xl font-semibold">Informasi / Promo</h2>
                            <CarouselPlugin />
                        </div>
                    </section>
                </div>
            </div>
        </AppLayout>
    );
}

function StatCard({ title, value, icon }: { title: string; value: string; icon: string }) {
    return (
        <div className="flex cursor-default items-center gap-4 rounded-xl bg-white p-5 shadow-lg transition hover:shadow-xl dark:bg-gray-800 dark:shadow-white">
            <div className="text-4xl">{icon}</div>
            <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-300">{title}</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{value}</p>
            </div>
        </div>
    );
}
