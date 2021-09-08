const sheet = new CSSStyleSheet();
sheet.replace(`
    div{
    color: rgb(230,230,230);
    background-color: rgb(70, 70, 70);
    font-family: sans-serif;
    border-top: 0.05em solid darkgrey;
    }
    div:hover {
        color:white;
    }`
)

export default sheet