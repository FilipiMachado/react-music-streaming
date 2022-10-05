import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";

const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const {
    data: artistData,
    isFetching: isFetchingArtistDetails,
    error,
  } = useGetArtistDetailsQuery(artistId);

  if (isFetchingSongDetails || isFetchingRelatedSongs)
    return <Loader title="Searching song details" />;

  if (error) {
    return <Error />;
  }

  console.log(songid);

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId="" songData={songData} />

      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>
      </div>

      <div className="mt-5">
        {songData?.sections[1].type === "LYRICS" ? (
          songData?.sections[1].text.map((line, i) => (
            <p className="text-gray-400 text-base my-1">{line}</p>
          ))
        ) : (
          <p className="text-gray-400 text-base my-1">
            Sorry, no lyrics found!
          </p>
        )}
      </div>

      <RelatedSongs
        data={data}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      />
    </div>
  );
};

export default ArtistDetails;
