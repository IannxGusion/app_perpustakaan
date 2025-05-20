<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    
    @vite('resources/css/app.css')

    <title>the Report</title>
</head>

<body class="bg-white text-gray-800 leading-relaxed text-justify px-16 py-12 space-y-16 font-sans antialiased">
    <div class="break-after-page">

            <table class="p-5 relative overflow-x-auto rounded-b-sm border-2 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">Judul buku</th>
                        <th scope="col" class="px-6 py-3">Genre</th>
                        <th scope="col" class="px-6 py-3">Penulis</th>
                        <th scope="col" class="px-6 py-3">Penerbit</th>
                        <th scope="col" class="px-6 py-3">Tgl. Terbit</th>
                        <th scope="col" class="px-6 py-3">Status</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($books as $book)
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <th scope="row"
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ $book->title }}
                            </th>
                            <td class="px-6 py-4">{{ $book->category->name }}</td>
                            <td class="px-6 py-4">{{ $book->author }}</td>
                            <td class="px-6 py-4">{{ $book->publisher }}</td>
                            <td class="px-6 py-4">{{ $book->publication_date }}</td>
                            <td class="px-6 py-4">{{ $book->status }}</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>

    </div>

    <script type="text/javascript">
        window.print();
    </script>
</body>

</html>
