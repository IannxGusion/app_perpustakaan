<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{{ $book->title }}</title>
    @vite('resources/css/app.css')
</head>

<body class="bg-white text-gray-800 font-serif leading-relaxed text-justify px-8 md:px-16 py-12 space-y-12 max-w-4xl mx-auto">

    {{-- Gambar Cover --}}
    @if(!empty($book->cover_url))
    <div class="mb-8 flex justify-center">
        <img src="" alt="Cover {{ $book->title }}" class="max-h-96 rounded-lg shadow-md object-contain" />
    </div>
    @endif

    {{-- Judul dan Info Buku --}}
    <header class="mb-8 border-b pb-4">
        <h1 class="text-4xl font-bold mb-2">{{ $book->title }}</h1>
        <p class="text-lg italic text-gray-600 mb-1">{{ $book->category->name }}</p>
        <p class="text-sm text-gray-500">
            {{ $book->author }} — {{ $book->publisher }} — {{ $book->publication_date }}
        </p>
    </header>

    {{-- Isi Buku --}}
    <article class="prose prose-lg max-w-none whitespace-pre-wrap">
        {{ $book->content }}
    </article>

</body>

</html>