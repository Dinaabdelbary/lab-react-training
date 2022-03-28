import react from "react";

function Greetings(props) {
    const {lang, children} = props

    const greetings = {
        de:"Hallo",
        en: "Hello",
        es: "Hola",
        fr: "Bonjour"
    }
    return (
        <>
        {greetings[lang]}
        {children}
        </>
    )
}

export default Greetings