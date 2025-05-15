import { Head } from '@inertiajs/react';
import AppLayout from '@/pages/librarian/layer/user-layout';
import { Footer } from '@/components/element/footer';
import { type BreadcrumbItem } from '@/types';
import { Book, BookA, Calendar } from 'lucide-react';
import React from 'react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
];

export default function Pendataan() {
    const [form, setForm] = React.useState({
        author: '',
        title: '',
        publisher: '',
        genre: '',
        releaseDate: '',
        description: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
       
        localStorage.setItem('alertMessage', JSON.stringify({
            message: 'input barang berhasil!',
            timestamp: new Date().toISOString()
        }));
        
        const toast = document.createElement('div');
        toast.textContent = 'Anda telah berhasil menginput barang!!';
        toast.style.position = 'fixed';
        toast.style.bottom = '20px';
        toast.style.right = '20px';
        toast.style.backgroundColor = '#004380';
        toast.style.color = 'white';
        toast.style.padding = '10px 20px';
        toast.style.borderRadius = '5px';
        toast.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
        document.body.appendChild(toast);
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 3000);
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-sm bg-white">
            <h1 className="text-3xl font-bold text-center mb-8">Pendataan Buku</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-medium mb-1">Penulis</label>
                    <input
                        name="author"
                        value={form.author}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        placeholder="Value"
                        required
                    />
                </div>
                <div>
                    <label className="block font-medium mb-1">Judul Buku</label>
                    <input
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        placeholder="Value"
                        required
                    />
                </div>
                <div>
                    <label className="block font-medium mb-1">Penerbit</label>
                    <input
                        name="publisher"
                        value={form.publisher}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        placeholder="Value"
                        required
                    />
                </div>
                <div>
                    <label className="block font-medium mb-1">Genre Buku</label>
                    <input
                        name="genre"
                        value={form.genre}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        placeholder="Value"
                        required
                    />
                </div>
                <div>
                    <label className="block font-medium mb-1">Tanggal Rilis</label>
                    <input
                        type="date"
                        name="releaseDate"
                        value={form.releaseDate}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        required
                    />
                </div>
                <div>
                    <label className="block font-medium mb-1">Deskripsi Buku</label>
                    <textarea
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        placeholder="Value"
                        rows={3}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition"
                >
                    input barang
                </button>
            </form>
        </div>
    );
}
