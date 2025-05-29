import { Head } from '@inertiajs/react';
import AppLayout from '@/pages/admin/layer/app-layout';
import { Donut } from '@/components/element/donut';
import { Multiple } from '@/components/element/multiple';
import { CarouselPlugin } from '@/components/element/plugin';

import type { Book, BreadcrumbItem, Categories } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
  { title: 'Dashboard', href: '/main' },
];

export default function Dashboard({ ...props }: { books: Book[], categories: Categories[] }) {
  const { books, categories } = props;

  const totalBooks = books.length;
  const totalCategories = categories.length;
  const activeBooks = books.filter(b => b.status === 'active').length;
  const latestBooks = books.slice(0, 5);

  const activities = [
    "Buku 'React Advanced' ditambahkan",
    "Admin login pada 09:00",
    "Kategori 'Science' diperbarui",
    "Backup database berhasil",
  ];

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Dashboard Admin" />

      <div className="min-h-screen bg-gray-50 p-6 text-gray-900">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <header>
            <h1 className="text-4xl font-bold mb-2">Dashboard Admin</h1>
            <p className="text-gray-600">Monitor kinerja sistem dan aktivitas terkini.</p>
          </header>

          {/* Summary Cards */}
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <StatCard title="Total Buku" value={totalBooks.toString()} icon="📚" />
            <StatCard title="Buku Aktif" value={activeBooks.toString()} icon="✅" />
            <StatCard title="Kategori" value={totalCategories.toString()} icon="🏷️" />
          </section>

          {/* Main Content Grid */}
          <section className="grid md:grid-cols-3 gap-6">
            {/* Left: Donut Chart */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Distribusi Buku</h2>
              <Donut books={books} />
            </div>

            {/* Middle: Latest Books */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4">📖 Buku Terbaru</h2>
              <ul className="space-y-3 max-h-[280px] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-transparent">
                {latestBooks.map((book, i) => (
                  <li
                    key={i}
                    className="bg-blue-50 p-3 rounded-md hover:bg-blue-100 transition cursor-pointer"
                  >
                    <p className="font-semibold">{book.title}</p>
                    <p className="text-sm text-gray-600">{book.author}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Activity Feed */}
            <div className="bg-white rounded-2xl p-6 shadow-lg flex flex-col">
              <h2 className="text-xl font-semibold mb-4">🕒 Aktivitas Terbaru</h2>
              <ul className="flex-1 space-y-2 overflow-y-auto max-h-[280px] scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-transparent">
                {activities.map((act, i) => (
                  <li key={i} className="bg-blue-50 p-3 rounded-md">
                    {act}
                  </li>
                ))}
              </ul>
              <button className="mt-4 self-end rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition">
                Lihat Semua
              </button>
            </div>
          </section>

          {/* Bottom Section */}
          <section className="grid md:grid-cols-2 gap-6">
            {/* Multiple Component */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Multi Actions</h2>
              <Multiple />
            </div>

            {/* Carousel */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Informasi / Promo</h2>
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
    <div className="rounded-xl bg-white p-5 shadow-lg flex items-center gap-4 cursor-default hover:shadow-xl transition">
      <div className="text-4xl">{icon}</div>
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  );
}
