import react from "react";

function BoxColor(props) {

const { r, g, b} = props

    const divStyle = {
        height: '100px',
        width: '250px',
        backgroundColor: "rgb"
        
      };
    return (
<>
        <div style={divStyle}>
        {BoxColor}
        </div>
        
</>
    )
}

export default BoxColor

