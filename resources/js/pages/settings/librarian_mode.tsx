import { Head, Link, useForm, usePage } from '@inertiajs/react';

import HeadingSmall from '@/components/heading-small';
import { SharedData, type BreadcrumbItem } from '@/types';

import SettingsLayout from '@/layouts/settings/layout';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

import UserLayout from '@/layouts/user-layout';
import AdminLayout from '@/pages/admin/layer/app-layout';
import PustakawanLayout from '@/pages/librarian/layer/user-layout';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Librarian Mode',
        href: '/settings/librarian_mode',
    },
];

export default function Librarian() {
    const { auth } = usePage<SharedData>().props;
    const Layout =
        auth.user.role === 'ADMIN'
            ? AdminLayout
            : auth.user.role === 'PUSTAKAWAN'
                ? PustakawanLayout
                : UserLayout;

    const { reset } = useForm();

    const closeModal = () => {
        reset();
    };

    return (
        <Layout breadcrumbs={breadcrumbs}>
            <Head title="Librarian Mode" />

            <SettingsLayout>
                <div className="space-y-6">
                    <HeadingSmall title="Librarian Mode" description="Update your account's Role" />

                    {auth.user.role === 'PUSTAKAWAN' && (
                        <div className="space-y-6">
                            {/* Admin Mode section */}
                            <HeadingSmall title="Change Mode" />
                            <div className="space-y-4 rounded-lg border border-black bg-blue-50 p-4 dark:border-red-200/10 dark:bg-red-700/10">
                                <div className="relative space-y-0.5 text-blue-600 dark:text-red-100">
                                    <p className="font-medium">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, asperiores.</p>
                                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, error harum. Ratione eos temporibus ipsa corporis. Quis nulla, eaque dicta quibusdam reiciendis fuga illum cumque beatae porro similique autem ratione est possimus harum culpa vero deleniti saepe, ad natus molestias labore nemo repudiandae nobis. Hic porro ducimus eos. Similique magnam ea ducimus, blanditiis natus pariatur, nemo deleniti dolor sunt libero nesciunt voluptas ab perspiciatis officiis sed velit mollitia harum nihil fugiat repellat in non excepturi aliquid. Accusamus optio dignissimos sed in quas eius est. Inventore nisi mollitia ipsam saepe! Nihil eaque ad dolorem odio. Autem veniam animi quasi quibusdam maxime.</p>
                                </div>

                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button className='bg-black dark:bg-slate-50'>Change</Button>
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
                                                <Link href={route('work')}>Confirm</Link>
                                            </Button>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </div>
                    )}
                </div>
            </SettingsLayout>
        </Layout>
    );
}
