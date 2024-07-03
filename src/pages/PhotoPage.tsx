import { useSelector } from 'react-redux';


export type Props1 = {
  photo: {
    currentPhoto: {
      date: string;
      copyright:string
      title: string;
      media_type:string
      service_version: string
      hdurl: string;
      explanation: string;
      url: string;
    }
  }
};

function PhotoPage() {
  const photo = useSelector((state: Props1) => state.photo.currentPhoto);

  if (!photo) return null;

  return (
    <>
      <div className="bg-solarSystem text-white  ">
        <div className="text-white bg-black flex justify-center h-full">
      <div className="">
        <div className="w-[100%] h-full bg-zinc-700  flex justify-between p-4">
          <div className="w-[70%] flex flex-col items-center">
            <h1 className="mb-3 text-xl	font-semibold">{photo.title}</h1>
            <img className="rounded-lg w-[90%] h-[700px]" src={photo.url} />
          </div>
          <div className="w-[30%] pt-6 flex flex-col justify-between	">
              <p className='text-lg'>{photo.explanation}</p>
              <p className='font-semibold text-xl'>{photo.date}</p>
          </div>
        </div>
      </div>
    </div>
      </div>

    </>
  );
}

export default PhotoPage;
