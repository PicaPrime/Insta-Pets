import { createContext, Dispatch, SetStateAction, use } from "react";

export const likedContext = createContext<{
    likedPuppies: number[];
    setLikedPuppies : Dispatch<SetStateAction<number[]>>;
}>({ likedPuppies: [], setLikedPuppies: () => {} });


// custom hook
export function useLiked() {
    const context = use(likedContext);

    if(!context){
        throw new Error("error form parent ");
    }

    return context;
}