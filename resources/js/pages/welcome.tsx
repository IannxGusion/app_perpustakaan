import AppLogoIcon from '@/components/app-logo-icon';
import { Footer } from '@/components/element/footer';
import { MobileMenuToggle, MobileNav, NavLink } from '@/components/nav-component';
import { Button } from '@/components/ui/button';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { ArrowBigUpDashIcon } from 'lucide-react';
import { useState } from 'react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <Head title="Welcome" />

            <header className="mb-10">
                <nav className="relative border-b border-gray-200 bg-white px-4 py-3 shadow-sm sm:px-6 dark:border-gray-700 dark:bg-gray-900">
                    <div className="mx-auto flex max-w-screen-xl items-center justify-between">
                        {/* Logo */}
                        <a href="/" className="flex items-center space-x-2">
                            <AppLogoIcon className="h-10 w-10" />
                            <span className="text-2xl font-bold tracking-tight text-gray-800 dark:text-white">Project Library VI</span>
                        </a>

                        {/* Desktop Nav */}
                        <div className="hidden items-center space-x-8 lg:flex">
                            <NavLink href="#" label="Home" active />
                            <NavLink href="#learn" label="Learn" />
                            <NavLink href="#feature" label="Features" />
                            <NavLink href="#sponsor" label="Sponsor" />
                        </div>

                        {/* Actions (Auth Buttons) */}
                        <div className="hidden items-center space-x-4 lg:flex">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="rounded-md border border-gray-300 px-5 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 dark:border-gray-600 dark:text-white dark:hover:bg-gray-800"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link href={route('login')} className="px-4 py-2 text-sm text-gray-800 hover:underline dark:text-white">
                                        Log in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="bg-primary-800 hover:bg-primary-700 focus:ring-primary-500 rounded-md px-4 py-2 text-sm font-semibold text-white focus:ring-2 focus:ring-offset-2"
                                    >
                                        Daftar
                                    </Link>
                                </>
                            )}
                        </div>

                        {/* Mobile Hamburger */}
                        <div className="lg:hidden">
                            <MobileMenuToggle onClick={() => setMobileMenuOpen(!mobileMenuOpen)} isOpen={mobileMenuOpen} />
                        </div>
                    </div>

                    {/* Mobile Nav */}
                    <MobileNav isAuthenticated={auth.user} isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
                </nav>
            </header>

            <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                <main className="flex w-full max-w-[335px] flex-col-reverse lg:max-w-4xl lg:flex-row">
                    <div className="flex-1 rounded-br-lg rounded-bl-lg bg-white p-6 pb-12 text-[13px] leading-[20px] shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] lg:rounded-tl-lg lg:rounded-br-none lg:p-20 dark:bg-[#161615] dark:text-[#EDEDEC] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]">
                        <h1 className="mb-1 font-medium">Welcome To Libary VI</h1>
                        <p className="mb-2 text-[#706f6c] dark:text-[#A1A09A]">
                            Disini Kami menyediakan berbagai buku
                            <br />
                        </p>
                        <ul className="mb-4 flex flex-col lg:mb-6">
                            <li className="relative flex items-center gap-4 py-2 before:absolute before:top-1/2 before:bottom-0 before:left-[0.4rem] before:border-l before:border-[#e3e3e0] dark:before:border-[#3E3E3A]">
                                <span className="relative bg-white py-1 dark:bg-[#161615]">
                                    <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-[#e3e3e0] bg-[#FDFDFC] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.03),0px_1px_2px_0px_rgba(0,0,0,0.06)] dark:border-[#3E3E3A] dark:bg-[#161615]">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#dbdbd7] dark:bg-[#3E3E3A]" />
                                    </span>
                                </span>
                                <span>
                                    Github
                                    <a
                                        href="https://github.com/Dirga36/app_perpustakaan"
                                        target="_blank"
                                        className="text-primary dark:text-secondary ml-1 inline-flex items-center space-x-1 font-medium underline underline-offset-4"
                                    >
                                        <span>Documentation</span>
                                        <svg
                                            width={10}
                                            height={11}
                                            viewBox="0 0 10 11"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-2.5 w-2.5"
                                        >
                                            <path
                                                d="M7.70833 6.95834V2.79167H3.54167M2.5 8L7.5 3.00001"
                                                stroke="currentColor"
                                                strokeLinecap="square"
                                            />
                                        </svg>
                                    </a>
                                </span>
                            </li>
                            <li className="relative flex items-center gap-4 py-2 before:absolute before:top-0 before:bottom-1/2 before:left-[0.4rem] before:border-l before:border-[#e3e3e0] dark:before:border-[#3E3E3A]">
                                <span className="relative bg-white py-1 dark:bg-[#161615]">
                                    <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-[#e3e3e0] bg-[#FDFDFC] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.03),0px_1px_2px_0px_rgba(0,0,0,0.06)] dark:border-[#3E3E3A] dark:bg-[#161615]">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#dbdbd7] dark:bg-[#3E3E3A]" />
                                    </span>
                                </span>
                                <span>
                                    Web Perpustakaan
                                    <a
                                        href={route('dashboard')}
                                        target="_blank"
                                        className="text-primary dark:text-secondary ml-1 inline-flex items-center space-x-1 font-medium underline underline-offset-4"
                                    >
                                        <span>Dashboard</span>
                                        <svg
                                            width={10}
                                            height={11}
                                            viewBox="0 0 10 11"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-2.5 w-2.5"
                                        >
                                            <path
                                                d="M7.70833 6.95834V2.79167H3.54167M2.5 8L7.5 3.00001"
                                                stroke="currentColor"
                                                strokeLinecap="square"
                                            />
                                        </svg>
                                    </a>
                                </span>
                            </li>
                        </ul>
                        <ul className="flex gap-3 text-sm leading-normal">
                            <li>
                                <a
                                    href={route('dashboard')}
                                    className="inline-block rounded-sm border border-black bg-[#1b1b18] px-5 py-1.5 text-sm leading-normal text-white hover:border-black hover:bg-black dark:border-[#eeeeec] dark:bg-[#eeeeec] dark:text-[#1C1C1A] dark:hover:border-white dark:hover:bg-white"
                                >
                                    Getting Started
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-1 items-center justify-center bg-white p-6 shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] lg:p-20 dark:bg-[#161615] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]">
                        <AppLogoIcon />
                    </div>
                </main>
            </div>

            <section id="learn" className="bg-primary/85 mt-20 mb-10 h-screen pt-20 dark:bg-gray-900">
                <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
                    <h1 className="mb-4 text-4xl leading-none font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">
                        “Jelajahi Dunia Melalui Buku”
                    </h1>
                    <p className="mb-8 text-lg font-normal text-white sm:px-16 lg:text-xl xl:px-48 dark:text-gray-400">
                        Perpustakaan Libay VI menyediakan koleksi lengkap dan nyaman untuk menemani belajar dan hiburan Anda. Temukan pengetahuan dan
                        inspirasi di setiap halaman!
                    </p>
                    <div className="mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 lg:mb-16">
                        <a
                            href="https://github.com/Dirga36/app_perpustakaan/wiki/First-Wiki"
                            className="bg-primary hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-white focus:ring-4 dark:text-black"
                        >
                            Learn more
                            <svg className="-mr-1 ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            <section id="feature" className="bg-white dark:bg-gray-900">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
                    <div className="mb-8 max-w-screen-md lg:mb-16">
                        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                            Dirancang untuk "penyelam" seperti Anda
                        </h2>
                        <p className="text-gray-500 sm:text-xl dark:text-gray-400">
                            Di Libary VI, kami berfokus pada Hiburan, Pengetahuan, dan Inspirasi dapat membuka nilai jangka panjang dan mendorong
                            pertumbuhan untuk Berfikir.
                        </p>
                    </div>
                    <div className="space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
                        <div>
                            <div className="bg-primary-100 dark:bg-primary-900 mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12">
                                <svg
                                    className="text-primary-600 dark:text-primary-300 h-5 w-5 lg:h-6 lg:w-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Perpustakaan</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Rencanakan, ciptakan, dan luncurkan program literasi dengan mudah. Bekerja sama secara mulus dengan seluruh bagian
                                organisasi untuk mencapai target literasi dan kunjungan perpustakaan setiap bulannya dengan perencanaan yang
                                terstruktur.
                            </p>
                        </div>
                        <div>
                            <div className="bg-primary-100 dark:bg-primary-900 mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12">
                                <svg
                                    className="text-primary-600 dark:text-primary-300 h-5 w-5 lg:h-6 lg:w-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Layanan Hukum dan Keamanan Informasi</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Lindungi koleksi dan data pengunjung dengan sistem yang aman dan sesuai regulasi. Gunakan alur kerja terstruktur dan
                                izin akses khusus untuk menjaga kepatuhan dan keamanan data dalam perpustakaan digital maupun fisik.
                            </p>
                        </div>
                        <div>
                            <div className="bg-primary-100 dark:bg-primary-900 mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12">
                                <svg
                                    className="text-primary-600 dark:text-primary-300 h-5 w-5 lg:h-6 lg:w-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                                        clipRule="evenodd"
                                    ></path>
                                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Otomatisasi Layanan</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Otomatisasi peminjaman, pengembalian, notifikasi, dan lainnya. Tingkatkan efisiensi dengan ratusan template alur kerja
                                otomatis untuk mendukung operasional harian perpustakaan.
                            </p>
                        </div>
                        <div>
                            <div className="bg-primary-100 dark:bg-primary-900 mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12">
                                <svg
                                    className="text-primary-600 dark:text-primary-300 h-5 w-5 lg:h-6 lg:w-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Manajemen Keuangan</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Sistem audit yang siap digunakan untuk pengelolaan anggaran perpustakaan. Mendukung proses penting seperti laporan
                                bulanan, anggaran kuartalan, dan pertanggungjawaban keuangan lainnya.
                            </p>
                        </div>
                        <div>
                            <div className="bg-primary-100 dark:bg-primary-900 mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12">
                                <svg
                                    className="text-primary-600 dark:text-primary-300 h-5 w-5 lg:h-6 lg:w-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Desain Layanan Pengguna</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Ciptakan pengalaman pengguna yang menarik dan menyenangkan. Dukung kolaborasi antar divisi seperti edukasi, promosi,
                                dan pengembangan layanan dalam merancang pengalaman pengunjung yang optimal.
                            </p>
                        </div>
                        <div>
                            <div className="bg-primary-100 dark:bg-primary-900 mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12">
                                <svg
                                    className="text-primary-600 dark:text-primary-300 h-5 w-5 lg:h-6 lg:w-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Operasional Harian</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Jalankan kegiatan perpustakaan secara efisien dan fleksibel. Gunakan alur kerja yang dapat disesuaikan untuk mendukung
                                tim pustakawan, relawan, serta kebutuhan pengunjung.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="sponsor" className="bg-white dark:bg-gray-900">
                <div className="mx-auto max-w-screen-xl px-4 py-8 lg:py-16">
                    <h2 className="mb-10 text-center text-3xl leading-tight font-extrabold tracking-tight text-gray-900 md:text-4xl dark:text-white">
                        Disponsori Oleh
                    </h2>

                    <div className="grid grid-cols-2 items-center justify-center gap-6 sm:grid-cols-3 sm:gap-8 md:grid-cols-4 md:gap-10 lg:grid-cols-6">
                        <a
                            href="https://www.gramedia.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center justify-center space-y-2 transition-colors hover:text-blue-600"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="40" height="40" fill="none">
                                <path
                                    d="M150 30c-66.3 0-120 53.7-120 120s53.7 120 120 120c30.9 0 59.1-11.5 80.8-30.4l-32.4-32.4c-13.5 11.3-30.9 18-48.4 18-39.7 0-72-32.3-72-72s32.3-72 72-72c19.9 0 38.1 8.1 51.4 21.1l-51.4.1v48h108v-18C258 80.7 208.7 30 150 30z"
                                    fill="#007bff"
                                />
                            </svg>
                            <span className="text-center text-base font-semibold tracking-tight">Gramedia</span>
                        </a>

                        <a
                            href="https://books.google.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center justify-center space-y-2 transition-colors hover:text-orange-500"
                        >
                            <svg width="40" height="40" viewBox="-3 0 262 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4" /><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853" /><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05" /><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335" /></svg>                            <span className="text-center text-base font-semibold tracking-tight">Google Books</span>
                        </a>

                        <a
                            href="https://ipusnas.id/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center justify-center space-y-2 transition-colors hover:text-green-600"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 64 64">
                                <path d="M32 4 L39 24 H60 L42 38 L48 58 L32 46 Z" fill="#00A651" />
                                <path d="M32 4 L32 46 L16 58 L22 38 L4 24 H25 Z" fill="#0072BC" />
                            </svg>
                            <span className="text-center text-base font-semibold tracking-tight">iPusnas</span>
                        </a>

                        <a
                            href="https://www.ibilibrary.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center justify-center space-y-2 transition-colors hover:text-purple-600"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="40" height="40" fill="none">
                                {/* Buku terbuka bergaya digital */}
                                <rect x="6" y="12" width="20" height="40" rx="2" fill="#5B21B6" />
                                <rect x="24" y="12" width="8" height="40" rx="1" fill="#7C3AED" />
                                <rect x="32" y="12" width="20" height="40" rx="2" fill="#8B5CF6" />

                                {/* Tulisan iBI di tengah */}
                                <text x="32" y="38" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="Arial, sans-serif">
                                    iBI
                                </text>
                            </svg>
                            <span className="text-center text-base font-semibold tracking-tight">iBI Library</span>
                        </a>

                        <a
                            href="https://e-resources.perpusnas.go.id/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center justify-center space-y-2 transition-colors hover:text-blue-700"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="40" height="40" fill="none">
                                {/* Buku terbuka digital */}
                                <path d="M10 12h18c1.1 0 2 .9 2 2v36c0 1.1-.9 2-2 2H10c-1.1 0-2-.9-2-2V14c0-1.1.9-2 2-2z" fill="#0D47A1" />
                                <path d="M36 12h18c1.1 0 2 .9 2 2v36c0 1.1-.9 2-2 2H36c-1.1 0-2-.9-2-2V14c0-1.1.9-2 2-2z" fill="#1976D2" />
                                {/* Tulisan eR */}
                                <text x="32" y="38" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="Arial, sans-serif">
                                    eR
                                </text>
                            </svg>
                            <span className="text-center text-base font-semibold tracking-tight">e-Resources Perpusnas</span>
                        </a>

                        <a
                            href="https://ijakarta.id/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center justify-center space-y-2 transition-colors hover:text-teal-600"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="40" height="40" fill="none">
                                {/* Buku terbuka */}
                                <rect x="6" y="12" width="22" height="40" rx="2" fill="#00695C" />
                                <rect x="28" y="12" width="8" height="40" rx="1" fill="#26A69A" />
                                <rect x="36" y="12" width="22" height="40" rx="2" fill="#4DB6AC" />

                                {/* Tulisan iJ di tengah */}
                                <text x="32" y="38" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="Arial, sans-serif">
                                    iJ
                                </text>
                            </svg>
                            <span className="text-center text-base font-semibold tracking-tight">iJakarta</span>
                        </a>
                    </div>
                </div>
            </section>

            <a
                href="#"
                className="sticky right-8 bottom-8 float-right z-50"
            >
                <Button className="">
                    <ArrowBigUpDashIcon className="size-full" />
                </Button>
            </a>

            <div className='my-4'>
                {/* space for arrow Up */}
            </div>

            <Footer />
        </>
    );
}
