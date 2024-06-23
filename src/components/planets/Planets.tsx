import { motion } from "framer-motion"
import {useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { setCurrentPhoto } from "../../redux/photo/reducer";
import { IplanetsInfo } from "../../context/crypto-context";


const Planet = ({ name, className, scale, picture, x }: { name:string, className:string, scale:number, picture:string, x:string}) => {
    return (
      <motion.div
        className=" flex flex-col items-center justify-center text-center rounded-full font-semibold shadow-dark cursor-pointer absolute"
        style={{ x }}
        whileInView={{ x: x }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <p className="text-lg text-white">{name}</p>
    <motion.img whileHover={{ scale: scale }} className={className} src={picture} alt={name + "picture"} />      </motion.div>
    );
};

function Planets({planet}: {planet: IplanetsInfo}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleClick = () => {
    dispatch(setCurrentPhoto(planet))
    navigate(`/planets/${planet.name}`)
  }
  return (
    <div>
    <motion.div className="bg-solarSystem text-white pt-40 flex items-center" onClick={handleClick} >
                <Planet name={planet.name} className={planet.className} scale={planet.scale} x={planet.x_position} picture={planet.picture} />
      </motion.div>
    </div>
  )
}

export default Planets;