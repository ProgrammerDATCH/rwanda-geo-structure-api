import { useState } from "react"
import RwandaLocationSelector, { ILocation } from "./RwandaLocationSelector"

function App() {

  const [location, setLocation] = useState<ILocation | null>(null)

  return (
    <div className="flex justify-center items-center h-screen w-full bg-black text-white flex-col gap-20">
      {/* Call the following */}
      <RwandaLocationSelector setLocation={setLocation} />
      {/* End of calling */}
      <div className="my-10 block ">
        {location && Object.values(location).filter(loc => !!loc).join(' => ')}
      </div>
    </div>
  )
}

export default App
