import { type BreadcrumbItem, type SharedData } from '@/types';
import { Transition } from '@headlessui/react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler } from 'react';

import DeleteUser from '@/components/delete-user';
import HeadingSmall from '@/components/heading-small';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import AdminLayout from '@/layouts/app-layout';
import UserLayout from '@/layouts/user-layout';

import SettingsLayout from '@/layouts/settings/layout';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Profile settings',
        href: '/settings/profile',
    },
];

type ProfileForm = {
    name: string;
    email: string;
}

export default function Profile({ mustVerifyEmail, status }: { mustVerifyEmail: boolean; status?: string }) {
    const { auth } = usePage<SharedData>().props;
    const Layout = auth.user.role === 'ADMIN' ? AdminLayout : UserLayout;

    const { data, setData, patch, errors, processing, reset, recentlySuccessful } = useForm<Required<ProfileForm>>({
        name: auth.user.name,
        email: auth.user.email,
    });



    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route('profile.update'), {
            preserveScroll: true,
        });
    };

    const closeModal = () => {
        reset();
    };

    return (
        <Layout breadcrumbs={breadcrumbs}>
            <Head title="Profile settings" />

            <SettingsLayout>
                <div className="space-y-6">
                    <HeadingSmall title="Profile information" description="Update your name and email address" />

                    <form onSubmit={submit} className="space-y-6">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>

                            <Input
                                id="name"
                                className="mt-1 block w-full"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                required
                                autoComplete="name"
                                placeholder="Full name"
                            />

                            <InputError className="mt-2" message={errors.name} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="email">Email address</Label>

                            <Input
                                id="email"
                                type="email"
                                className="mt-1 block w-full"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                required
                                autoComplete="username"
                                placeholder="Email address"
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
                            <Button disabled={processing}>Save</Button>

                            <Transition
                                show={recentlySuccessful}
                                enter="transition ease-in-out"
                                enterFrom="opacity-0"
                                leave="transition ease-in-out"
                                leaveTo="opacity-0"
                            >
                                <p className="text-sm text-neutral-600">Saved</p>
                            </Transition>
                        </div>
                    </form>
                </div>

                <DeleteUser />

                {auth.user.role === 'ADMIN' && (
                    <div className="space-y-6">
                        {/* Admin Mode section */}
                        <HeadingSmall title="Admin Mode" />
                        <div className="space-y-4 rounded-lg border border-black bg-blue-50 p-4 dark:border-red-200/10 dark:bg-red-700/10">
                            <div className="relative space-y-0.5 text-blue-600 dark:text-red-100">
                                <p className="font-medium">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, asperiores.</p>
                                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, error harum. Ratione eos temporibus ipsa corporis. Quis nulla, eaque dicta quibusdam reiciendis fuga illum cumque beatae porro similique autem ratione est possimus harum culpa vero deleniti saepe, ad natus molestias labore nemo repudiandae nobis. Hic porro ducimus eos. Similique magnam ea ducimus, blanditiis natus pariatur, nemo deleniti dolor sunt libero nesciunt voluptas ab perspiciatis officiis sed velit mollitia harum nihil fugiat repellat in non excepturi aliquid. Accusamus optio dignissimos sed in quas eius est. Inventore nisi mollitia ipsam saepe! Nihil eaque ad dolorem odio. Autem veniam animi quasi quibusdam maxime.</p>
                            </div>

                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button className='bg-black dark:bg-slate-50'>Switch to Admin</Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogTitle>Are you sure you want to switch your account?</DialogTitle>
                                    <DialogDescription>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam amet repellat consectetur, quam veritatis velit itaque in cumque veniam iure!
                                    </DialogDescription>
                                    <DialogFooter className="gap-2">
                                        <DialogClose asChild>
                                            <Button variant="secondary" onClick={closeModal}>
                                                Cancel
                                            </Button>
                                        </DialogClose>

                                        <Button asChild>
                                            <Link href={route('main')}>Confirm</Link>
                                        </Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                )}

            </SettingsLayout>
        </Layout>
    );
}
