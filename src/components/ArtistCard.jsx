import { useNavigate } from "react-router-dom";

const ArtistCard = ({ track }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backgrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <img
        className="w-full h-56 rounded-lg"
        src={track?.images?.coverart}
        alt="artist"
      />
    </div>
  );
};

export default ArtistCard;
