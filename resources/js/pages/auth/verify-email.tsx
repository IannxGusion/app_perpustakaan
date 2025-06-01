// Components
import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import AppLogoIcon from '@/components/app-logo-icon';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';

export default function VerifyEmail({ status }: { status?: string }) {
    const { post, processing } = useForm({});

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return (
        <div
            className="relative min-h-screen w-full bg-cover bg-center py-32"
            style={{
                backgroundColor: '#ffffff',
                backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='105' viewBox='0 0 80 105'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='death-star' fill='%23004380' fill-opacity='0.51'%3E%3Cpath d='M20 10a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V10zm15 35a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zM20 75a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V75zm30-65a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V10zm0 65a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V75zM35 10a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10zM5 45a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zm0-35a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10zm60 35a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zm0-35a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
        >
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
            <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
                <div className="w-full max-w-md space-y-3 rounded-2xl bg-white/90 p-8 shadow-lg backdrop-blur-md">
                    <Head title="Email verification" />
                    <div className="mb-2 flex justify-center">
                        <AppLogoIcon className="h-40 w-40 animate-pulse" />
                    </div>
                    <h1 className="text-center text-2xl font-bold text-gray-900">Verifikasi email</h1>
                    <p className="mb-5 text-center text-sm text-gray-600">
                        Silakan verifikasi alamat email Anda dengan mengklik link yang baru saja kami kirimkan ke email Anda.
                    </p>
                    {status === 'verification-link-sent' && (
                        <div className="mb-4 text-center text-sm font-medium text-green-600">
                            Link verifikasi baru telah dikirim ke alamat email yang Anda berikan saat pendaftaran.
                        </div>
                    )}
                    <form onSubmit={submit} className="space-y-6 text-center">
                        <Button
                            disabled={processing}
                            variant="secondary"
                            className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 active:bg-primary-800 w-full"
                        >
                            {processing && <LoaderCircle className="mr-2 inline-block h-5 w-5 animate-spin" />}
                            Kirim ulang email verifikasi
                        </Button>
                        <TextLink href={route('logout')} method="post" className="mx-auto block text-sm">
                            Log out
                        </TextLink>
                    </form>
                </div>
            </div>
        </div>
    );
}
