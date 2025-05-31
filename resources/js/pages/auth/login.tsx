import { Head, useForm } from '@inertiajs/react';
import { CheckCircle2, Eye, EyeOff, Info, LoaderCircle, Lock, Mail } from 'lucide-react';
import { FormEventHandler, useState } from 'react';

import AppLogoIcon from '@/components/app-logo-icon';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type LoginForm = {
    email: string;
    password: string;
    remember: boolean;
};

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
    const { data, setData, post, processing, errors, reset } = useForm<Required<LoginForm>>({
        email: '',
        password: '',
        remember: false,
    });

    const [showPassword, setShowPassword] = useState(false);
    const [loginSuccess, setLoginSuccess] = useState(false);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => {
                reset('password');
                setLoginSuccess(true);
            },
        });
    };

    return (
        <div className="relative min-h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/3.jpg')" }}>
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

            <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
                <div className="w-full max-w-md space-y-3 rounded-2xl bg-white/90 p-8 shadow-lg backdrop-blur-md">
                    <Head title="Login" />

                    {/* Logo */}
                    <div className="mb-2 flex justify-center">
                        <AppLogoIcon className="h-40 w-40 animate-pulse" />
                    </div>

                    <h1 className="text-center text-2xl font-bold text-gray-900">Log in ke akun Anda</h1>
                    <p className="mb-5 text-center text-sm text-gray-600">Masukkan email dan password Anda untuk log in</p>

                    <form className="flex flex-col gap-4" onSubmit={submit}>
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
                                    autoFocus
                                    tabIndex={1}
                                    autoComplete="email"
                                    placeholder="email@example.com"
                                    className="rounded-r-lg border-none focus:ring-0"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                />
                            </div>
                            <InputError message={errors.email} />
                        </div>

                        {/* Password */}
                        <div>
                            <div className="mb-1 flex items-center justify-between">
                                <Label htmlFor="password" className="font-semibold text-gray-700">
                                    Password
                                </Label>
                                {canResetPassword && (
                                    <TextLink href={route('password.request')} className="text-xs text-indigo-600 hover:underline" tabIndex={5}>
                                        Lupa password?
                                    </TextLink>
                                )}
                            </div>
                            <div className="relative flex items-center rounded-lg border border-gray-300 bg-white shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
                                <div className="px-3 text-indigo-500">
                                    <Lock size={18} />
                                </div>
                                <Input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    required
                                    tabIndex={2}
                                    autoComplete="current-password"
                                    placeholder="Password"
                                    className="rounded-r-lg border-none pr-10 focus:ring-0"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute top-1/2 right-3 -translate-y-1/2 text-indigo-600 transition-colors hover:text-indigo-800"
                                    aria-label={showPassword ? 'Sembunyikan password' : 'Tampilkan password'}
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                            <InputError message={errors.password} />
                        </div>

                        {/* Remember me */}
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="remember"
                                name="remember"
                                checked={data.remember}
                                onClick={() => setData('remember', !data.remember)}
                                tabIndex={3}
                            />
                            <Label htmlFor="remember" className="text-gray-700 select-none">
                                Remember me
                            </Label>
                        </div>

                        {/* Submit */}
                        <Button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 active:bg-indigo-800"
                            tabIndex={4}
                            disabled={processing}
                        >
                            {processing && <LoaderCircle className="mr-2 inline-block h-5 w-5 animate-spin" />}
                            Log in
                        </Button>
                    </form>

                    <div className="mt-4 text-center text-xs text-gray-600">
                        Belum punya akun?{' '}
                        <TextLink href={route('register')} tabIndex={5}>
                            Daftar
                        </TextLink>
                    </div>

                    {/* Tips login popup */}
                    <div className="mt-4 text-center">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="mx-auto flex items-center gap-1 text-xs text-indigo-600 hover:text-indigo-800"
                                >
                                    <Info size={14} />
                                    Tips login aman
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-md">
                                <DialogHeader>
                                    <DialogTitle className="font-semibold text-indigo-600">Tips Login Aman 🔒</DialogTitle>
                                </DialogHeader>
                                <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                                    <li>Gunakan kombinasi huruf dan simbol.</li>
                                    <li>Jangan bagikan informasi login.</li>
                                    <li>Logout dari perangkat publik.</li>
                                </ul>
                            </DialogContent>
                        </Dialog>
                    </div>

                    {/* Success popup */}
                    {loginSuccess && (
                        <Dialog open={loginSuccess} onOpenChange={setLoginSuccess}>
                            <DialogContent className="animate-fadeIn rounded-2xl border-2 border-green-500 bg-green-50 text-center shadow-lg sm:max-w-sm">
                                <DialogHeader>
                                    <DialogTitle className="flex items-center justify-center gap-2 text-2xl font-bold text-green-700">
                                        <CheckCircle2 size={28} className="animate-bounce" /> Login Berhasil!
                                    </DialogTitle>
                                </DialogHeader>
                                <p className="mt-2 text-base text-green-800">Selamat datang kembali. Anda berhasil masuk.</p>
                                <Button
                                    className="mt-6 bg-green-600 hover:bg-green-700 focus:ring-green-500 active:bg-green-800"
                                    onClick={() => setLoginSuccess(false)}
                                >
                                    Lanjutkan
                                </Button>
                            </DialogContent>
                        </Dialog>
                    )}

                    {status && <div className="mt-3 text-center text-sm font-medium text-green-600">{status}</div>}
                </div>
            </div>
        </div>
    );
}
