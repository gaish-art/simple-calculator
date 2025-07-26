let inputBox=document.getElementById('inputBox');
let buttons=document.querySelectorAll('button');

let expression="";

buttons.forEach(button => {
    button.addEventListener('click',(e)=> {
        const buttonText=e.target.innerText;
        if(buttonText==='='){
            try{
                expression=String(eval(expression));
                inputBox.value=expression;
            } catch {
                inputBox.value="Error";
                expression="";
            }
        }
        else if(buttonText === 'AC') {
            expression='';
            inputBox.value=expression;
        }
        else if (buttonText==='DEL'){
            expression=expression.slice(0,-1);
            inputBox.value=expression;
        }
        else {
            expression+=buttonText;
            inputBox.value=expression;
        }
    });
});