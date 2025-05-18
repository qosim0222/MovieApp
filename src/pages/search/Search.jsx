import { useFetch } from "@/hooks/useFetch";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [query, setQuery] = useState("");

  
  const { data, loading, error } = useFetch("/movie/popular"); 

  const movies = data?.results || [];


  const filteredMovies = movies.filter((movie) =>
    movie.original_title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white p-4  ">
      <div className="flex justify-center mt-4">
        <div className="flex items-center bg-[#1c1c1c] px-4 py-2 rounded-md  max-w-md">
          <FaSearch className="text-red-600 mr-2" />
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-transparent outline-none text-white w-full placeholder-gray-400"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-10 gap-2">
        {loading ? (
          <p className="text-gray-500">Загрузка...</p>
        ) : error ? (
          <p className="text-red-500">Error loading data</p>
        ) : query === "" ? (
          <p className="text-gray-500">The page is still empty</p>
        ) : filteredMovies.length === 0 ? (
          <p className="text-gray-500">Nothing found matching your request</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
            {filteredMovies.map((movie) => (
              <div
                key={movie.id}
                className="bg-[#1c1c1c] rounded-lg overflow-hidden"
              >
                <img
                  src={import.meta.env.VITE_IMAGE_URL + movie.backdrop_path}
                  alt={movie.original_title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-2">
                  <h2 className="text-sm">{movie.original_title}</h2>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
