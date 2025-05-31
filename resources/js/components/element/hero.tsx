export default function Hero() {
    return (
        <section className="relative">
            <img src="/library-banner.jpg" alt="Library" className="h-64 w-full object-cover" />
            <div className="bg-opacity-40 absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center bg-black text-white">
                <h2 className="text-3xl font-bold">PROJECT LIBARY VI</h2>
                <p className="mt-2 w-1/2 text-center">
                    Perpustakaan adalah tempat dimana kita bisa mendapatkan semua ilmu—bisa membaca, belajar, serta menguasai dunia.
                </p>
            </div>
        </section>
    );
}
