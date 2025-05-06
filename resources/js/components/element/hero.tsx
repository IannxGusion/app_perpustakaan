export default function Hero() {
    return (
        <section className="relative">
            <img
                src="/library-banner.jpg"
                alt="Library"
                className="w-full h-64 object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white bg-black bg-opacity-40">
                <h2 className="text-3xl font-bold">PROJECT LIBARY VI</h2>
                <p className="mt-2 text-center w-1/2">
                    Perpustakaan adalah tempat dimana kita bisa mendapatkan semua
                    ilmu—bisa membaca, belajar, serta menguasai dunia.
                </p>
            </div>
        </section>
    )
}