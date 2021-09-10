const sheet = new CSSStyleSheet();
sheet.replace(`
            :host{
                color: rgb(230,230,230);
                padding: 1em 1em;
                flex-grow: 1;
                }
            :host(:hover) {
                color:white;
            }`
)

export default sheet