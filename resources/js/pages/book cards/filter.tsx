export default function Filter() {
    return (
        <div className="w-64 rounded-lg border bg-white p-4 shadow-sm">
            <div className="mb-4">
                <h3 className="mb-2 font-bold">Keywords</h3>
                <div className="flex flex-wrap gap-1">
                    <span className="rounded bg-gray-200 px-2 py-1 text-sm">Spring ×</span>
                    <span className="rounded bg-gray-200 px-2 py-1 text-sm">Smart ×</span>
                </div>
            </div>

            <div className="mb-4">
                <h3 className="mb-2 font-bold">Modern</h3>
                <input type="checkbox" /> Teratas <br />
                <input type="checkbox" /> Banyak dibaca <br />
                <input type="checkbox" /> Sembunyikan Koleksi
            </div>

            <div className="mb-4">
                <h3 className="mb-2 font-bold">Genre</h3>
                <input type="checkbox" /> Horor <br />
                <input type="checkbox" /> Romantis <br />
                <input type="checkbox" /> Komik
            </div>

            <div>
                <h3 className="mb-2 font-bold">Tipe</h3>
                <input type="checkbox" /> Komik <br />
                <input type="checkbox" /> Novel <br />
                <input type="checkbox" /> Cerpen
            </div>
        </div>
    );
}
