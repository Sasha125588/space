import { motion } from "framer-motion"
import { planetsInfo } from '../../context/crypto-context';
import { Header } from "antd/es/layout/layout";


const Planet = ({ name, picture, x, y }: { name:string, picture:string, x:string, y:string }) => {
    return (
      <motion.div
        className="w-16 h-16 flex items-center justify-center text-center rounded-full text-sm font-semibold shadow-dark cursor-pointer absolute"
        style={{ x, y }}
        initial={{ x: 0, y: -100 }}
        whileInView={{ x: x, y: y }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
    <motion.img whileHover={{ scale: 1.1 }} className='' src={picture} alt={name + "picture"} />      </motion.div>
    );
};

function Planets() {
  return (
    <div>
      <Header />
    <div className="bg-solarSystem text-white">
                <Planet name={planetsInfo.Mercury.name} x="-21vw" y="-2vw" picture={planetsInfo.Mercury.picture} />
                <Planet name={planetsInfo.Venus.name} x="5vw" y="-16.8vw" picture={planetsInfo.Venus.picture} />
                <Planet name={planetsInfo.Earth.name} x="-16vw" y="-19vw" picture={planetsInfo.Earth.picture} />
                <Planet name={planetsInfo.Mars.name} x="25vw" y="-9vw" picture={planetsInfo.Mars.picture} />
                <Planet name={planetsInfo.Jupiter.name} x="19vw" y="12.5vw" picture={planetsInfo.Jupiter.picture} />
                <Planet name={planetsInfo.Saturn.name} x="2vw" y="21vw" picture={planetsInfo.Saturn.picture} />
                <Planet name={planetsInfo.Uranus.name} x="13.8vw" y="1vw" picture={planetsInfo.Uranus.picture} />
                <Planet name={planetsInfo.Neptune.name} x="-15vw" y="14vw" picture={planetsInfo.Neptune.picture} />
      </div>
    </div>
  )
}

export default Planets;