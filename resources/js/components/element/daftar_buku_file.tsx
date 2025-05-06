import Booklist from '@/components/element/daftar_buku/booklist';
import { Input } from '@/components/ui/input'; // Adjust the path based on your project structure
import Filter from '@/components/element/daftar_buku/filter';

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
                    <div className="grid gap-5 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {books.map((book) => (
                            <div key={book.id} className="bg-white shadow-md rounded-lg p-4">
                                <Card className="p-4">

                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger className="grid grid-cols-4 gap-4 items-center rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                                {book.author}
                                            </TooltipTrigger>
                                            <TooltipContent>{book.author}</TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>

                                    <CardContent>
                                        {book.title}
                                    </CardContent>

                                    <Button>
                                        Pinjam
                                    </Button>

                                    <CardHeader>
                                        <CardTitle>{book.title}</CardTitle>
                                    </CardHeader>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}
