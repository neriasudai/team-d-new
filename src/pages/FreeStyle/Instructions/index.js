import styles from './style.module.css'
import { Link, Route, Routes } from "react-router-dom"
// import FreeStyleTraining from "../Training"
import SubmitBtn from "../../../components/common/SubmitBtn"
import Text from "../../../components/common/Text"


let text = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."

// Creator : Team h
function Instructions() {
    return <>
        {/* TODO: ask Text creators to make it nicer. */}
        <div><Text text={text} title={"instructions"}></Text></div>
        <div><Link to={"/teams/TeamH/Training"}><SubmitBtn /></Link></div>
    </>
}

export default Instructions