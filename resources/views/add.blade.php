<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    @vite('resources/css/app.css')

    <title>Input Book Data</title>
</head>

<body>
    <form action={{ route('books.add') }} method="POST" enctype="multipart/form-data">
        @csrf

        <div class="max-w-3xl mx-auto p-8">
            <div class="flex flex-col md:flex-row gap-6">
                <div>
                    <h1 class="text-3xl font-bold mb-2">
                        <input type="text" name='title' class="border" placeholder="title">
                    </h1>
                    <div class="mb-2">
                        <span class="font-semibold">Cover:</span>
                        <input type="file" name='cover' class="border">
                    </div>
                    <div class="mb-2">
                        <span class="font-semibold">Penulis:</span>
                        <input type="text" name='author' class="border" placeholder="author">
                    </div>
                    <div class="mb-2">
                        <span class="font-semibold">Penerbit:</span>
                        <input type="text" name='publisher' class="border" placeholder="publsiher">
                    </div>
                    <div class="mb-2">
                        <span class="font-semibold">Tanggal Terbit:</span>
                        <input type="date" name='publication_date' class="border" placeholder="publication_date">
                    </div>
                    @foreach($categories as $idx => $category)
                    <label class="flex items-center gap-2">
                        <input type="checkbox" name="category_ids[]" value="{{ $category->id }}"
                            @if(isset($book) && $book->categories && $book->categories->contains('id', $category->id))
                                checked
                            @elseif((!isset($book) || !$book->categories || $book->categories->isEmpty()) && $idx === 0)
                                checked
                            @endif
                            @if($idx === 0) required @endif
                        >
                        <span>{{ $category->name }}</span>
                    </label>
                    @endforeach
                </div>
            </div>
            <hr>
        </div>
        <div class="mt-8 p-7 flex-col space-y-10">
            <div class="prose max-w-none">
                <input type="text" class="border" placeholder="content" name="content">
            </div>
            <button type="submit"
                class="bg-primary-600 text-white px-4 py-2 rounded justify-center items-center">Simpan</button>
        </div>

    </form>

</body>

</html>
