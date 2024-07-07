import Planets from "../components/planets/Planets.tsx";
import { useContext } from "react";
import GalleryContext from "../context/crypto-context";
import { motion } from "framer-motion";
import { IplanetsInfo } from "../context/context-types/types.tsx";

function PlanetsPage() {
  const { planets } = useContext(GalleryContext);

  return (
    <>
    <div className="bg-solarSystem h-screen">
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
