import Spinner from "./Spinner";
import useGIF from "../hooks/useGIF";
import { useState } from "react";



function Tag() {
  const [tag, setTag] = useState('');
  const {gif,loading, fetchData} = useGIF(tag);

  return (
    <div className="w-1/2 bg-blue-400 rounded-lg border border-black flex flex-col items-center gap-y-5 ">

      <h1 className="mt-[15px] text-2xl underline uppercase font-bold">Random {tag} Gif</h1>
      {
        loading ? <Spinner /> : <img src={gif} width='450' alt="GIFs" />
      }

      <input
        className="w-10/12 text-lg py-2 rounded-lg text-center"
        type="text"
        value={tag}
        onChange={(event)=> setTag(event.target.value)}
      />

      <button onClick={()=>fetchData()} className="w-10/12 mb-[20px] bg-yellow-500 text-lg py-2 rounded-lg">
        Generate
      </button>
    </div>
  )
}

export default Tag