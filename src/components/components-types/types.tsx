import { IplanetsInfo } from "../../context/context-types/types";

export interface galleryProps {
    date: string;
    copyright:string
    title: string;
    media_type:string
    service_version: string
    hdurl: string;
    explanation: string;
    url: string;
};

export interface SelectPlanetProps {
    planets: IplanetsInfo[];
}