import { Head } from '@inertiajs/react';
import AppLayout from '@/pages/librarian/layer/user-layout';
import { Footer } from '@/components/element/footer';
import { type BreadcrumbItem } from '@/types';
import { Book, BookA, Calendar } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Laporan',
    href: '/laporan' },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Laporan" />

           <section className="bg-gray-200 text-center py-10 px-4 mt-4">
                <h1 className="text-4xl font-bold">Laporan</h1>
                <h2 className="text-xl font-semibold mb-6">Laporan Bulan Ini</h2>
            </section>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {/* Labels */}
                    <div className="space-y-6">
                        {[
                            { icon: Calendar, label: 'Date' },
                            { icon: Book, label: 'Nama Buku' },
                            { icon: Book, label: 'Peringkat Teratas' },
                            { icon: BookA, label: 'Ulasan' },
                            { icon: Book, label: 'Teratas' },
                        ].map(({ icon: Icon, label }) => (
                            <div key={label} className="flex items-center space-x-4">
                                <Icon className="w-6 h-6 text-blue-700" />
                                <span className="font-semibold text-gray-800">{label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Input fields column 1 */}
                    <div className="space-y-6">
                        {[...Array(5)].map((_, i) => (
                            <input
                                key={i}
                                type="text"
                                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                                placeholder="..."
                            />
                        ))}
                    </div>

                    {/* Input fields column 2 */}
                    <div className="space-y-6">
                        {[...Array(5)].map((_, i) => (
                            <input
                                key={i}
                                type="text"
                                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                                placeholder="..."
                            />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-start gap-10 mb-10">
                    {[
                        { month: 'April 2025', days: 30, highlight: 15 },
                        { month: 'May 2025', days: 31, highlight: 10 },
                    ].map(({ month, days, highlight }) => (
                        <div key={month} className="bg-white shadow p-4 rounded w-full max-w-xs">
                            <div className="text-center font-semibold mb-2 text-blue-700">{month}</div>
                            <div className="grid grid-cols-7 text-sm gap-1 text-center">
                                {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
                                    <div key={day} className="font-medium text-gray-500">{day}</div>
                                ))}
                                {Array.from({ length: days }, (_, i) => (
                                    <div
                                        key={i}
                                        className={`p-1 rounded cursor-pointer transition ${
                                            i + 1 === highlight
                                                ? "bg-blue-600 text-white font-bold"
                                                : "hover:bg-blue-100"
                                        }`}
                                    >
                                        {i + 1}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <button className="bg-blue-700 text-white px-8 py-3 rounded shadow hover:bg-blue-800 font-semibold transition">
                        Download
                    </button>
                </div>
            
            <Footer />
        </AppLayout>
    );
}
