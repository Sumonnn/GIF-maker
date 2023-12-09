import Spinner from "./Spinner";
import useGIF from "../hooks/useGIF";


// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY; //this is not work error: process is not defind

function Random() {

    const {gif,loading,fetchData} = useGIF();

    return (
        <div className="w-1/2 bg-green-400 rounded-lg border border-black flex flex-col items-center gap-y-5 ">

            <h1 className="mt-[15px] text-2xl underline uppercase font-bold">A Random Gif</h1>
            {
                loading ? <Spinner/> : <img src={gif} width='450' alt="GIFs" />
            }

            

            <button onClick={()=> fetchData()} className="w-10/12 mb-[20px] bg-yellow-500 text-lg py-2 rounded-lg">
                Generate
            </button>
        </div>
    )
}

export default Random