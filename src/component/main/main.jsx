import { SlideMovie } from "./Theater"
import { Spotlight } from "./Spotlight"
import { SlideMovie2 } from "./ontv"


export const Main =()=> {
    return(
        <div className="container mx-auto mt-20 flex">
            <SlideMovie />
            <Spotlight />
            
        </div>
    )
}