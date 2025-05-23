<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    @vite('resources/css/app.css')

    <title>the Report</title>
</head>

<body
    class="bg-white text-gray-800 leading-relaxed text-justify px-4 sm:px-8 md:px-16 py-12 space-y-16 font-sans antialiased">
    <div class="break-after-page space-y-12">
        @php
            $tableHeaders = [
                'books' => ['Judul buku', 'Genre', 'Penulis', 'Penerbit', 'Tgl. Terbit', 'Status'],
                'borrowings' => ['Buku', 'Peminjam', 'Tanggal Pinjam', 'Tanggal Kembali', 'Status'],
            ];
        @endphp

        {{-- Books Table --}}
        <div class="w-full overflow-x-auto">
            <x-data-table :headers="$tableHeaders['books']">
                @foreach ($books as $book)
                    <tr class="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                        <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">{{ $book->title }}</td>
                        <td class="px-6 py-4 text-gray-700 dark:text-gray-300">{{ $book->category->name }}</td>
                        <td class="px-6 py-4 text-gray-700 dark:text-gray-300">{{ $book->author }}</td>
                        <td class="px-6 py-4 text-gray-700 dark:text-gray-300">{{ $book->publisher }}</td>
                        <td class="px-6 py-4 text-gray-700 dark:text-gray-300">{{ $book->publication_date }}</td>
                        <td class="px-6 py-4">
                            <span
                                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                                {{ $book->status === 'Available' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300' }}">
                                {{ $book->status }}
                            </span>
                        </td>
                    </tr>
                @endforeach
            </x-data-table>
        </div>

        {{-- Borrowings Table --}}
        <div class="w-full overflow-x-auto">
            <x-data-table :headers="$tableHeaders['borrowings']">
                @foreach ($borrowings as $borrowing)
                    <tr class="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                        <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">{{ $borrowing->book->title }}</td>
                        <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">{{ $borrowing->user->name }}</td>
                        <td class="px-6 py-4 text-gray-700 dark:text-gray-300">{{ $borrowing->borrow_date }}</td>
                        <td class="px-6 py-4 text-gray-700 dark:text-gray-300">{{ $borrowing->return_date }}</td>
                        <td class="px-6 py-4">
                            <span
                                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                                {{ $borrowing->status === 'Returned' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' }}">
                                {{ $borrowing->status }}
                            </span>
                        </td>
                    </tr>
                @endforeach
            </x-data-table>
        </div>
    </div>


    <script type="text/javascript">
        window.print();
    </script>
</body>

</html>