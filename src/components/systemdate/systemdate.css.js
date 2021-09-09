const sheet = new CSSStyleSheet();
sheet.replace(`
    div{
    color: rgb(127, 178, 229);
    background-color: rgb(70, 70, 70);
    font-family: sans-serif;
    padding: 0 1rem 1rem;
    }
    div:hover {
        color: rgb(154, 158, 161);
    }`
)

export default sheet