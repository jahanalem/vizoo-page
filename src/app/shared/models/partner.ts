import { Region } from "./region";

export interface IPartner {
    id?: number;
    region: Region | string;
    country: string;
    name: string; // <= 30 char
    imageUrl: string;
    websiteUrl?: string;
}