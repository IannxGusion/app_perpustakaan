import logo from '@/components/element/image/sadako 2019.jpg'; // pastikan path-nya sesuai
import { ImgHTMLAttributes } from 'react';

export default function Sadako(props: ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <div className="flex items-center justify-center">
            <img src={logo} alt="Sadako" className="align-self-center max-w70" {...props} />
        </div>
    );
}
