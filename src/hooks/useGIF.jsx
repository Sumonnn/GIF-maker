import axios from "axios";
import { useEffect, useState } from "react";


const url = `https://api.giphy.com/v1/gifs/random?api_key=WUv3vPBzzcMLWVJIEYZhPnSD6HYo11t0`;

function useGIF(tag) {
    const [gif, setgif] = useState('');
    const [loading, setloading] = useState(false);

    async function fetchData() {
        setloading(true);
        const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
        setgif(data.data.images.downsized_large.url)
        setloading(false)
        // console.log(data.data.images.downsized_large.url);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return { gif, loading, fetchData };
}

export default useGIF;