import { Head, useForm } from '@inertiajs/react';
import { Eye, EyeOff, Info, LoaderCircle, Lock, Mail } from 'lucide-react';
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

export default function Login({ canResetPassword }: LoginProps) {
    const { data, setData, post, processing, errors, reset } = useForm<Required<LoginForm>>({
        email: '',
        password: '',
        remember: false,
    });

    const [showPassword, setShowPassword] = useState(false);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => {
                reset('password');
            },
        });
    };

    return (
        <div
            className="relative min-h-screen w-full bg-cover bg-center py-32"
            style={{
                backgroundColor: '#ffffff',
                backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23004380' fill-opacity='0.51'%3E%3Cpath fill-rule='evenodd' d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z'/%3E%3C/g%3E%3C/svg%3E\")",
            }}
        >
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
                            <div className="focus-within:border-primary-500 focus-within:ring-primary-500 flex items-center rounded-lg border border-gray-300 bg-white shadow-sm focus-within:ring-1">
                                <div className="text-primary-500 px-3">
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
                                    <TextLink href={route('password.request')} className="text-primary-600 text-xs hover:underline" tabIndex={5}>
                                        Lupa password?
                                    </TextLink>
                                )}
                            </div>
                            <div className="focus-within:border-primary-500 focus-within:ring-primary-500 relative flex items-center rounded-lg border border-gray-300 bg-white shadow-sm focus-within:ring-1">
                                <div className="text-primary-500 px-3">
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
                                    className="text-primary-600 hover:text-primary-800 absolute top-1/2 right-3 -translate-y-1/2 transition-colors"
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
                            className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 active:bg-primary-800 w-full"
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
                                    className="text-primary-600 hover:text-primary-800 mx-auto flex items-center gap-1 text-xs"
                                >
                                    <Info size={14} />
                                    Tips login aman
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-md">
                                <DialogHeader>
                                    <DialogTitle className="text-primary-600 font-semibold">Tips Login Aman 🔒</DialogTitle>
                                </DialogHeader>
                                <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                                    <li>Gunakan kombinasi huruf dan simbol.</li>
                                    <li>Jangan bagikan informasi login.</li>
                                    <li>Logout dari perangkat publik.</li>
                                </ul>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </div>
        </div>
    );
}
