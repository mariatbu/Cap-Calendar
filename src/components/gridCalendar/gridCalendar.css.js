const sheet = new CSSStyleSheet();
sheet.replace(`:host{
                    border-bottom: 0.05em solid var(--border-color);
                    color: white;
                    background-color: rgb(70, 70, 70);
                    font-family: sans-serif;
                    display: grid;
                    padding: 1em 2em;
                    gap: 0.8em 2em;
                    grid-template-columns: repeat(7,1em);
                    text-align: center;
                    cursor: default;
                }`
    );
export default sheet;