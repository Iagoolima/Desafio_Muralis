import TextWelcome from "../../components/Textwelcome";
import './style-welcome.css'

export default function Welcome() {
    return (
        <div className="container-welcome">
            <div className="bg-muralis"></div>
            <TextWelcome />
        </div>
    )
}