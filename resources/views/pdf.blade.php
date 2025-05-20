<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    @vite('resources/css/app.css')
    
    <title>the book</title>
</head>

<body class="bg-white text-gray-800 font-serif leading-relaxed text-justify px-16 py-12 space-y-16">
    <div class="break-after-page">
        <div class="mb-4 border-b pb-2">
            <h1 class="text-4xl font-bold">{{ $book->title }}</h1>
            <p class="text-lg text-gray-600 italic">{{ $book->category->name }}</p>
            <p class="text-sm text-gray-500">
                {{ $book->author }} — {{ $book->publisher }}
                {{ $book->publication_date }}
            </p>
        </div>

        <div class="prose max-w-none">
            {!! nl2br(e($book->content)) !!}
        </div>
    </div>

    <script type="text/javascript">
        window.print();
    </script>
</body>

</html>
