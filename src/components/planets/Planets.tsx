import { motion } from "framer-motion"
import { planetsInfo } from '../../context/crypto-context';


const Planet = ({ name, className, scale, picture, x }: { name:string, className:string, scale:number, picture:string, x:string}) => {
    return (
      <motion.div
        className=" flex items-center justify-center text-center rounded-full text-sm font-semibold shadow-dark cursor-pointer absolute"
        style={{ x }}
        whileInView={{ x: x }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
    <motion.img whileHover={{ scale: scale }} className={className} src={picture} alt={name + "picture"} />      </motion.div>
    );
};

function Planets() {
  return (
    <div>
    <div className="bg-solarSystem text-white pt-12">
                <Planet name={planetsInfo.Sun.name} className="w-[500px] h-[500px]" scale={1} x="-80vw" picture={planetsInfo.Sun.picture} />
                <div className="pt-60 flex items-center">
                <Planet name={planetsInfo.Mercury.name} className="w-[25px] h-[25px]" scale={1.1} x="-43vw" picture={planetsInfo.Mercury.picture} />
                <Planet name={planetsInfo.Venus.name} className="w-[60px] h-[60px]" scale={1.1} x="-38vw"     picture={planetsInfo.Venus.picture} />
                <Planet name={planetsInfo.Earth.name} className="w-[60px] h-[60px]" scale={1.1} x="-29vw"   picture={planetsInfo.Earth.picture} />
                <Planet name={planetsInfo.Mars.name} className="w-[45px] h-[45px]" scale={1.1} x="-21vw"     picture={planetsInfo.Mars.picture} />
                <Planet name={planetsInfo.Jupiter.name} className="w-[250px] h-[250px]" scale={1.05} x="-15vw"  picture={planetsInfo.Jupiter.picture} />
                <Planet name={planetsInfo.Saturn.name} className="w-[420px] h-[280px]" scale={1.05} x="2vw"    picture={planetsInfo.Saturn.picture} />
                <Planet name={planetsInfo.Uranus.name} className="w-[100px] h-[100px]" scale={1.1} x="31vw" picture={planetsInfo.Uranus.picture} />
                <Planet name={planetsInfo.Neptune.name} className="w-[100px] h-[100px]" scale={1.1} x="42vw" picture={planetsInfo.Neptune.picture} />
                </div>
      </div>
    </div>
  )
}

export default Planets;