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
          <div className='flex flex-col p-4 w-[50%]'>
            <h2 className='text-6xl font-semibold '>{planet.name}</h2>
            <div className='flex gap-3 items-center pt-3'>
              <img className='w-[30px] h-[30px]' src={planet.tagline_icon} alt={planet.tagline} />
              <h3 className='text-lg'>{planet.tagline}</h3>
            </div>
            <div className='flex justify-between '>
              <div className='flex flex-col text-base	 gap-2 pt-10'>
                <h4>Distance from sun: <p className='font-semibold'>{planet.distanceFromSun}</p> </h4>
                <h4>Year length: <p className='font-semibold'>{planet.yearLength}</p></h4>
                <h4>Number of moons: <p className='font-semibold'>{planet.numberOfMoons}</p></h4>
                <h4>Namesake: <p className='font-semibold'>{planet.namesake}</p></h4>                
              </div>
              <img className='w-[400px] h-[400px]' src={planet.picture} alt={planet.name} />
            </div>
            <p className='text-xl '>{planet.description}</p>
          </div>
          <div className='w-[700px] h-[700px] pt-6 pr-6'>
            <img className='w-[100%] h-[100%]' src={planet.textureUrl} alt={planet.name} />
          </div>
        </div>
      </div>

    </>
  );
}

export default PlanetPage;
