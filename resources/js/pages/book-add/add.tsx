import CSRF from "@/components/element/csrf";
import React, { useRef, useState } from "react";

type Category = {
    id: number;
    name: string;
};

type AddBookProps = {
    categories: Category[];
    onSubmit?: (formData: FormData) => void;
    successMessage?: string;
};

export default function AddBook({
    categories = [],
    onSubmit,
    successMessage,
}: AddBookProps) {
    const formRef = useRef<HTMLFormElement>(null);
    const [errors, setErrors] = useState<Record<string, boolean>>({});
    const [showSuccess, setShowSuccess] = useState(!!successMessage);

    React.useEffect(() => {
        if (showSuccess) {
            const timer = setTimeout(() => setShowSuccess(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [showSuccess]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const form = formRef.current;
        if (!form) return;

        const formData = new FormData(form);
        const newErrors: Record<string, boolean> = {};

        // Validate required fields
        ["title", "author", "publisher", "publication_date", "content"].forEach(
            (field) => {
                const value = formData.get(field);
                newErrors[field] = !value || !String(value).trim();
            }
        );

        // Validate at least one category
        const kategoriChecked = categories.some((cat) =>
            formData.getAll("category_ids[]").includes(String(cat.id))
        );
        newErrors["kategori"] = !kategoriChecked;

        setErrors(newErrors);

        // If any error, do not submit
        if (Object.values(newErrors).some(Boolean)) return;

        if (onSubmit) {
            onSubmit(formData);
        } else {
            form.submit();
        }
    };

    const handleReset = () => {
        setErrors({});
    };

    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl w-full space-y-8 p-10">
                {showSuccess && (
                    <div className="fixed top-5 right-5 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300">
                        {successMessage}
                    </div>
                )}

                <div className="flex items-center gap-4 mb-6">
                    <svg
                        className="w-10 h-10 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v12m6-6H6m16 0a10 10 0 11-20 0 10 10 0 0120 0z"
                        />
                    </svg>
                    <h2 className="text-3xl font-bold tracking-tight">
                        Tambah Buku Baru
                    </h2>
                </div>

                <form
                    ref={formRef}
                    id="bookForm"
                    action="#"
                    method="POST"
                    encType="multipart/form-data"
                    className="space-y-6"
                    onSubmit={handleSubmit}
                    onReset={handleReset}
                >
                    <CSRF />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium">
                                    Judul Buku
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    placeholder="Contoh: Laskar Pelangi"
                                    className="mt-1 block w-full border rounded-lg p-2"
                                />
                                <span
                                    className={`text-red-500 text-sm ${errors["title"] ? "" : "hidden"
                                        }`}
                                    id="error-title"
                                >
                                    Judul wajib diisi.
                                </span>
                            </div>

                            <div>
                                <label className="block text-sm font-medium">
                                    Penulis
                                </label>
                                <input
                                    type="text"
                                    name="author"
                                    id="author"
                                    placeholder="Contoh: Andrea Hirata"
                                    className="mt-1 block w-full border rounded-lg p-2"
                                />
                                <span
                                    className={`text-red-500 text-sm ${errors["author"] ? "" : "hidden"
                                        }`}
                                    id="error-author"
                                >
                                    Penulis wajib diisi.
                                </span>
                            </div>

                            <div>
                                <label className="block text-sm font-medium">
                                    Penerbit
                                </label>
                                <input
                                    type="text"
                                    name="publisher"
                                    id="publisher"
                                    placeholder="Contoh: Bentang Pustaka"
                                    className="mt-1 block w-full border rounded-lg p-2"
                                />
                                <span
                                    className={`text-red-500 text-sm ${errors["publisher"] ? "" : "hidden"
                                        }`}
                                    id="error-publisher"
                                >
                                    Penerbit wajib diisi.
                                </span>
                            </div>

                            <div>
                                <label className="block text-sm font-medium">
                                    Tanggal Terbit
                                </label>
                                <input
                                    type="date"
                                    name="publication_date"
                                    id="publication_date"
                                    className="mt-1 block w-full border rounded-lg p-2"
                                />
                                <span
                                    className={`text-red-500 text-sm ${errors["publication_date"] ? "" : "hidden"
                                        }`}
                                    id="error-publication_date"
                                >
                                    Tanggal wajib diisi.
                                </span>
                            </div>

                            <div>
                                <label className="block text-sm font-medium">
                                    Upload Cover
                                </label>
                                <input
                                    type="file"
                                    name="cover"
                                    className="mt-1 block w-full border rounded-lg p-2"
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <label className="block text-sm font-medium">
                                Kategori Buku
                            </label>
                            <div
                                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                                id="categorySection"
                            >
                                {categories.map((category) => (
                                    <label
                                        key={category.id}
                                        className="flex items-center gap-2 text-sm"
                                    >
                                        <input
                                            type="checkbox"
                                            name="category_ids[]"
                                            value={category.id}
                                            className="kategori-checkbox"
                                        />
                                        {category.name}
                                    </label>
                                ))}
                            </div>
                            <span
                                className={`text-red-500 text-sm ${errors["kategori"] ? "" : "hidden"
                                    }`}
                                id="error-kategori"
                            >
                                Pilih minimal satu kategori.
                            </span>

                            <div className="mt-6">
                                <label className="block text-sm font-medium">
                                    Deskripsi / Konten
                                </label>
                                <textarea
                                    name="content"
                                    id="content"
                                    rows={5}
                                    placeholder="Masukkan sinopsis atau catatan penting buku..."
                                    className="mt-1 block w-full border rounded-lg p-3"
                                ></textarea>
                                <span
                                    className={`text-red-500 text-sm ${errors["content"] ? "" : "hidden"
                                        }`}
                                    id="error-content"
                                >
                                    Konten wajib diisi.
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end gap-4">
                        <button
                            type="reset"
                            id="resetButton"
                            className="inline-flex items-center px-6 py-3 bg-gray-300 hover:bg-gray-400 text-gray-800 text-sm font-medium rounded-lg shadow transition duration-200"
                        >
                            Reset Form
                        </button>

                        <button
                            type="submit"
                            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow transition ease-in-out duration-200"
                        >
                            Simpan Buku
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}