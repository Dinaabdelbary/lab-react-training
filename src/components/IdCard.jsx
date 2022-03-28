import React from "react"


function IdCard(props)  {
    
    const { lastName,
            firstName,
            gender,
             height,
             birth,
             picture} = props
    return (
        <>
        <p>{lastName}</p>
        <p>{firstName}</p>
        <p>{gender}</p>
        <p>{height}</p>
        <p>{birth.toString()}</p>
        {/* <img>{picture}</img> */}
        </>
    )
}


export default IdCard