import { Dispatch, JSX, SetStateAction } from "react";
import { type Puppy } from "../assets/data.js";
import PuppyCard from "./PuppyCard.jsx";
import Search from "./Search.js";
import ShortList from "./ShortList.js";

type PuppiesListProp = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  puppies: Puppy[];
  likedPuppies: number[];
  setLikedPuppies: Dispatch<SetStateAction<number[]>>;
};

function PuppiesList({
  puppies,
  likedPuppies,
  setLikedPuppies,
  searchQuery,
  setSearchQuery,
}: PuppiesListProp) {
  const listContent: JSX.Element[] = [];

  puppies
    .filter((puppy) =>
      puppy.trait.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .forEach((puppy, index) => {
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

  
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <ShortList
          likedPuppies={likedPuppies}
          setLikedPuppies={setLikedPuppies}
          puppies={puppies}
        />
      </div>
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {listContent}
      </ul>
    </div>
  );
}

export default PuppiesList;
