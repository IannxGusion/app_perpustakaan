export default function CSRF() {
    return (
        <input
            type="hidden"
            name="_token"
            value={typeof window !== 'undefined' ? (document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') ?? '') : ''}
        />
    );
}
