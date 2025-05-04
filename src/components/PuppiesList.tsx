import PuppyCard from "./PuppyCard.jsx";
import { type Puppy } from "../assets/data.js";
import { Dispatch, JSX, SetStateAction } from "react";
import ShortList from "./ShortList.js";
// import {type Puppy} from '../assets/data.ts';

type PuppiesListProp = {
  puppies: Puppy[];
  likedPuppies: number[];
  setLikedPuppies: Dispatch<SetStateAction<number[]>>;
};

function PuppiesList({
  puppies,
  likedPuppies,
  setLikedPuppies,
}: PuppiesListProp) {
  const listContent: JSX.Element[] = [];

  puppies.forEach((puppy, index) => {
    listContent.push(
      <li
        key={puppy.id}
        className="overflow-clip rounded-lg bg-white shadow-md ring ring-black/5 hover:-translate-y-0.5"
      >
        <PuppyCard
          puppy={puppy}
          likedPuppies={likedPuppies}
          setLikedPuppies={setLikedPuppies}
        />
      </li>
    );
  });

  return (
    <>
      {/* {JSON.stringify(likedPuppies)} */}
      <ShortList
        likedPuppies={likedPuppies}
        setLikedPuppies={setLikedPuppies}
        puppies={puppies}
      ></ShortList>
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {listContent}
      </ul>
    </>
  );
}

export default PuppiesList;
