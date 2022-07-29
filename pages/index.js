import { useEffect, useState } from "react";

export default function Home() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`/api/books`);
        const books = (await response.json()).data;
        console.log(books);
        setBooks(books);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBooks();
  }, []);
  return (
    <div className=" showcase">
      <div className="overlay">
        <h1 className=" text-4xl text-white font-bold text-center mb-4 lg:text-6xl capitalize p-5">
          NYT Best Sellers Lists Services
        </h1>
      </div>
      <section>
        {books.map((book) => {
          const {
            rank,
            title,
            author,
            publisher,
            description,
            primary_isbn13,
            amazon_product_url,
          } = book;
          return (
            <article
              className="px-5 py-10 rounded-lg lg:w-9/12 lg:mx-auto bg-white mb-3 shadow-slate-100"
              key={rank}
            >
              <h2 className="text-2xl font-bold mb-5 lg:text-2xl">
                {rank + "."}
                <p className="text-2xl font-bold mb-5 mt-5 lg:text-2xl">
                  {title}{" "}
                </p>
              </h2>
              <p className="text-lg">{description}</p>
              <ul className="my-4">
                <li>
                  <span className="font-bold">Author: </span> {author}
                </li>

                <li>
                  <span className="font-bold">Publisher: </span> {publisher}
                </li>
                <li>
                  <span className="font-bold">ISBN: </span> {primary_isbn13}
                </li>
              </ul>
              <a className="underline" href={amazon_product_url}>
                Product Link
              </a>
            </article>
          );
        })}
      </section>
    </div>
  );
}
