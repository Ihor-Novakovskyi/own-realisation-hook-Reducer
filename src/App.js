
import { useState } from "react";
import "./App.css";
import useReducer from "./ownReducer";

function reducer({autoplay}, {type}) {
    switch(type) {
        case "toggleAutoPlay": 
            return {autoplay: !autoplay}
        case "slow":
            return {autoplay: "200"};
        case "fast":
            return {autoplay: "600"};
        default: 
            return {autoplay: "no definition"};
    
    }
}
const Slider = () => {
    const [slide, setSlide] = useState(0);
    const [{autoplay}, dispatch] = useReducer(reducer, {autoplay: false});
    console.log(autoplay)

    function changeSlide(i) {
        setSlide(slide => slide + i);
    }

    return (
        <div>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                <div className="text-center mt-5">Active slide {slide} <br />{typeof autoplay === "boolean" ? `Autoplay: ${autoplay}`: `Speed autoplay selected: ${autoplay}`} </div>
                <div className="buttons mt-3">
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}>-1</button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>+1</button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => dispatch({type: "toggleAutoPlay"})}>
                            toogleAutoplay
                    </button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => dispatch({type: "slow"})}>
                            slow speed
                    </button>
                 
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => dispatch({type: "fast"})}>
                            toggle autoplay
                    </button>
                </div>
            </div>
        </div>
    )
}

function App() {
    return (
        <Slider />
    );
}

export default App;
