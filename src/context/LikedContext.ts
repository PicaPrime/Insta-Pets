import { createContext, Dispatch, SetStateAction } from "react";

export const likedContext = createContext<{
    likedPuppies: number[];
    setLikedPuppies : Dispatch<SetStateAction<number[]>> | null;
}>({ likedPuppies: [], setLikedPuppies: null });