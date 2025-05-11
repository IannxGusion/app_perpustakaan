import { ImgHTMLAttributes } from 'react';
import logo from '@/components/element/image/logo.png'; // pastikan path-nya sesuai

export default function AppLogoIcon(props: ImgHTMLAttributes<HTMLImageElement>) {
    return <img src={logo} alt="App Logo" {...props} />;
    {/*<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-terminal-icon lucide-terminal">
            <polyline points="4 17 10 11 4 5" />
            <line x1="12" x2="20" y1="19" y2="19" />
       </svg>
    */}
}
