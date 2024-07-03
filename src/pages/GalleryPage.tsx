import { useContext } from "react";
import GalleryContext from "../context/crypto-context";
import { GalleryItem } from "../components/gallery/GalleryItem";



function GalleryPage() {
    const { photos } = useContext(GalleryContext);

    return (
        <div className="bg-solarSystem">
        <div className=" justify-center flex flex-wrap pb-3	gap-6">                   
        {photos.map((photo) => (
          <GalleryItem photo={photo} />
        ))}
      </div>
        </div>
    );
}


export default GalleryPage;