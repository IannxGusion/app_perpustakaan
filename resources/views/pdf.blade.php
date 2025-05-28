<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    @vite('resources/css/app.css')

    <title>{{ $book->title ?? 'Book Detail' }}</title>
</head>

<body>
    <div class="max-w-3xl mx-auto p-8">
        <div class="flex flex-col md:flex-row gap-6">
            <div>
                <h1 class="text-3xl font-bold mb-2">{{ $book->title }}</h1>
                <div class="mb-2">
                    <span class="font-semibold">Penulis:</span> {{ $book->author }}
                </div>
                <div class="mb-2">
                    <span class="font-semibold">Penerbit:</span> {{ $book->publisher }}
                </div>
                <div class="mb-2">
                    <span class="font-semibold">Tanggal Terbit:</span>
                    {{ \Carbon\Carbon::parse($book->publication_date)->format('d M Y') }}
                </div>
            </div>
        </div>
        <hr>
    </div>
    <div class="mt-8 p-7">
        <div class="prose max-w-none">
            {!! nl2br(e($book->content)) !!}
        </div>
    </div>

</body>

</html>
