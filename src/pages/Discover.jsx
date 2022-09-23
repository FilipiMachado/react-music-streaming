import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";

const Discover = () => {
  const genreTitle = "Pop";
  console.log(genres);

  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-col justify-between items-center sm:flex-row mt-4 mb-10">
        <h2 className="text-white font-bold text-3xl text-left">
          Discover {genreTitle}
        </h2>
        <select
          onChange={() => {}}
          value=""
          className="bg-black text-gray-300 text-sm rounded-lg outline-none sm:mt-0 mt-5"
          name=""
          id=""
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genres.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((song, i) => (
          <SongCard key={song.key} song={song} i={i}/>
        ))}
      </div>
    </div>
  );
};

export default Discover;
