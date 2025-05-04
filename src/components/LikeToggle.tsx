import { Heart } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";

type LikeToggleProps = {
  id: number,
  likedPuppies: number[],
    setLikedPuppies: Dispatch<SetStateAction<number[]>>
}

function LikeToggle({id, likedPuppies, setLikedPuppies } : LikeToggleProps) {
  // const [likedStatus, setLikedStatus] = useState(false);
  const [count, setCount] = useState(0);
  //   let likedStatus = false;

  function handleLikeStatus(event: React.MouseEvent<HTMLButtonElement>) {
    
    if(likedPuppies.includes(id)){
      setLikedPuppies(likedPuppies.filter(pupId => pupId != id));
    }
    else{
      // likedPuppies.push(id);
      // setLikedPuppies((likedPuppies));
      setLikedPuppies([...likedPuppies, id]);
    }
    
    setCount(prevcount => prevcount + 1);
  }

  const isLiked = likedPuppies.includes(id);
  return (
    <>
      <button className="group flex items-center gap-1 " onClick={handleLikeStatus} title="like">
        <Heart
          className={
            isLiked
              ? "fill-pink-500 stroke-none"
              : "lucide lucide-heart stroke-slate-200 group-hover:stroke-slate-300"
          }
        />
        <span className="text-2xl">{count}</span>
      </button>

      
      
    </>
  );
}

export default LikeToggle;
