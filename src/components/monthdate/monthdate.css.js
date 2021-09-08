const sheet = new CSSStyleSheet();
sheet.replace(`
    div{
    color: rgb(230,230,230);
    background-color: rgb(70, 70, 70);
    font-family: sans-serif;
    }
    div:hover {
        color:white;
    }`
)

export default sheet