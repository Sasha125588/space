import { useSelector } from 'react-redux';
import { motion } from "framer-motion";
import { planetPageProps } from './pages-types/types';

function PlanetPage() {
  const planet = useSelector((state: planetPageProps) => state.planet.currentPlanet);

  if (!planet) return null;

  return (
    <>
      <div className="bg-solarSystem h-full">
        <div className='text-white flex justify-between'>
          <div className='flex flex-col p-4 w-[50%]'>
            <h2 className='text-6xl font-semibold '>{planet.name}</h2>
            <div className='flex gap-3 items-center pt-3'>
              <motion.img className='w-[30px] h-[30px]' src={planet.tagline_icon} alt={planet.tagline} />
              <h3 className='text-lg'>{planet.tagline}</h3>
            </div>
            <div className='flex justify-between '>
              <div className='flex flex-col text-base	 gap-2 pt-10'>
                <h4>Distance from sun: <p className='font-semibold'>{planet.distanceFromSun}</p> </h4>
                <h4>Year length: <p className='font-semibold'>{planet.yearLength}</p></h4>
                <h4>Number of moons: <p className='font-semibold'>{planet.numberOfMoons}</p></h4>
                <h4>Namesake: <p className='font-semibold'>{planet.namesake}</p></h4>                
              </div>
              <motion.img className={planet.pictureSize} src={planet.picture} alt={planet.name} />
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
