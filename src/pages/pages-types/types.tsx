export type photoPageProps = {
    photo: {
      currentPhoto: {
        date: string;
        copyright:string
        title: string;
        media_type:string
        service_version: string
        hdurl: string;
        explanation: string;
        url: string;
      }
    }
};

export interface planetPageProps {
    planet: {
        currentPlanet: {
            name: string
            tagline: string,
            pictureSize: string,
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
      }
}