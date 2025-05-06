import Booklist from '@/components/element/daftar_buku/booklist';
import { Input } from '@/components/ui/input'; // Adjust the path based on your project structure
import Filter from '@/components/element/daftar_buku/filter';
import { Link } from '@inertiajs/react';

export default function Daftar_buku_file() {
    return (
        <div className="flex gap-6">
            <Filter />
            <div className="flex-1">
                <div className="flex justify-between items-center mb-4">
                    <Input
                        type="text"
                        placeholder="Search..."
                        className="w-full">
                    </Input>
                </div>

                {/*<Booklist />*/}
                <div>
                    <Booklist />
                </div>

            </div>
        </div>
    )
}
