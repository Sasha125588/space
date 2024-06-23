import Header from '../components/header/Header';
import { useSelector } from 'react-redux';

interface planetProps {
    planet: {
        currentPlanet: {
            name: string
            tagline: string,
            tagline_icon: string,
            picture: string,
            textureUrl: string,
            description: string,
            distanceFromSun: string,
            yearLength: string,
            numberOfMoons: number,
            namesake: string,
            rings: {
              "url_exists": boolean,
            },
            spaceTexture_url: string
        }
      }
}

function PlanetPage() {
  const photo = useSelector((state: planetProps) => state.planet.currentPlanet);

  if (!photo) return null;

  return (
    <>
      <div className="bg-solarSystem text-white  ">
        <Header />
        <div className="text-white bg-black flex justify-center h-full">
      <div className="">
        <div className="w-[100%] h-full bg-zinc-700  flex justify-between p-4">
          <div className="w-[70%] flex flex-col items-center">
            <h1 className="mb-3 text-xl	font-semibold">{photo.name}</h1>
            <img className="rounded-lg w-[90%] h-[700px]" src={photo.picture} />
          </div>
          <div className="w-[30%] pt-6 flex flex-col justify-between	">
              <p className='text-lg'>{photo.description}</p>
              <p className='font-semibold text-xl'>{photo.tagline}</p>
          </div>
        </div>
      </div>
    </div>
      </div>

    </>
  );
}

export default PlanetPage;
