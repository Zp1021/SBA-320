
import { Link } from "react-router-dom";

export default function CharacterPage() {

    return (
        <>
        <div className="imgDisplay">
        <img src="https://i.imgflip.com/a01e84.jpg" title="made at imgflip.com" />
        <Link to='/'><button id="backBtn">Back to the Randomizer</button></Link>
        </div>
        </>
    )

}