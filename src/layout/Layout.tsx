import { Spin } from "antd";
import { useContext } from "react";
import GalleryContext from "../context/crypto-context";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { loading } = useContext(GalleryContext);

  if (loading) {
    return <Spin fullscreen />;
  }
  return <div className="h-screen w-full">
      {children}
    </div>;
};