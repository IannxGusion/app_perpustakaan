import { Input } from '@/components/ui/input'; // Adjust the path based on your project structure
import { FaSearch } from 'react-icons/fa'; // Corrected import for the search icon

export default function Search() {
    return (
        <section className="bg-gray-200 text-center py-12 px-4 mt-4">
            <h1 className="text-4xl font-bold">Halaman Utama</h1>
            <div className="relative w-full md:w-1/2 mx-auto">
                <Input
                    type="text"
                    placeholder="Cari buku, penulis, atau topik..."
                    className="pl-10 pr-4 py-2 border rounded shadow-sm w-full bg-gray-50"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
        </section>
    );
}