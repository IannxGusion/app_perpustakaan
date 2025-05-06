import { ImgHTMLAttributes } from 'react';
import logo from '@/components/element/logo.png'; // pastikan path-nya sesuai

export default function AppLogoIcon(props: ImgHTMLAttributes<HTMLImageElement>) {
    return <img src={logo} alt="App Logo" {...props} />;
}
