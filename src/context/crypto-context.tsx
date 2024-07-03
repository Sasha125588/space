import { createContext, useEffect, useState } from "react";
import { useContext } from "react";


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

      interface IplanetsInfo {
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
    
      const planetsInfo: IplanetsInfo[] = [
      {
        name: "Sun",
        className: "w-[500px] h-[500px] ml-6",
        pictureSize: "w-[450px] h-[400px] animate-spin-slow",
        x_position: "-80vw",
        scale: 1,
        tagline: "a G-type main-sequence star",
        "tagline_icon": "https://img.icons8.com/ios/50/ffffff/earth-planet.png",
        picture: "https://i.ibb.co/Wkfp5k1/1solar-flare-en-removebg-preview-1.png",
        "textureUrl": "https://www.solarsystemscope.com/textures/download/2k_mercury.jpg",
        "description": "Sun",
        "distanceFromSun": "0 million miles",
        "yearLength": "88",
        "numberOfMoons": 0,
        "namesake": "SUN",
        "rings": {
          "url_exists": false
        },
        "spaceTexture_url": "https://www.solarsystemscope.com/textures/download/2k_stars.jpg"
      },
      {
        "name": "Mercury",
        className: "w-[25px] h-[25px]",
        pictureSize: 'w-[400px] h-[350px] animate-spin-slow',
        x_position: "-43vw",
        scale: 1.1,
        "tagline": "Terrestrial Planet",
        "tagline_icon": "https://img.icons8.com/ios/50/ffffff/earth-planet.png",
        picture: "https://i.ibb.co/G7BtSYM/Mercury-in-true-color-removebg-preview.png",
        "textureUrl": "https://www.solarsystemscope.com/textures/download/2k_mercury.jpg",
        "description": "Mercury is the smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon. It is the closest planet to the Sun. Mercury is a rocky planet, also known as a terrestrial planet. Mercury has a solid, cratered surface, much like the Earth's moon.",
        "distanceFromSun": "36 million miles",
        "yearLength": "88",
        "numberOfMoons": 0,
        "namesake": "ROMAN GOD OF SPEED",
        "rings": {
          "url_exists": false
        },
        "spaceTexture_url": "https://www.solarsystemscope.com/textures/download/2k_stars.jpg"
      },
      {
        "name": "Venus",
        className: "w-[60px] h-[60px]",
        pictureSize: 'w-[400px] h-[380px] animate-spin-slow',
        x_position: "-36vw",
        scale: 1.1,
        "tagline": "Terrestrial Planet",
        "tagline_icon": "https://img.icons8.com/ios/50/ffffff/earth-planet.png",
        "picture": "https://i.ibb.co/8cN61tp/Venus-from-Mariner-10-removebg-preview.png",
        "textureUrl": "https://www.solarsystemscope.com/textures/download/2k_venus_surface.jpg",
        "description": "Venus is the second planet from the Sun and is Earth’s closest planetary neighbor. It’s one of the four inner, terrestrial (or rocky) planets, and it’s often called Earth’s twin because it’s similar in size and density. Venus rotates on its axis backward, compared to most of the other planets in the solar system. Venus was the first planet to be explored by a spacecraft. Venus has a solid surface covered in dome-like volcanoes, rifts, and mountains, with expansive volcanic plains and vast, ridged plateaus.",
        "distanceFromSun": "67 million miles",
        "yearLength": "225",
        "numberOfMoons": 0,
        "namesake": "ROMAN GODDESS OF LOVE",
        "rings": {
          "url_exists": false
        },
        "spaceTexture_url": "https://www.solarsystemscope.com/textures/download/2k_stars.jpg"
      },
      {
        name: "Earth",
        className: "w-[60px] h-[60px]",
        pictureSize: 'w-[400px] h-[400px] animate-spin-slow',
        x_position: "-29vw",
        scale: 1.1,
        tagline: "Terrestrial Planet",
        tagline_icon: "https://img.icons8.com/ios/50/ffffff/earth-planet.png",
        picture: "https://i.ibb.co/8c2Cv9z/1200px-The-Earth-seen-from-Apollo-17-removebg-preview.png",
        textureUrl: "https://www.solarsystemscope.com/textures/download/2k_earth_daymap.jpg",
        description: "Our home planet Earth is a rocky, terrestrial planet. It has a solid and active surface with mountains, valleys, canyons, plains and so much more. Earth is special because it is an ocean planet. Water covers 70 percent of Earth's surface. Earth's atmosphere is made mostly of nitrogen and has plenty of oxygen for us to breathe. The atmosphere also protects us from incoming meteoroids, most of which break up before they can hit the surface.",
        distanceFromSun: "93 million miles",
        yearLength: "365",
        numberOfMoons: 1,
        namesake: "VARIATION OF 'THE GROUNDED' IN MANY LANGUAGES",
        rings: {
          "url_exists": false
        },
        spaceTexture_url: "https://www.solarsystemscope.com/textures/download/2k_stars.jpg"
      },
      {
        "name": "Mars",
        className: "w-[45px] h-[45px]",
        pictureSize: 'w-[400px] h-[400px] animate-spin-slow',
        x_position: "-21vw",
        scale: 1.1,
        "tagline": "Terrestrial Planet",
        "tagline_icon": "https://img.icons8.com/ios/50/ffffff/earth-planet.png",
        "picture": "https://i.ibb.co/K2CftyS/OSIRIS-Mars-true-color-removebg-preview.png",
        "textureUrl": "https://www.solarsystemscope.com/textures/download/2k_mars.jpg",
        "description": "Mars is a cold desert world. It is half the size of Earth. Mars is sometimes called the Red Planet. It's red because of rusty iron in the ground. Like Earth, Mars has seasons, polar ice caps, volcanoes, canyons, and weather. It has a very thin atmosphere made of carbon dioxide, nitrogen, and argon. There are signs of ancient floods on Mars, but now water mostly exists in icy dirt and thin clouds. On some Martian hillsides, there is evidence of liquid salty water in the ground.",
        "distanceFromSun": "142 million miles",
        "yearLength": "687",
        "numberOfMoons": 2,
        "namesake": "ROMAN GOD OF WAR",
        "rings": {
          "url_exists": false
        },
        "spaceTexture_url": "https://www.solarsystemscope.com/textures/download/2k_stars.jpg"
      },
      {
        "name": "Jupiter",
        className: "w-[250px] h-[250px]",
        pictureSize: 'w-[400px] h-[420px] animate-spin-slow',
        x_position: "-15vw",
        scale: 1.05,
        "tagline": "Gas Giant",
        "tagline_icon": "https://img.icons8.com/ios-glyphs/30/ffffff/planet.png",
        "picture": "https://i.ibb.co/2YDqP3P/Jupiter-and-its-shrunken-Great-Red-Spot-removebg-preview.png",
        "textureUrl": "https://www.solarsystemscope.com/textures/download/2k_jupiter.jpg",
        "description": "Jupiter is the biggest planet in our solar system. It's similar to a star, but it never got big enough to start burning. Jupiter is covered in swirling cloud stripes. It has big storms like the Great Red Spot, which has been going for hundreds of years. Jupiter is a gas giant and doesn't have a solid surface, but it may have a solid inner core about the size of Earth. Jupiter also has rings, but they're too faint to see very well.",
        "distanceFromSun": "484 million miles",
        "yearLength": "4,333",
        "numberOfMoons": 75,
        "namesake": "KING OF THE ROMAN GODS",
        "rings": {
          "url_exists": false
        },
        "spaceTexture_url": "https://www.solarsystemscope.com/textures/download/2k_stars.jpg"
      },
      {
        "name": "Saturn",
        className: "w-[420px] h-[280px]",
        pictureSize: 'w-[500px] h-[360px] animate-spin-slow mb-12',
        x_position: "2vw",
        scale: 1.05,
        "tagline": "Gas Giant",
        "tagline_icon": "https://img.icons8.com/ios-glyphs/30/ffffff/planet.png",
        "picture": "https://i.ibb.co/1MHPjZT/38-saturn-1600x900-removebg-preview.png",
        "textureUrl": "https://www.solarsystemscope.com/textures/download/2k_saturn.jpg",
        "description": "Saturn is the sixth planet from the Sun and the second largest planet in our solar system. Saturn is a gas-giant planet and therefore does not have a solid surface like Earth’s. Saturn has the most spectacular ring system, with seven rings and several gaps and divisions between them. Like Jupiter, Saturn is mostly a ball of hydrogen and helium.",
        "distanceFromSun": "886 million miles",
        "yearLength": "10,759",
        "numberOfMoons": 82,
        "namesake": "FATHER OF JUPITER",
        "rings": {
          "url_exists": true
        },
        "spaceTexture_url": "https://www.solarsystemscope.com/textures/download/2k_stars.jpg"
      },
      {
        "name": "Uranus",
        className: "w-[100px] h-[100px]",
        pictureSize: 'w-[400px] h-[400px] animate-spin-slow',
        x_position: "32vw",
        scale: 1.1,
        "tagline": "Ice Giant",
        "tagline_icon": "https://img.icons8.com/ios-glyphs/30/ffffff/snowflake.png",
        "picture": "https://i.ibb.co/6Yy98fv/uranus-v2-removebg-preview.png",
        "textureUrl": "https://www.solarsystemscope.com/textures/download/2k_uranus.jpg",
        "description": "Uranus is made of water, methane, and ammonia fluids above a small rocky center. Its atmosphere is made of hydrogen and helium like Jupiter and Saturn, but it also has methane. The methane makes Uranus blue. Uranus also has faint rings. The inner rings are narrow and dark. The outer rings are brightly colored and easier to see. Like Venus, Uranus rotates in the opposite direction as most other planets. And unlike any other planet, Uranus rotates on its side.",
        "distanceFromSun": "1.8 billion miles",
        "yearLength": "30,687",
        "numberOfMoons": 27,
        "namesake": "GREEK GOD OF THE SKY",
        "rings": {
          "url_exists": false
        },
        "spaceTexture_url": "https://www.solarsystemscope.com/textures/download/2k_stars.jpg"
      },
      {
        "name": "Neptune",
        className: "w-[100px] h-[100px]",
        pictureSize: 'w-[400px] h-[400px] animate-spin-slow',
        x_position: "42vw",
        scale: 1.1,
        "tagline": "Ice Giant",
        "tagline_icon": "https://img.icons8.com/ios-glyphs/30/ffffff/snowflake.png",
        "picture": "https://i.ibb.co/7r7PbBQ/e-NTJrysq4-A6-Dq-Xnc-Bts-Rr-B-removebg-preview.png",
        "textureUrl": "https://www.solarsystemscope.com/textures/download/2k_neptune.jpg",
        "description": "Neptune is dark, cold, and very windy. It's the last of the planets in our solar system. It's more than 30 times as far from the Sun as Earth is. Neptune is very similar to Uranus. It's made of a thick soup of water, ammonia, and methane over an Earth-sized solid center. Its atmosphere is made of hydrogen, helium, and methane. The methane gives Neptune the same blue color as Uranus. Neptune has six rings, but they're very hard to see.",
        "distanceFromSun": "2.8 billion miles",
        "yearLength": "60,190",
        "numberOfMoons": 14,
        "namesake": "ROMAN GOD OF THE SEA",
        "rings": {
          "url_exists": false
        },
        "spaceTexture_url": "https://www.solarsystemscope.com/textures/download/2k_stars.jpg"
      }
      ]


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