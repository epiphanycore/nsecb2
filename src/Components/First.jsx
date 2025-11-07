import React from "react";
import styled from "styled-components";

const Heading = styled.h1`
    color: darkblue;
    background-color: lightgreen;
    text-align: center;
`;


const First = () =>{
    return(
        <>
        <Heading>Arrow function one
            <br></br>
            Arrow function two
            <br></br>
            Arrow function three
            <br></br>
            Arrow function four
            <br></br>
            Arrow function five
            </Heading>
        </>

    )
}

export default First