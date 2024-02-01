import { useContext } from "react"
import { theme } from "../App"
import "./Child.css";

export default function Child() {
    const toggle = useContext(theme);
    return(
        <div className={`${toggle}`}>
            <h2>Child component</h2>
            <p>Lorem text</p>
        </div>
    )
}