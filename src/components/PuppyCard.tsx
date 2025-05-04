import { Dispatch, SetStateAction } from "react";
import { Puppy } from "../assets/data";
import LikeToggle from "./LikeToggle";

type PuppyCardProp = {
  puppy : Puppy,
  likedPuppies: number[],
  setLikedPuppies: Dispatch<SetStateAction<number[]>>
}


function PuppyCard({ puppy, likedPuppies, setLikedPuppies } : PuppyCardProp) {
  return (
    <>
      <img
        className="aspect-square object-cover"
        alt={puppy.name}
        src={puppy.imagePath}
      />
      <div className="gap flex items-center justify-between p-4 text-sm">
        <div className="flex items-center gap-2">
          <p className="font-semibold">{puppy.name}</p>
          <span className="text-slate-300">·</span>
          <p className="text-slate-500">{puppy.trait}</p>
        </div>
        <LikeToggle id={puppy.id} likedPuppies = {likedPuppies} setLikedPuppies={setLikedPuppies}></LikeToggle>
      </div>
    </>
  );
}

export default PuppyCard;
