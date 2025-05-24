import { Head, useForm } from '@inertiajs/react';
import { useState, FormEventHandler } from 'react';
import { LoaderCircle, User, Mail, Lock, CheckCircle2 } from 'lucide-react';

import AppLogoIcon from '@/components/app-logo-icon';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

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
    <div
      className="relative min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/images/daun.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 z-0" />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-8 space-y-3">
          <Head title="Daftar" />

          {/* Logo */}
          <div className="flex justify-center mb-2">
            <AppLogoIcon className="h-40 w-40 animate-pulse" />
          </div>

          <h1 className="text-2xl font-bold text-center text-gray-900">Buat akun baru</h1>
          <p className="text-sm text-center text-gray-600 mb-5">
            Masukkan detail Anda untuk membuat akun baru
          </p>

          <form className="flex flex-col gap-4" onSubmit={submit}>
            {/* Name */}
            <div>
              <Label htmlFor="name" className="font-semibold text-gray-700 mb-1 block">
                Nama lengkap
              </Label>
              <div className="flex items-center border border-gray-300 rounded-lg bg-white shadow-sm focus-within:ring-1 focus-within:ring-indigo-500 focus-within:border-indigo-500">
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
                  className="border-none rounded-r-lg focus:ring-0"
                  value={data.name}
                  onChange={(e) => setData('name', e.target.value)}
                  disabled={processing}
                />
              </div>
              <InputError message={errors.name} />
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email" className="font-semibold text-gray-700 mb-1 block">
                Email address
              </Label>
              <div className="flex items-center border border-gray-300 rounded-lg bg-white shadow-sm focus-within:ring-1 focus-within:ring-indigo-500 focus-within:border-indigo-500">
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
                  className="border-none rounded-r-lg focus:ring-0"
                  value={data.email}
                  onChange={(e) => setData('email', e.target.value)}
                  disabled={processing}
                />
              </div>
              <InputError message={errors.email} />
            </div>

            {/* Password */}
            <div>
              <Label htmlFor="password" className="font-semibold text-gray-700 mb-1 block">
                Password
              </Label>
              <div className="flex items-center border border-gray-300 rounded-lg bg-white shadow-sm focus-within:ring-1 focus-within:ring-indigo-500 focus-within:border-indigo-500">
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
                  className="border-none rounded-r-lg focus:ring-0"
                  value={data.password}
                  onChange={(e) => setData('password', e.target.value)}
                  disabled={processing}
                />
              </div>
              <InputError message={errors.password} />
            </div>

            {/* Password confirmation */}
            <div>
              <Label htmlFor="password_confirmation" className="font-semibold text-gray-700 mb-1 block">
                Konfirmasi password
              </Label>
              <div className="flex items-center border border-gray-300 rounded-lg bg-white shadow-sm focus-within:ring-1 focus-within:ring-indigo-500 focus-within:border-indigo-500">
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
                  className="border-none rounded-r-lg focus:ring-0"
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
              className="w-full bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 focus:ring-indigo-500"
              tabIndex={5}
              disabled={processing}
            >
              {processing && <LoaderCircle className="h-5 w-5 animate-spin mr-2 inline-block" />}
              Buat akun
            </Button>
          </form>

          <div className="text-center text-xs text-gray-600 mt-4">
            Sudah punya akun?{' '}
            <TextLink href={route('login')} tabIndex={6}>
              Log in
            </TextLink>
          </div>

          {/* Success popup */}
          {registerSuccess && (
            <Dialog open={registerSuccess} onOpenChange={setRegisterSuccess}>
              <DialogContent
                className="sm:max-w-sm text-center rounded-2xl border-2 border-green-500 bg-green-50 shadow-lg animate-fadeIn"
              >
                <DialogHeader>
                  <DialogTitle className="text-green-700 flex justify-center items-center gap-2 text-2xl font-bold">
                    <CheckCircle2 size={28} className="animate-bounce" /> Pendaftaran Berhasil!
                  </DialogTitle>
                </DialogHeader>
                <p className="text-green-800 text-base mt-2">
                  Akun Anda berhasil dibuat. Silakan login untuk melanjutkan.
                </p>
                <Button
                  className="mt-6 bg-green-600 hover:bg-green-700 active:bg-green-800 focus:ring-green-500"
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
