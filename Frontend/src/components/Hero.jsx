import { useSearchParams } from "react-router-dom";

const Hero = () => {
  const [params, setParams] = useSearchParams();

  // form gonnderilince
  const handleSubmit = (e) => {
    e.preventDefault();

    // aratılan kelimeye erisir
    const text = e.target[0].value;

    // url'e parametre olarak formdan alınan text i ekle
    setParams({ query: text });
  };

  return (
    <div className="px-10 py-20 lg:px-20 bg-[linear-gradient(#00000071,#00000071),url('wick.jpg')] bg-center bg-cover text-white">
      <h1 className="text-4xl md:text-5xl">Welcome...</h1>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
        Discover millions of movies, series, and actors
      </h2>

      <form
        onSubmit={handleSubmit}
        className="rounded-lg overflow-hidden flex mt-5"
      >
        <input
          defaultValue={params.get("query")}
          className="w-full py-2 px-4 text-black"
          type="text"
          placeholder="Search for Movie, Series, Actor..."
        />
        <button className="bg-blue-500 px-5 font-semibold hover:bg-blue-600">
          Search
        </button>
      </form>
    </div>
  );
};

export default Hero;
