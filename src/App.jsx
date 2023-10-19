import Random from "./components/Random"
import Tag from "./components/Tag"


export default function App() {
  return (
    <div  className="">
      <div className="background h-full w-full  flex flex-col items-center gap-4 ">
        <h1 className="text-black font-bold text-2xl bg-white w-11/12 text-center mt-3 p-[10px] rounded-lg  " >Random GIFs</h1>
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}
