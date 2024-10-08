import { motion } from 'framer-motion';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import { IoMdPlanet } from 'react-icons/io';
import SelectPlanet from '../planets/SelectPlanet';
import { useContext } from 'react';
import GalleryContext from '../../context/crypto-context';
import { useAuth } from '../../hooks/useAuth';
import { MdAccountCircle } from "react-icons/md";


const { Title } = Typography;

const Header = () => {
  const { planets } = useContext(GalleryContext);

  const {isAuth} = useAuth()

  const SpaceX = 'Space<X>';


  return isAuth? (<motion.div className="px-12 pt-3 w-full pb-3 text-center flex items-center justify-between bg-solarSystem">
  <motion.div className=" ">
    <Link className="flex items-center text-center justify-center" to="/">
      {' '}
      <motion.div
        whileHover={{
          scale: 1.1,
        }}
      >
        <IoMdPlanet style={{ color: 'red' }} className="w-16 h-16" />
      </motion.div>
      <Title
        className="text-white"
        style={{ marginBottom: 0, marginLeft: 6, color: 'white' }}
        level={3}
      >
        {SpaceX}
      </Title>
    </Link>
  </motion.div>
  <motion.div className="flex items-center text-center justify-center">
    <ul className="flex gap-14 text-lg font-mont font-normal text-neutral-200 ">
      <motion.li whileHover={{ scale: 1.1 }}>
        <Link to="/planets">Planets</Link>
      </motion.li>
      <motion.li whileHover={{ scale: 1.1 }}>
        <a href="#">Research</a>
      </motion.li>
      <motion.li whileHover={{ scale: 1.1 }}>
        <a href="#">Projects</a>
      </motion.li>
      <motion.li whileHover={{ scale: 1.1 }}>
        <Link to="/gallery">Gallery</Link>
      </motion.li>
      <motion.li whileHover={{ scale: 1.1 }}>
        <a href="#">About</a>
      </motion.li>
    </ul>
  </motion.div>
  <motion.div  className='h-full flex justify-center items-center gap-8'>
  <SelectPlanet planets={planets}/>
  <motion.div whileHover={{
          y: -4
        }}>
  <MdAccountCircle  style={{ color: 'red' }} className="w-12 h-12 cursor-pointer" />
  </motion.div>
  </motion.div>
</motion.div>) : (
    null
  );
};

export default Header;