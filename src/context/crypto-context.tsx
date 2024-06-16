import { createContext, useEffect, useState } from "react";
import { useContext } from "react";

const GalleryContext = createContext({
  photos: [],
  loading: false,
});

export function GalleryContextProvider({ children }: {children: React.ReactNode}) {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function preload() {
      setLoading(true);
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          "X-API-KEY": "UjmxUFmXZmvYsX01Am+SV7hR6GBuqeomx40m3U6F8Qg=",
        },
      };

      const response = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=NWo7LVkiVh8dNMP9TwYCsNE55kFj1YXnplZ4HzfD&count=50&thumbs=true",
        options
      );


      const result = await response.json();
      const all = result;
      console.log(all)

      setPhotos(all);
      setLoading(false);
    }
    preload();
  }, []);



  return (
    <GalleryContext.Provider value={{ loading, photos}}>
      {children}
    </GalleryContext.Provider>
  );
}

export default GalleryContext;

export function useGallery() {
  return useContext(GalleryContext);
}
