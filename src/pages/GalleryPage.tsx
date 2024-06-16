import { useContext } from "react";
import GalleryContext from "../context/crypto-context";
import { GalleryItem } from "../components/gallery/GalleryItem";
import Header from "../components/header/Header";




function GalleryPage() {
    const { photos } = useContext(GalleryContext);

    return (
        <div className="bg-black">
            <Header />
        <div className="bg-black justify-center flex flex-wrap mt-3 pb-3	gap-6">                   
        {photos.map((photo) => (
          <GalleryItem photo={photo} />
        ))}
      </div>
        </div>
    );
}


export default GalleryPage;