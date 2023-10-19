import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = ()=> {

  const [ gif, setGif ] = useState('');
  const [loading, setLoading ]  = useState(false);

  async function fetchData(){
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const {data} = await axios.get(url);
    
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
  }

  useEffect( () => {
    fetchData();
  },[] )

  function clickHandler(){
    fetchData();
  }

  return (
    <div className="w-1/2">
      <div className="flex flex-col bg-green-200  border border-black items-center rounded-lg gap-y-5  ">
        <h1 className="font-bold text-2xl  text-center" >A Random Gif </h1>
        {
          loading ? (<Spinner/>) : (<img src={gif} className="w-[400px] h-[300px]"/>)
        }
        <button onClick={clickHandler} className="bg-red-100 border border-black w-10/12 rounded-lg text-lg font-semibold mb-2" > 
          Generate</button>
      </div>
    </div>
  );
}

export default Random