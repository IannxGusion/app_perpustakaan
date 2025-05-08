import React from "react";

type Book = {
  title: string;
  author: string; publisher: string;
  imageUrl: string;
};

const books: Book[] = [
  {
    title: "Dragon Ball",
    author: "penulis",
    publisher: "Penerbit",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/22/Dragon_Ball_vol._1.png",
  },
  {
    title: "Ratu Ilmu Hitam",
    author: "penulis",
    publisher: "Penerbit",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/id/3/35/Ratu_Ilmu_Hitam_2019.jpg",
  },
  {
    title: "Dilan 1990",
    author: "penulis",
    publisher: "Penerbit",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/id/0/03/Dilan_1990_poster.jpg",
  },
];

export default function KoleksiBuku() {
  return (
    <div className="max-w-2xl mx-auto p-6 border rounded shadow bg-white">
      <h1 className="text-2xl font-bold text-center mb-6">Koleksi Buku</h1>
      {books.map((book, index) => (
        <div key={index} className="flex mb-6 space-x-4">
          <img
            src={book.imageUrl}
            alt={book.title}
            className="w-24 h-36 object-cover rounded shadow"
          />
          <div className="flex-1">
            <span className="inline-block bg-black text-white text-xs px-2 py-0.5 rounded mb-2">
              Tag
            </span>
            <h2 className="text-lg font-semibold">{book.title}</h2>
            <p className="text-sm text-gray-600">{book.author}</p>
            <p className="text-sm text-gray-600">{book.publisher}</p>
            <div className="h-4 bg-blue-900 rounded mt-3" />
          </div>
        </div>
      ))}
    </div>
  );
}
