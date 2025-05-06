import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaGithub,
} from 'react-icons/fa';
import AppLogoIcon from '@/components/app-logo-icon';

export function Footer() {
    return (
        <footer className="bg-gray-100 border-t border-gray-300 mt-10">
            <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-700">

                {/* Logo dan Sosial Media */}
                <div className="flex flex-col items-center md:items-start">
                    <div className='h-30 w-30'>
                        <AppLogoIcon />
                    </div>
                    <div className="flex space-x-4">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaGithub /></a>
                    </div>
                </div>

                {/* Navigasi */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
                    <div>
                        <h4 className="font-semibold mb-2">Use cases</h4>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:underline">UI design</a></li>
                            <li><a href="#" className="hover:underline">UX design</a></li>
                            <li><a href="#" className="hover:underline">Design systems</a></li>
                            <li><a href="#" className="hover:underline">Wireframing</a></li>
                            <li><a href="#" className="hover:underline">Brainstorming</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Explore</h4>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:underline">Prototyping</a></li>
                            <li><a href="#" className="hover:underline">Templates</a></li>
                            <li><a href="#" className="hover:underline">Plugins</a></li>
                            <li><a href="#" className="hover:underline">Design critiques</a></li>
                            <li><a href="#" className="hover:underline">FigJam</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Resources</h4>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:underline">Best practices</a></li>
                            <li><a href="#" className="hover:underline">Support</a></li>
                            <li><a href="#" className="hover:underline">Blog</a></li>
                            <li><a href="#" className="hover:underline">Community</a></li>
                            <li><a href="#" className="hover:underline">Resource library</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}