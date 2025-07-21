import { FollowUs } from "./foloowUs"
import { HeaderSlider } from "./headerSlider"
import { Navigation } from "./navigation"
import { SearchBox } from "./searchBox"

export const Header = ()=> {
    return(
        <div className="container ">
            <Navigation />
            <SearchBox />
            <FollowUs />
            <HeaderSlider />
        </div>
    )
}