import { SlideMovie } from "./slideTheater"
import { Spotlight } from "./Spotlight"
import { SlideMovie2 } from "./slideontv"


export const Main1 =()=> {
    return(
        <div className="container mx-auto mt-20 flex">
            <SlideMovie />
            <Spotlight />
        </div>
    )
}