import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import AppLogoIcon from '@/components/app-logo-icon';


export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (

        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>


            <header>
                <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <a href="https://flowbite.com" className="flex items-center">
                            <AppLogoIcon className='h-15'/>
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">LibaryVI</span>
                        </a>

                        <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <a href="#" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Company</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Marketplace</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Features</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Team</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                                </li>
                            </ul>

                            <nav className="flex items-center justify-end gap-4 ml-5">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="inline-block dark:text-black rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A]  dark:hover:border-[#62605b]"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="inline-block dark:text-black rounded-sm border bg-white border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035]  dark:hover:border-[#3E3E3A]"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="inline-block dark:text-black rounded-sm border bg-white border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A]  dark:hover:border-[#62605b]"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </div>

                    </div>
                </nav>
            </header>

            <br></br>
            <br />

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
                                        className="ml-1 inline-flex items-center space-x-1 font-medium text-[#f53003] underline underline-offset-4 dark:text-[#FF4433]"
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
                                        className="ml-1 inline-flex items-center space-x-1 font-medium text-[#f53003] underline underline-offset-4 dark:text-[#FF4433]"
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
                                    target="_blank"
                                    className="inline-block rounded-sm border border-black bg-[#1b1b18] px-5 py-1.5 text-sm leading-normal text-white hover:border-black hover:bg-black dark:border-[#eeeeec] dark:bg-[#eeeeec] dark:text-[#1C1C1A] dark:hover:border-white dark:hover:bg-white"
                                >
                                    Getting Started
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1 flex items-center justify-center p-6 lg:p-20 bg-white shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] dark:bg-[#161615] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]">
                        <AppLogoIcon />
                    </div>
                </main>
            </div>

            <section className="bg- dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                    <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-primary rounded-full dark:bg-gray-800 dark:text-white hover:bg-black dark:hover:bg-gray-700" role="alert">
                        <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span className="text-sm font-medium text-white" >Flowbite is out! See what's new</span>
                        <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    </a>
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">“Jelajahi Dunia Melalui Buku”</h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Perpustakaan LibayVI menyediakan koleksi lengkap dan nyaman untuk menemani belajar dan hiburan Anda. Temukan pengetahuan dan inspirasi di setiap halaman!
                    </p>
                    <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <a href="#" className="inline-flex dark:text-black justify-center items-center py-3 px-5 text-base font-medium bg-primary text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            Learn more
                            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
            </section>

            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className="max-w-screen-md mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Dirancang untuk tim Peminjam seperti Anda</h2>
                        <p className="text-gray-500 sm:text-xl dark:text-gray-400">Di LibaryVI, kami berfokus pada Hiburan, Pengetahuan, dan Inspirasi dapat membuka nilai jangka panjang dan mendorong pertumbuhan untuk Berfikir.</p>
                    </div>
                    <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Perpustakaan</h3>
                            <p className="text-gray-500 dark:text-gray-400">Rencanakan, ciptakan, dan luncurkan program literasi dengan mudah.
                                Bekerja sama secara mulus dengan seluruh bagian organisasi untuk mencapai target literasi dan kunjungan perpustakaan setiap bulannya dengan perencanaan yang terstruktur.</p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Layanan Hukum dan Keamanan Informasi</h3>
                            <p className="text-gray-500 dark:text-gray-400">Lindungi koleksi dan data pengunjung dengan sistem yang aman dan sesuai regulasi.
                                Gunakan alur kerja terstruktur dan izin akses khusus untuk menjaga kepatuhan dan keamanan data dalam perpustakaan digital maupun fisik.

                            </p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Otomatisasi Layanan</h3>
                            <p className="text-gray-500 dark:text-gray-400">Otomatisasi peminjaman, pengembalian, notifikasi, dan lainnya.
                                Tingkatkan efisiensi dengan ratusan template alur kerja otomatis untuk mendukung operasional harian perpustakaan.</p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"></path></svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Manajemen Keuangan</h3>
                            <p className="text-gray-500 dark:text-gray-400">Sistem audit yang siap digunakan untuk pengelolaan anggaran perpustakaan.
                                Mendukung proses penting seperti laporan bulanan, anggaran kuartalan, dan pertanggungjawaban keuangan lainnya.

                            </p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Desain Layanan Pengguna</h3>
                            <p className="text-gray-500 dark:text-gray-400">Ciptakan pengalaman pengguna yang menarik dan menyenangkan.
                                Dukung kolaborasi antar divisi seperti edukasi, promosi, dan pengembangan layanan dalam merancang pengalaman pengunjung yang optimal.</p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Operasional Harian</h3>
                            <p className="text-gray-500 dark:text-gray-400">Jalankan kegiatan perpustakaan secara efisien dan fleksibel.
                                Gunakan alur kerja yang dapat disesuaikan untuk mendukung tim pustakawan, relawan, serta kebutuhan pengunjung.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="hidden h-14.5 lg:block"></div>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
                    <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">Di Sponsori Oleh</h2>
                    <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
                        <a
                            href="https://laravel.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-3 hover:text-red-600 dark:hover:text-red-500"
                        >
                            {/* Laravel */}
                            <svg className="w-8 h-8" viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M116.7 15.7c-5.1-2.9-11.4-3-16.5-.2L36.4 55.8c-5.2 2.9-8.4 8.4-8.4 14.3v112.3c0 6 3.3 11.5 8.5 14.4l121.5 67.8V464c0 5.7 3.1 10.9 8.1 13.7l97.6 54.5c5 2.8 11.1 2.8 16.1 0l97.6-54.5c5-2.8 8.1-8.1 8.1-13.7V264.6l60.2-33.6c5.2-2.9 8.5-8.4 8.5-14.4V104.1c0-5.9-3.2-11.3-8.4-14.3l-63.9-36.1c-5.1-2.9-11.4-2.8-16.5.2l-62.7 35.4-62.7-35.4L116.7 15.7zm5.3 41.2L192 94v73.2L89.3 115.3V80.1l32.7-18.3zM64 132.7l96 53.6v70.3l-96-53.6v-70.3zm256 334.6l-64 35.7-64-35.7V279l64 35.7 64-35.7v188.3zm0-234.3l-64 35.7-64-35.7V106.8l64 35.7 64-35.7v126.2zm32-92.6l32-18.1 32 18.1v35.2l-64 35.7v-70.9zm96 53.4l-64 35.7v70.3l64-35.7v-70.3z" />
                            </svg>

                            <span className="text-2xl font-semibold tracking-tight">Laravel</span>
                        </a>

                        <a
                            href="https://code.visualstudio.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-3 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                            {/* VS Code  */}
                            <svg className="w-8 h-8" viewBox="0 0 256 256" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M231.43 36.57 173.43 9.14a15.93 15.93 0 0 0-15.15.73l-80 56a16 16 0 0 0-1.8 24.94l37.64 31.63L76.48 153l-39.9-27.83a8 8 0 0 0-9.29 0l-16 11.08a8 8 0 0 0 0 13.32l56 38.78a16 16 0 0 0 18.34 0l33.56-23.26 38.16 32a15.94 15.94 0 0 0 10.33 3.84 16.1 16.1 0 0 0 4.82-.74 15.93 15.93 0 0 0 11.18-15.3V52.69a16 16 0 0 0-8.57-14.12ZM160 180.9l-46.41-38.92 46.41-39V180.9Z" />
                            </svg>

                            <span className="text-2xl font-semibold tracking-tight">VS Code</span>
                        </a>

                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-3 hover:text-gray-900 dark:hover:text-white"
                        >
                            {/* GitHub */}
                            <svg className="w-8 h-8" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                                <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 
                                    0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13
                                    -.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66
                                    .07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95
                                    0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12
                                    0 0 .67-.21 2.2.82a7.6 7.6 0 012-.27c.68 0 1.36.09 2 .27
                                    1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12
                                    .51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95
                                    .29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2
                                    0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/>
                            </svg>

                            <span className="text-2xl font-semibold tracking-tight">GitHub</span>
                        </a>


                        <a
                            href="https://www.apachefriends.org/index.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-3 hover:text-orange-600 dark:hover:text-orange-500"
                        >
                            {/* XAMPP */}
                            <svg
                                className="w-8 h-8"
                                viewBox="0 0 64 64"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    x="3"
                                    y="3"
                                    width="58"
                                    height="58"
                                    rx="10"
                                    ry="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    fill="none"
                                />
                                <path
                                    d="M20 20 L44 44 M44 20 L20 44"
                                    stroke="currentColor"
                                    strokeWidth="6"
                                    strokeLinecap="round"
                                />
                            </svg>

                            <span className="text-2xl font-semibold tracking-tight">XAMPP</span>
                        </a>



                        <a
                            href="https://react.dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-3 hover:text-cyan-600 dark:hover:text-cyan-400"
                        >
                            {/* React */}
                            <svg
                                className="w-8 h-8"
                                viewBox="0 0 64 64"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                role="img"
                            >
                                <ellipse cx="32" cy="32" rx="20" ry="8" />
                                <ellipse cx="32" cy="32" rx="20" ry="8" transform="rotate(60 32 32)" />
                                <ellipse cx="32" cy="32" rx="20" ry="8" transform="rotate(120 32 32)" />
                    
                                <circle cx="32" cy="32" r="6" fill="currentColor" />
                            </svg>

                            <span className="text-2xl font-semibold tracking-tight">
                                React
                            </span>
                        </a>

                        <a
                            href="https://spotify.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-3 hover:text-green-600 dark:hover:text-green-500"
                        >
                            {/* Spotify */}
                            <svg
                                className="w-8 h-8"
                                viewBox="0 0 496 512"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M248 8C111 8 0 119 0 256c0 137 111 248 248 248s248-111 248-248C496 119 385 8 248 8zm106.4 357.7c-4.9 0-7-2.3-10.8-5-29.4-18-66.5-22.1-109.8-12.3-6 1.4-11.6-3.1-11.6-9.3 0-1.7.7-3.3 1.9-4.4 24.7-22.4 60.6-28.1 99-16.4 4.9 1.2 7.9 5.3 7.9 10.1 0 3.3-2.3 7-7.2 9.6-5.6 3.1-11.4 6.5-17.3 9.8-1.3.6-2 2.2-2 3.7 0 1.9 1.5 3.4 3.4 3.4 7.6 0 14.8-2.3 21.7-6.4 2.7-1.6 4.8-1.7 6.9-.3 2.3 1.4 3.3 4 3.3 7.4 0 3.1-1.7 6.7-6 9.1-7.1 4-15 6-23.4 6zM368 278.8c-4.6 0-6.7-2.3-10.3-5-26.2-15.4-63.1-21-103.6-11.3-5.5 1.3-11.3-3-11.3-9 0-1.6.6-3.2 1.8-4.2 23.2-21 58.3-26.7 94.4-16.3 5 1.4 8.1 5.3 8.1 10 0 3.1-2.2 6.5-6.9 9-5.7 3.1-11.8 6.6-17.9 10-1.3.7-2 2.2-2 3.6 0 1.8 1.4 3.3 3.2 3.3 6.5 0 13.2-2 19.4-5.3 2.5-1.4 4.5-1.7 6.5-.4 2.1 1.3 3.2 3.9 3.2 7.2 0 3.1-1.7 6.7-5.9 9-6.7 4-14.2 6-22.2 6zM392 197.1c-3.9 0-6-2.3-9.3-4.9-23.4-17.6-60.8-23-98.5-13.2-6 1.4-11.7-3-11.7-9.2 0-1.6.7-3.3 1.9-4.3 21.8-19.7 56.5-25.3 92.5-15.4 5 1.3 7.7 5.2 7.7 9.8 0 3.1-2.2 6.7-7.1 9.2-5.3 3.2-11.3 6.5-17.3 9.8-1.3.6-2 2.1-2 3.6 0 1.9 1.5 3.4 3.4 3.4 7.3 0 14.7-2.3 21.3-6.3 2.8-1.6 4.8-1.7 6.7-.4 2.1 1.4 3.3 4 3.3 7.5 0 3.1-1.6 6.6-6 9z" />
                            </svg>
                            <span className="text-2xl font-semibold tracking-tight">Spotify</span>
                        </a>

                    </div>
                </div>
            </section>

        </>
    );
}
