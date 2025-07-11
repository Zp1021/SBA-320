import { useState } from "react";


export default function Display() {

    const [name, setName] = useState('Mario')

    const handleClick = () => {
        setName('Luigi');
    }

    return (
        <div>
            <p id="charName">
                {name}
            </p>
            <button onClick={handleClick} id="nextBtn">
                It's time to get Schwifty!!!
            </button>
        </div>
    )

}