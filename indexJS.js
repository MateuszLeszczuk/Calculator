let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (emp) => {
        switch(emp.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } 
                catch {
                    display.innerText = "error"
                }
                break;
            case 'CE':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += emp.target.innerText;
        }
    });
});