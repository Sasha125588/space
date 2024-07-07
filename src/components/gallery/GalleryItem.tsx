import {useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { setCurrentPhoto } from "../../redux/photo/reducer";
import { galleryProps } from "../components-types/types";




export const GalleryItem = ({ photo }: { photo: galleryProps }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleClick = () => {
    dispatch(setCurrentPhoto(photo))
    navigate(`/gallery/${photo.title}`)
  }

  return (
    <div className="w-[400px] h-[455px] relative  rounded-xl bg-zinc-900" onClick={handleClick} >
      <img className="rounded-t-xl w-[400px] h-[300px]" src={photo.url} />
      <div className="px-2 mt-1 text-center truncate overflow-hidden">
        <span className="font-bold text-base text-white	">{photo.title}</span>
      </div>
      <div className="pt-3 ">
        <p className="text-sm indent-3 px-2  text-white text-ellipsis overflow-hidden h-[102px]">
            {photo.explanation}
        </p>
      </div>
    </div>
  );
};