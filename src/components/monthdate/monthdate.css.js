const sheet = new CSSStyleSheet();
sheet.replace(`
            :host{
                color: rgb(230,230,230);
                border-top: 0.05em solid darkgrey;
                padding: 1em 1em;
                }
            :host(:hover) {
                color:white;
            }`
)

export default sheet