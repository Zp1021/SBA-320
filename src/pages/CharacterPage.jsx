
import { Link } from "react-router-dom";

export default function CharacterPage() {

    return (
        <>
        {/* <a href="https://imgflip.com/i/a01e84"> */}
        <img src="https://i.imgflip.com/a01e84.jpg" title="made at imgflip.com" />
        {/* </a><div><a href="https://imgflip.com/memegenerator">from Imgflip Meme Generator</a></div> */}
        <Link to='/'>
        <button>
        Back to the Randomizer
        </button>
        </Link>
        </>
    )

}