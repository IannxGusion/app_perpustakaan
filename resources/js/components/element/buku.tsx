type Book = {
    title: string;
    image: string;
  };
  
  const BookCard = ({ title /*image*/ }: Book) => {
    return (
      <div className="flex flex-col items-center border rounded-xl p-4 shadow-md bg-white">
        <img alt={title} className="h-48 w-32 object-cover mb-2" />
        <p className="text-center text-sm font-medium">{title}</p>
        <button className="mt-2 bg-blue-900 text-white py-1 px-4 rounded hover:bg-blue-800">
          Pinjam
        </button>
      </div>
    );
  };
  
  export default BookCard;
  
  /*
  import BookCard from "@/components/element/buku";

const books = [
  {
    title: "Super DragonBall Heroes",
    image: "/books/dragonball.jpg",
  },
  {
    title: "Dia Milikku",
    image: "/books/diamilikku.jpg",
  },
  {
    title: "Danur",
    image: "/books/danur.jpg",
  },
  {
    title: "Naruto Shippuden",
    image: "/books/naruto.jpg",
  },
  {
    title: "Dilan 1991",
    image: "/books/dilan1991.jpg",
  },
  {
    title: "Ratu Ilmu Hitam",
    image: "/books/ratu.jpg",
  },
];

const BookList = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {books.map((book, idx) => (
        <BookCard key={idx} {...book} />
      ))}
    </div>
  );
};

export default BookList;
*/