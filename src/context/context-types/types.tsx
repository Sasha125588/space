export interface IplanetsInfo {
    name: string,
    className: string,
    pictureSize: string,
    x_position: string,
    scale: number,
    tagline: string,
    tagline_icon: string,
    picture: string,
    textureUrl: string,
    description: string,
    distanceFromSun: string,
    yearLength: string,
    numberOfMoons: number,
    namesake: string,
    rings: {
      "url_exists": boolean,
    },
    spaceTexture_url: string
}

export interface Iplanet {
    name: string,
    picture: string,
}
  
export interface IPhoto {
          date: string;
          copyright:string
          title: string;
          media_type:string
          service_version: string
          hdurl: string;
          explanation: string;
          url: string;
}