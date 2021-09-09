const sheet = new CSSStyleSheet();
sheet.replace(`:host{
    
    display: grid; 
    grid-template-columns: repeat(7, 1fr);
    justify-items: center;
    
}`)

export default sheet