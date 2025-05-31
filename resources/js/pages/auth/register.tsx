import { Head, useForm } from '@inertiajs/react';
import { CheckCircle2, LoaderCircle, Lock, Mail, User } from 'lucide-react';
import { FormEventHandler, useState } from 'react';

import AppLogoIcon from '@/components/app-logo-icon';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type RegisterForm = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm<Required<RegisterForm>>({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const [registerSuccess, setRegisterSuccess] = useState(false);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => {
                reset('password', 'password_confirmation');
                setRegisterSuccess(true);
            },
        });
    };

    return (
        <div className="relative min-h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/3.jpg')" }}>
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

            <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
                <div className="w-full max-w-md space-y-3 rounded-2xl bg-white/90 p-8 shadow-lg backdrop-blur-md">
                    <Head title="Daftar" />

                    {/* Logo */}
                    <div className="mb-2 flex justify-center">
                        <AppLogoIcon className="h-40 w-40 animate-pulse" />
                    </div>

                    <h1 className="text-center text-2xl font-bold text-gray-900">Buat akun baru</h1>
                    <p className="mb-5 text-center text-sm text-gray-600">Masukkan detail Anda untuk membuat akun baru</p>

                    <form className="flex flex-col gap-4" onSubmit={submit}>
                        {/* Name */}
                        <div>
                            <Label htmlFor="name" className="mb-1 block font-semibold text-gray-700">
                                Nama lengkap
                            </Label>
                            <div className="flex items-center rounded-lg border border-gray-300 bg-white shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
                                <div className="px-3 text-indigo-500">
                                    <User size={18} />
                                </div>
                                <Input
                                    id="name"
                                    type="text"
                                    required
                                    autoFocus
                                    tabIndex={1}
                                    autoComplete="name"
                                    placeholder="Nama lengkap"
                                    className="rounded-r-lg border-none focus:ring-0"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    disabled={processing}
                                />
                            </div>
                            <InputError message={errors.name} />
                        </div>

                        {/* Email */}
                        <div>
                            <Label htmlFor="email" className="mb-1 block font-semibold text-gray-700">
                                Email address
                            </Label>
                            <div className="flex items-center rounded-lg border border-gray-300 bg-white shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
                                <div className="px-3 text-indigo-500">
                                    <Mail size={18} />
                                </div>
                                <Input
                                    id="email"
                                    type="email"
                                    required
                                    tabIndex={2}
                                    autoComplete="email"
                                    placeholder="email@example.com"
                                    className="rounded-r-lg border-none focus:ring-0"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    disabled={processing}
                                />
                            </div>
                            <InputError message={errors.email} />
                        </div>

                        {/* Password */}
                        <div>
                            <Label htmlFor="password" className="mb-1 block font-semibold text-gray-700">
                                Password
                            </Label>
                            <div className="flex items-center rounded-lg border border-gray-300 bg-white shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
                                <div className="px-3 text-indigo-500">
                                    <Lock size={18} />
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    required
                                    tabIndex={3}
                                    autoComplete="new-password"
                                    placeholder="Password"
                                    className="rounded-r-lg border-none focus:ring-0"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    disabled={processing}
                                />
                            </div>
                            <InputError message={errors.password} />
                        </div>

                        {/* Password confirmation */}
                        <div>
                            <Label htmlFor="password_confirmation" className="mb-1 block font-semibold text-gray-700">
                                Konfirmasi password
                            </Label>
                            <div className="flex items-center rounded-lg border border-gray-300 bg-white shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
                                <div className="px-3 text-indigo-500">
                                    <Lock size={18} />
                                </div>
                                <Input
                                    id="password_confirmation"
                                    type="password"
                                    required
                                    tabIndex={4}
                                    autoComplete="new-password"
                                    placeholder="Konfirmasi password"
                                    className="rounded-r-lg border-none focus:ring-0"
                                    value={data.password_confirmation}
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                    disabled={processing}
                                />
                            </div>
                            <InputError message={errors.password_confirmation} />
                        </div>

                        {/* Submit */}
                        <Button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 active:bg-indigo-800"
                            tabIndex={5}
                            disabled={processing}
                        >
                            {processing && <LoaderCircle className="mr-2 inline-block h-5 w-5 animate-spin" />}
                            Buat akun
                        </Button>
                    </form>

                    <div className="mt-4 text-center text-xs text-gray-600">
                        Sudah punya akun?{' '}
                        <TextLink href={route('login')} tabIndex={6}>
                            Log in
                        </TextLink>
                    </div>

                    {/* Success popup */}
                    {registerSuccess && (
                        <Dialog open={registerSuccess} onOpenChange={setRegisterSuccess}>
                            <DialogContent className="animate-fadeIn rounded-2xl border-2 border-green-500 bg-green-50 text-center shadow-lg sm:max-w-sm">
                                <DialogHeader>
                                    <DialogTitle className="flex items-center justify-center gap-2 text-2xl font-bold text-green-700">
                                        <CheckCircle2 size={28} className="animate-bounce" /> Pendaftaran Berhasil!
                                    </DialogTitle>
                                </DialogHeader>
                                <p className="mt-2 text-base text-green-800">Akun Anda berhasil dibuat. Silakan login untuk melanjutkan.</p>
                                <Button
                                    className="mt-6 bg-green-600 hover:bg-green-700 focus:ring-green-500 active:bg-green-800"
                                    onClick={() => setRegisterSuccess(false)}
                                >
                                    Lanjutkan
                                </Button>
                            </DialogContent>
                        </Dialog>
                    )}
                </div>
            </div>
        </div>
    );
}
