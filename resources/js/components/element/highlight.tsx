import Dilan from "./dilan";
import Sadako from "./sadako";
import Bleach from "./Bleach";
import { link } from "fs";

export default function Highlight() {
    return (

        <section className="py-10 px-4">
            <h2 className="text-2xl font-bold mb-6">Top Readings</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    {
                        title: "Dilan",
                        img: <Dilan />,
                    },
                    {
                        title: "Sadako",
                        img: <Sadako />,
                    },
                    {
                        title: "Bleach",
                        img: <Bleach />,
                    },
                ].map((book, idx) => (
                    <div key={idx} className="border p-4 rounded shadow">
                        <span className="bg-black text-white text-xs px-2 py-1 rounded">
                            Top #{idx + 1}
                        </span>
                        <div className="">
                            {book.img}

            <section className="py-10 px-4">
                <h2 className="text-2xl font-bold mb-6">Top Readings</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Dilan",
                            img: "Dilan.jpg",
                        },
                        {
                            title: "Sadako",
                            img: "/books/sadako.jpg",
                        },
                        {
                            title: "Bleach",
                            img: "/books/bleach.jpg",
                        },
                    ].map((book, idx) => (
                        <div key={idx} className="border p-4 rounded shadow">
                            <span className="bg-black text-white text-xs px-2 py-1 rounded">
                                Top #{idx + 1}
                            </span>
                            <img
                                src={book.img}
                                alt={book.title}
                                className="mt-2 w-full h-64 object-cover border border-slate-700"
                            />
                            <h3 className="mt-4 text-lg font-semibold">{book.title}</h3>
                        </div>
                        <h3 className="mt-4 text-lg font-semibold">{book.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
