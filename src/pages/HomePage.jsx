import { useState, Activity } from "react"
import { Link } from "react-router-dom";
import useOrientation from '@/hooks/useOrientation'


function Home({children, ...props}){
  return (
    <div {...props} >
      <div className="text-2xl text-center">
        {children}
      </div>
    </div>
  )
}

export default function HomePage(){
  const [isPortrait] = useOrientation()
  const [activitySet, setActivitySet] = useState(true)
  
  
  return (
    <div className={`bg-purple-200 flex ${isPortrait ? 'h-dvh flex-col' : 'h-dvh flex-row'}`}>
      <h1 className="text-center flex justify-center items-center text-4xl flex-2">{isPortrait ? "Portrait" : "Landscape"}</h1>
      <Activity mode={activitySet ? "visible" : 'hidden'}>
        <Home className=" bg-purple-500 flex-7 flex justify-center items-center"  >
          <h2>This is Home</h2>
          <Link to={'r3f'} className="underline">Next Page</Link>
        </Home>
      </Activity>
      <button className="border font-bold underline rounded-md flex-1" onClick={() => setActivitySet(prev => !prev)}>Change</button>
    </div>
  )
}