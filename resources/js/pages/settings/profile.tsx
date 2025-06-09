import { type BreadcrumbItem, type SharedData } from '@/types';
import { Transition } from '@headlessui/react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { useInitials } from '@/hooks/use-initials';

import DeleteUser from '@/components/delete-user';
import HeadingSmall from '@/components/heading-small';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
} from "@/components/ui/context-menu"

import UserLayout from '@/layouts/user-layout';
import AdminLayout from '@/pages/admin/layer/app-layout';
import PustakawanLayout from '@/pages/librarian/layer/user-layout';

import SettingsLayout from '@/layouts/settings/layout';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import CSRF from '@/components/element/csrf';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Profile settings',
        href: '/settings/profile',
    },
];

type ProfileForm = {
    name: string;
    email: string;
};

export default function Profile({ mustVerifyEmail, status }: { mustVerifyEmail: boolean; status?: string }) {
    const { auth } = usePage<SharedData>().props;
    const Layout = auth.user.role === 'ADMIN' ? AdminLayout : auth.user.role === 'PUSTAKAWAN' ? PustakawanLayout : UserLayout;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm<Required<ProfileForm>>({
        name: auth.user.name,
        email: auth.user.email,
    });

    const getInitials = useInitials();

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route('profile.update'), {
            preserveScroll: true,
        });
    };

    return (
        <Layout breadcrumbs={breadcrumbs}>
            <Head title="Profile settings" />

            <SettingsLayout>
                <div className="space-y-6">
                    <HeadingSmall title="Informasi profil" description="Update identitas Anda" />

                    <div className="grid gap-2">
                        <Label htmlFor="name">
                            <h3>Avatar</h3>
                            <p className='text-xs font-medium italic'>klik kanan untuk info lebih lanjut</p>
                        </Label>
                        <Dialog>
                            <ContextMenu>
                                <ContextMenuTrigger>
                                    <Avatar className='size-24'>
                                        <AvatarImage
                                            src={`/storage/${auth.user.avatar}`} />
                                        <AvatarFallback>
                                            {getInitials(auth.user.name)}
                                        </AvatarFallback>
                                    </Avatar>
                                </ContextMenuTrigger>
                                <ContextMenuContent className='space-y-2'>
                                    <ContextMenuItem>
                                        <DialogTrigger className='w-full text-start'>
                                            Edit
                                        </DialogTrigger>
                                    </ContextMenuItem>
                                    <ContextMenuItem className='text-white bg-destructive hover:bg-destructive'>
                                        Hapus
                                    </ContextMenuItem>
                                </ContextMenuContent>
                            </ContextMenu>

                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Ubah Avatar</DialogTitle>
                                    <DialogDescription>
                                        <form className='flex lg:flex-row md:flex-col sm:flex-col xs:flex-col space-x-3'
                                            action={route('avatar.update')}
                                            method="POST" encType="multipart/form-data">
                                            <CSRF />
                                            <input type="hidden" name="_method" value="PUT" />

                                            <Input
                                                type='file'
                                                name='avatar'
                                                id="avatar"
                                                className="basis-2/2"
                                            />
                                            <Button
                                                className='basis-1/3'
                                                type="submit">
                                                Simpan
                                            </Button>
                                        </form>
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    </div>

                    <form onSubmit={submit} className="space-y-6">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Nama</Label>

                            <Input
                                id="name"
                                className="mt-1 block w-full"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                required
                                autoComplete="name"
                                placeholder="Nama lengkap"
                            />

                            <InputError className="mt-2" message={errors.name} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="email">Alamat email</Label>

                            <Input
                                id="email"
                                type="email"
                                className="mt-1 block w-full"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                required
                                autoComplete="username"
                                placeholder="Alamat email"
                            />

                            <InputError className="mt-2" message={errors.email} />
                        </div>

                        {mustVerifyEmail && auth.user.email_verified_at === null && (
                            <div>
                                <p className="text-muted-foreground -mt-4 text-sm">
                                    Your email address is unverified.{' '}
                                    <Link
                                        href={route('verification.send')}
                                        method="post"
                                        as="button"
                                        className="text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500"
                                    >
                                        Click here to resend the verification email.
                                    </Link>
                                </p>

                                {status === 'verification-link-sent' && (
                                    <div className="mt-2 text-sm font-medium text-green-600">
                                        A new verification link has been sent to your email address.
                                    </div>
                                )}
                            </div>
                        )}

                        <div className="flex items-center gap-4">
                            <Button disabled={processing}>Simpan</Button>

                            <Transition
                                show={recentlySuccessful}
                                enter="transition ease-in-out"
                                enterFrom="opacity-0"
                                leave="transition ease-in-out"
                                leaveTo="opacity-0"
                            >
                                <p className="text-sm text-neutral-600">Disimpan</p>
                            </Transition>
                        </div>
                    </form>
                </div>

                <DeleteUser />
            </SettingsLayout>
        </Layout >
    );
}
