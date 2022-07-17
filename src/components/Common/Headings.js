import React from 'react'
import ScrollAnimation from "react-animate-on-scroll";

function Headings(props) {
    return (
        <ScrollAnimation animateIn="fadeInLeft" animateOnce="true">
        <h4 className="f-bold padding-left padding-right" style={{color: props.textColor}}>{props.title}</h4>
        </ScrollAnimation>
    )
}

export default Headings
