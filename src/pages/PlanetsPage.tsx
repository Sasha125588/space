import Header from "../components/header/Header.tsx";
import Planets from "../components/planets/Planets.tsx";
import { useContext } from "react";
import GalleryContext, { IplanetsInfo } from "../context/crypto-context";
import { motion } from "framer-motion";

function PlanetsPage() {
  const { planets } = useContext(GalleryContext);

  return (
    <>
    <div className="bg-solarSystem h-screen">
    <Header />
      <motion.div className="w-full flex items-center justify-center">
      {planets.map((planet: IplanetsInfo) => (
          <Planets planet={planet} />
        ))}
      </motion.div>
    </div>
    </>
  );
}

export default PlanetsPage;
