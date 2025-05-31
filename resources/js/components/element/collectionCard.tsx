import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Collection } from '@/types';

export default function CollectionCard({ collection }: { collection: Collection }) {
    return (
        <Card className="w-full drop-shadow-lg hover:border-2 hover:border-black hover:drop-shadow-none">
            <CardHeader>
                <CardTitle>{collection.name}</CardTitle>
            </CardHeader>
        </Card>
    );
}
