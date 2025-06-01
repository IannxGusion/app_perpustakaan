import { Link } from '@inertiajs/react';

const NavLink = ({ href, label, active = false }) => (
    <a
        href={href}
        className={`text-sm font-medium transition-colors ${
            active ? 'text-primary-600 dark:text-primary-400' : 'hover:text-primary-600 text-gray-600 dark:text-gray-300 dark:hover:text-white'
        }`}
    >
        {label}
    </a>
);

const MobileMenuToggle = ({ onClick, isOpen }) => (
    <button
        type="button"
        className="text-gray-500 hover:text-gray-700 focus:outline-none dark:text-gray-300 dark:hover:text-white"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        onClick={onClick}
    >
        {isOpen ? (
            // Close icon
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        ) : (
            // Hamburger icon
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        )}
    </button>
);

const MobileNav = ({ isAuthenticated, isOpen, onClose }) => (
    <div
        className={`bg-opacity-40 fixed inset-0 z-40 bg-black transition-opacity duration-200 ${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        aria-hidden={!isOpen}
        onClick={onClose}
    >
        <nav
            className={`absolute top-0 right-0 h-full w-64 transform bg-white shadow-lg transition-transform duration-200 dark:bg-gray-900 ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            onClick={(e) => e.stopPropagation()}
        >
            <div className="space-y-2 p-4">
                {['Home', 'Company', 'Marketplace', 'Features', 'Team', 'Contact'].map((label, index) => (
                    <a
                        key={index}
                        href="#"
                        className="block rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                    >
                        {label}
                    </a>
                ))}

                <div className="border-t border-gray-200 pt-2 dark:border-gray-700">
                    {isAuthenticated ? (
                        <Link
                            href={route('dashboard')}
                            className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
                            >
                                Log in
                            </Link>
                            <Link
                                href={route('register')}
                                className="bg-primary-600 hover:bg-primary-700 block rounded-md px-4 py-2 text-center text-sm text-white"
                            >
                                Daftar
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    </div>
);

export { MobileMenuToggle, MobileNav, NavLink };
