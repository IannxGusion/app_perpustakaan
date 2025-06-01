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
    <form action={{ route('admin.books.add') }} method="POST" enctype="multipart/form-data">
        @csrf

        <div class="max-w-3xl mx-auto p-8">
            <div class="flex flex-col md:flex-row gap-6">
                <div>
                    <h1 class="text-3xl font-bold mb-2">
                        <input type="text" class="border" placeholder="title">
                    </h1>
                    <div class="mb-2">
                        <span class="font-semibold">Penulis:</span>
                        <input type="text" class="border" placeholder="author">
                    </div>
                    <div class="mb-2">
                        <span class="font-semibold">Penerbit:</span>
                        <input type="text" class="border" placeholder="publsiher">
                    </div>
                    <div class="mb-2">
                        <span class="font-semibold">Tanggal Terbit:</span>
                        <input type="text" class="border" placeholder="publication_date">
                    </div>
                </div>
            </div>
            <hr>
        </div>
        <div class="mt-8 p-7">
            <div class="prose max-w-none">
                <input type="text" class="border" placeholder="content">
            </div>
        </div>
    </form>

</body>

</html>
