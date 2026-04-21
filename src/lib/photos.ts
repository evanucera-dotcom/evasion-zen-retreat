import jacuzzi from "@/assets/photo-jacuzzi.jpg";
import chambre from "@/assets/photo-chambre.jpg";
import salon from "@/assets/photo-salon.jpg";
import spaRouge from "@/assets/photo-spa-rouge.jpg";
import sauna from "@/assets/photo-sauna.jpg";
import peignoirs from "@/assets/photo-peignoirs.jpg";
import love1 from "@/assets/love-1.jpg";
import love2 from "@/assets/love-2.jpg";
import love3 from "@/assets/love-3.jpg";
import love4 from "@/assets/love-4.jpg";
import love5 from "@/assets/love-5.jpg";
import love6 from "@/assets/love-6.jpg";
import love7 from "@/assets/love-7.jpg";

export const ROOM_LOVE_PHOTOS: string[] = [
  love1,
  love2,
  love3,
  love4,
  love5,
  love6,
  love7,
];

export const ROOM_04_PHOTOS: string[] = [
  chambre,
  jacuzzi,
  peignoirs,
  salon,
  spaRouge,
];

export const ALL_PHOTOS: string[] = [
  ...ROOM_LOVE_PHOTOS,
  jacuzzi,
  chambre,
  spaRouge,
  sauna,
  peignoirs,
  salon,
];
