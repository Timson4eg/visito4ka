import Loader from "@/Components/Loader";
import { IoLogoYoutube } from "react-icons/io";

interface IFooterPlayerProps {
  title: string;
  videoId: string | null;
  isPlaying: boolean;
  isLoadingTitle?: boolean;
  xl?: boolean;
}

const FooterPlayer = ({
  title,
  videoId,
  isLoadingTitle = false,
}: IFooterPlayerProps) => {
  console.log(isLoadingTitle);
  return (
    <div>
      {isLoadingTitle ? (
        <Loader />
      ) : (
        <div className="flex justify-center text-center">
          {/* группа для hover */}

          <div className="group relative overflow-hidden w-64 whitespace-nowrap cursor-default mx-1.5 flex text-center fade-mask ">
            <div className="flex group-hover:animate-marquee items-center">
              <span className="mr-8">{title}</span>
              <span className="mr-8">{title}</span>
            </div>
          </div>

          <a
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-grotesk p-1"
          >
            <IoLogoYoutube
              size={30}
              color="red"
              className="transition-transform duration-200 hover:scale-125"
            />
          </a>
        </div>
      )}
    </div>
  );
};

export default FooterPlayer;
