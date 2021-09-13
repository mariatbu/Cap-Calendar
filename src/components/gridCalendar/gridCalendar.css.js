const sheet = new CSSStyleSheet();
sheet.replace(`:host{
                    border-bottom: 0.05em solid rgb(70,70,70);
                    color: white;
                    background-color: rgb(70, 70, 70);
                    font-family: sans-serif;
                    display: grid;
                    padding: 1rem 1.7rem;
                    gap: 0.8em 2em;
                    grid-template-columns: repeat(7,1em);
                    text-align: center;
                    cursor: default;
                }
                :host > div{
                    height: 1.7em;
                    width: 1.7em;
                    justify-content: space-around;
                    display: flex;
                    border-width: 2px;
                    border-style: solid;
                    border-color: transparent;
                }
                :host .isNotMonth{
                    color: grey;
                }
                :host .isToday{
                    background-color:rgb(127, 178, 240);
                }
                :host .selected {
                    border-color: rgb(127, 178, 240);
                }`
    );
export default sheet;