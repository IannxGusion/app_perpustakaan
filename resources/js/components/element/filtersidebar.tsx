const FilterSidebar = () => {
    return (
      <div className="w-64 bg-white p-4 border rounded-lg shadow-sm">
        <div className="mb-4">
          <h3 className="font-bold mb-2">Keywords</h3>
          <div className="flex flex-wrap gap-1">
            <span className="bg-gray-200 px-2 py-1 rounded text-sm">Spring ×</span>
            <span className="bg-gray-200 px-2 py-1 rounded text-sm">Smart ×</span>
          </div>
        </div>
  
        <div className="mb-4">
          <h3 className="font-bold mb-2">Modern</h3>
          <input type="checkbox" /> Teratas <br />
          <input type="checkbox" /> Banyak dibaca <br />
          <input type="checkbox" /> Sembunyikan Koleksi
        </div>
  
        <div className="mb-4">
          <h3 className="font-bold mb-2">Genre</h3>
          <input type="checkbox" /> Horor <br />
          <input type="checkbox" /> Romantis <br />
          <input type="checkbox" /> Komik
        </div>
  
        <div>
          <h3 className="font-bold mb-2">Tipe</h3>
          <input type="checkbox" /> Komik <br />
          <input type="checkbox" /> Novel <br />
          <input type="checkbox" /> Cerpen
        </div>
      </div>
    );
  };
  
  export default FilterSidebar;
  