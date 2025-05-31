import logo from '@/components/element/image/Bleach.jpg'; // pastikan path-nya sesuai
import { ImgHTMLAttributes } from 'react';

export default function Bleach(props: ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <div className="flex items-center justify-center">
            <img src={logo} alt="Bleach" className="align-self-center max-w70" {...props} />
        </div>
    );
}
