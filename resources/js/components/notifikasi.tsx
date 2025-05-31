import { Terminal } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export function AlertDemo() {
    return (
        <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Selamattt!</AlertTitle>
            <AlertDescription>Anda telah berhasil meminjam buku di perpustakaan kami!</AlertDescription>
        </Alert>
    );
}
