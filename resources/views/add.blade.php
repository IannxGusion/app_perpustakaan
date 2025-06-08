<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    @vite('resources/css/app.css')

    <title>Input Buku</title>
</head>

<body>
    <!-- Notifikasi Sukses -->
    @if (session('success'))
        <div x-data="{ show: true }" x-init="setTimeout(() => show = false, 3000)" x-show="show"
            class="fixed top-5 right-5 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300">
            {{ session('success') }}
        </div>
    @endif

    <div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-5xl w-full space-y-8 p-10">
            <div class="flex items-center gap-4 mb-6">
                <svg class="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" stroke-width="1.5"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 6v12m6-6H6m16 0a10 10 0 11-20 0 10 10 0 0120 0z" />
                </svg>
                <h2 class="text-3xl font-bold tracking-tight">Tambah Buku Baru</h2>
            </div>

            <form id="bookForm"
                action="{{ auth()->user()->role === 'admin' ? route('admin.books.add') : (auth()->user()->role === 'pustakawan' ? route('librarian.books.add') : '#') }}"
                method="POST" enctype="multipart/form-data" class="space-y-6">
                @csrf

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium">Judul Buku</label>
                            <input type="text" name="title" id="title" placeholder="Contoh: Laskar Pelangi"
                                class="mt-1 block w-full border rounded-lg p-2" />
                            <span class="text-red-500 text-sm hidden" id="error-title">Judul wajib diisi.</span>
                        </div>

                        <div>
                            <label class="block text-sm font-medium">Penulis</label>
                            <input type="text" name="author" id="author" placeholder="Contoh: Andrea Hirata"
                                class="mt-1 block w-full border rounded-lg p-2" />
                            <span class="text-red-500 text-sm hidden" id="error-author">Penulis wajib diisi.</span>
                        </div>

                        <div>
                            <label class="block text-sm font-medium">Penerbit</label>
                            <input type="text" name="publisher" id="publisher" placeholder="Contoh: Bentang Pustaka"
                                class="mt-1 block w-full border rounded-lg p-2" />
                            <span class="text-red-500 text-sm hidden" id="error-publisher">Penerbit wajib diisi.</span>
                        </div>

                        <div>
                            <label class="block text-sm font-medium">Tanggal Terbit</label>
                            <input type="date" name="publication_date" id="publication_date"
                                class="mt-1 block w-full border rounded-lg p-2" />
                            <span class="text-red-500 text-sm hidden" id="error-publication_date">Tanggal wajib
                                diisi.</span>
                        </div>

                        <div>
                            <label class="block text-sm font-medium">Upload Cover</label>
                            <input type="file" name="cover" class="mt-1 block w-full border rounded-lg p-2" />
                        </div>
                    </div>

                    <div class="space-y-4">
                        <label class="block text-sm font-medium">Kategori Buku</label>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3" id="categorySection">
                            @foreach ($categories as $category)
                                <label class="flex items-center gap-2 text-sm">
                                    <input type="checkbox" name="category_ids[]" value="{{ $category->id }}"
                                        class="kategori-checkbox" />
                                    {{ $category->name }}
                                </label>
                            @endforeach
                        </div>
                        <span class="text-red-500 text-sm hidden" id="error-kategori">Pilih minimal satu
                            kategori.</span>

                        <div class="mt-6">
                            <label class="block text-sm font-medium">Deskripsi / Konten</label>
                            <textarea name="content" id="content" rows="5" placeholder="Masukkan sinopsis atau catatan penting buku..."
                                class="mt-1 block w-full border rounded-lg p-3"></textarea>
                            <span class="text-red-500 text-sm hidden" id="error-content">Konten wajib diisi.</span>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end gap-4">
                    <button type="reset" id="resetButton"
                        class="inline-flex items-center px-6 py-3 bg-gray-300 hover:bg-gray-400 text-gray-800 text-sm font-medium rounded-lg shadow transition duration-200">
                        Reset Form
                    </button>

                    <button type="submit"
                        class="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow transition ease-in-out duration-200">
                        Simpan Buku
                    </button>
                </div>
            </form>
        </div>
    </div>

    <!-- Validasi JavaScript -->
    <script>
        document.getElementById('bookForm').addEventListener('submit', function(e) {
            let valid = true;

            const fields = ['title', 'author', 'publisher', 'publication_date', 'content'];

            fields.forEach(field => {
                const input = document.getElementById(field);
                const errorId = field === 'publication_date' ? 'error-publication_date' : `error-${field}`;
                const error = document.getElementById(errorId);

                if (!input.value.trim()) {
                    error.classList.remove('hidden');
                    valid = false;
                } else {
                    error.classList.add('hidden');
                }
            });

            const kategori = document.querySelectorAll('.kategori-checkbox');
            const kategoriChecked = [...kategori].some(cb => cb.checked);
            const kategoriError = document.getElementById('error-kategori');

            if (!kategoriChecked) {
                kategoriError.classList.remove('hidden');
                valid = false;
            } else {
                kategoriError.classList.add('hidden');
            }

            if (!valid) e.preventDefault();
        });
    </script>
</body>

</html>
