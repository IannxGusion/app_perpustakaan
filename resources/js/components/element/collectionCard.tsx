import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Collection } from "@/types"

export default function CollectionCard({ collection }: { collection: Collection }) {
    return (
        <Card className='w-full h-full drop-shadow-lg hover:drop-shadow-none hover:border-2 hover:border-black'>
            <CardHeader>
                <CardTitle>{collection.borrowing.book.title}</CardTitle>
                <CardDescription>{collection.borrowing.book.author}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Di pinjam pada: {collection.borrowing.borrow_date}</p>
                <p>Tenggat kembali: {collection.borrowing.return_date}</p>
            </CardContent>
        </Card>
    )
}