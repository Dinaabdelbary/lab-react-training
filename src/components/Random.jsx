import react from "react";

function Random(props) {

const{ min, max} = props

const range = Math.floor(Math.random() * (max - min + 1)) + min;

return (
    <>
    {range}
    </>
)
}
export default Random