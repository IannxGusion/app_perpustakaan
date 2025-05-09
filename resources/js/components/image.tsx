import { ImgHTMLAttributes } from 'react';
import logo from '@/components/element/Dilan.jpg'; // pastikan path-nya sesuai

export default function Image(props: ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <div className='flex items-center justify-center'>
            <img src={logo} alt="Dilan" className="align-self-center max-w70" {...props} />
        </div>
    );
}
