

export type Props = {
  date: string;
  copyright:string
  title: string;
  media_type:string
  service_version: string
  hdurl: string;
  explanation: string;
  url: string;
};

export const GalleryItem = ({ photo }: { photo: Props }) => {

  return (
    <div className="w-[400px] h-[455px] relative  rounded-xl bg-zinc-900">
      <img className="rounded-t-xl w-[400px] h-[300px]" src={photo.url} />
      <div className="px-2 mt-1 text-center truncate overflow-hidden">
        <span className="font-bold text-base text-white	">{photo.title}</span>
      </div>
      <div className="pt-3 ">
        <p className="text-sm indent-3 px-2  text-white text-ellipsis overflow-hidden h-[102px]">
            {photo.explanation}
        </p>
      </div>
    </div>
  );
};