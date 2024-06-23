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
  const planet = useSelector((state: planetProps) => state.planet.currentPlanet);

  if (!planet) return null;

  return (
    <>
      <div className="bg-solarSystem h-full">
        <Header />
        <div className='text-white flex flex justify-between'>
          <div className='flex flex-col p-6'>
            <h2 className='text-6xl font-semibold'>{planet.name}</h2>
            <div className='flex gap-4'>
              <h3>{planet.tagline}</h3>
              <img className='w-[20px] h-[20px]' src={planet.tagline_icon} alt={planet.tagline} />
            </div>
            <img className='w-[300px] h-[300px]' src={planet.picture} alt={planet.name} />
            <p className='text-lg w-[800px]'>{planet.description}</p>
          </div>
          <div className='w-[500px] h-[500px] pt-6'>
            <img className='w-[500px] h-[500px]' src={planet.textureUrl} alt={planet.name} />
          </div>
        </div>
      </div>

    </>
  );
}

export default PlanetPage;
