import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Display() {
    function random(length) {
        return Math.floor(Math.random() * length)
    }

    const [name, setName] = useState(null)

    async function getCharData() {
        try {
            // API being used
            let url = ("https://rickandmortyapi.com/api/character?limit=21");
            const response = await fetch(url)
            const data = await response.json()

            //Data gets passed along as an array that can be accessed
            const charList = data.results
            const randChar = charList[random(charList.length)]
            // Randomizes the character name by index according to the length the array
            const charName = randChar.name
            console.log(randChar.id)
            
            // Returns the randomized name
            return charName

        } catch (error) {
            console.log(error)
        }
    }

    const handleClick = () => {
        setName(getCharData());
    }

    return (
        <div>
            <Link to={`/character/:id`}>
            <p id="charName">
                {name}
            </p>
            </Link>
            <button onClick={handleClick} id="nextBtn">
                It's time to get Schwifty!!!
            </button>
        </div>
    )

}