type Book = {
    title: string;
    image: string;
  };
  
  const BookCard = ({ title, image }: Book) => {
    return (
      <div className="flex flex-col items-center border rounded-xl p-4 shadow-md bg-white">
        <img src={image} alt={title} className="h-48 w-32 object-cover mb-2" />
        <p className="text-center text-sm font-medium">{title}</p>
        <button className="mt-2 bg-blue-900 text-white py-1 px-4 rounded hover:bg-blue-800">
          Pinjam
        </button>
      </div>
    );
  };
  
  export default BookCard;
  