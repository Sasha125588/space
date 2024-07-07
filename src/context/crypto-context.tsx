import { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import { planetsInfo } from "./data/data";
import { IPhoto, IplanetsInfo } from "./context-types/types";


const GalleryContext = createContext<IGalleryContext>({
  photos: [],
  planets: [],
  loading: false,
});

interface IGalleryContext {
  photos: IPhoto[];
  planets: IplanetsInfo[];
  loading: boolean;
}

export function GalleryContextProvider({ children }: {children: React.ReactNode}) {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [planets, setPlanets] = useState<IplanetsInfo[]>([]);

  useEffect(() => {
    async function preload() {
      setLoading(true);
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          "X-API-KEY": "NWo7LVkiVh8dNMP9TwYCsNE55kFj1YXnplZ4HzfD",
        },
      };

      const response = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=NWo7LVkiVh8dNMP9TwYCsNE55kFj1YXnplZ4HzfD&count=51&thumbs=true",
        options
      );
    
      


      const result = await response.json();
      const allPhotos = result;
      const allPlanets = planetsInfo

      setPhotos(allPhotos);
      setPlanets(allPlanets);
      setLoading(false);
    }
    preload();
  }, []);



  return (
    <GalleryContext.Provider value={{ loading, photos, planets}}>
      {children}
    </GalleryContext.Provider>
  );
}

export default GalleryContext;

export function useGallery() {
  return useContext(GalleryContext);
}