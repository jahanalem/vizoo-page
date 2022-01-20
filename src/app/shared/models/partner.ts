import { Region } from "./region";

export interface IPartner {
    id: number;
    region: Region;
    country: string;
    name: string; // <= 30 char
    imageUrl: string;
    websiteUrl?: string;
}