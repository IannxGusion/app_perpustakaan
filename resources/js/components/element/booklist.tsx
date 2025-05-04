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
