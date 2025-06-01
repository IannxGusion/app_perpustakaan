// Components
import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import AppLogoIcon from '@/components/app-logo-icon';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ForgotPassword({ status }: { status?: string }) {
    const { data, setData, post, processing, errors } = useForm<Required<{ email: string }>>({
        email: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.email'));
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
                    <Head title="Lupa password" />
                    <div className="mb-2 flex justify-center">
                        <AppLogoIcon className="h-40 w-40 animate-pulse" />
                    </div>
                    <h1 className="text-center text-2xl font-bold text-gray-900">Lupa password</h1>
                    <p className="mb-5 text-center text-sm text-gray-600">Masukkan email Anda untuk menerima link untuk reset password</p>
                    {status && <div className="mb-4 text-center text-sm font-medium text-green-600">{status}</div>}
                    <form onSubmit={submit} className="flex flex-col gap-4">
                        <div>
                            <Label htmlFor="email" className="mb-1 block font-semibold text-gray-700">
                                Email address
                            </Label>
                            <div className="focus-within:border-primary-500 focus-within:ring-primary-500 flex items-center rounded-lg border border-gray-300 bg-white shadow-sm focus-within:ring-1">
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    autoComplete="off"
                                    value={data.email}
                                    autoFocus
                                    onChange={(e) => setData('email', e.target.value)}
                                    placeholder="email@example.com"
                                    className="rounded-r-lg border-none focus:ring-0"
                                />
                            </div>
                            <InputError message={errors.email} />
                        </div>
                        <Button
                            className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 active:bg-primary-800 w-full"
                            disabled={processing}
                        >
                            {processing && <LoaderCircle className="mr-2 inline-block h-5 w-5 animate-spin" />}
                            Email password reset link
                        </Button>
                    </form>
                    <div className="text-muted-foreground mt-4 space-x-1 text-center text-sm">
                        <span>Atau, kembali ke</span>
                        <TextLink href={route('login')}>log in</TextLink>
                    </div>
                </div>
            </div>
        </div>
    );
}
