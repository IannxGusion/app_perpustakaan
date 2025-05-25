import {
    Card,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Collection } from "@/types"

export default function CollectionCard({ collection }: { collection: Collection }) {
    return (
        <Card className='w-full drop-shadow-lg hover:drop-shadow-none hover:border-2 hover:border-black'>
            <CardHeader>
                <CardTitle>
                    {collection.name}
                </CardTitle>
            </CardHeader>
        </Card>
    )
}