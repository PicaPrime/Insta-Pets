import { Heart } from "lucide-react";
import { Dispatch, SetStateAction, use, useState } from "react";
import { likedContext } from "../context/LikedContext";

type LikeToggleProps = {
  id: number,
}

function LikeToggle({id } : LikeToggleProps) {
  
  const [count, setCount] = useState(0);
  const {likedPuppies, setLikedPuppies} = use(likedContext);

  function handleLikeStatus(event: React.MouseEvent<HTMLButtonElement>) {
    
    if(likedPuppies.includes(id)){
      setLikedPuppies(likedPuppies.filter(pupId => pupId != id));
    }
    else{
      
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
