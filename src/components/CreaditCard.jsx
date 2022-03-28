import react from "react";

function CreditCard(props) {
    const {type, number, expirationYear, bank, owner, bgcolor, color} = props
   

    const divStyle = {
        height: '200px',
        width: '250px',
        backgroundColor: "blue"
      };

     
   
    return (

       
        <>
        <div className="creditcard" style={divStyle}>{CreditCard}</div>
        </>
    )
}

export default CreditCard