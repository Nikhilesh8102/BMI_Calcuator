const form = document.querySelector('form');
document.body.style.width='fit-content';

document.body.style.borderRadius='12px';

document.body.style.margin = '60px auto';
document.body.style.margin = '60px auto';
document.querySelector('h1').style.marginTop = '0';
document.querySelector('h1').style.textAlign= 'center';
document.querySelector('h3').style.textAlign= 'center';
document.querySelector('.chart').style.textAlign='center';

form.addEventListener('submit',e =>{
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('.result');
    const BMI = document.querySelector('#BMI');
    if(true){
        result.style.fontSize = '20px';
        result.style.paddingLeft = '24px';
        result.style.textAlign='center';
        result.style.fontWeight ='bold';
    if(height<0 || height==='' || isNaN(height)){
        result.style.fontSize = '18px';
        result.innerText = 'please provide valid height!';
        console.log(height);
    }
    else if(weight<0 || weight==='' || isNaN(weight)){
        result.style.fontSize = '18px';
        result.innerText = 'please provide valid weight!';
    }
    else{
        const bmi = (weight/((height*height)/10000).toFixed(2)).toFixed(1);
    
        let message;
       
       
        if((weight/((height*height)/10000).toFixed(2)).toFixed(1) < 18.6){
          message = 'You are Underweight!';
        }else if((weight/((height*height)/10000).toFixed(2)).toFixed(1) >= 18.6 && (weight/((height*height)/10000).toFixed(2)).toFixed(1) <= 24.9){
            message = 'You are Normal!!';
        }else{
            message = 'You are Overweight!!!'
        }
        result.style.fontWeight = '400';
        result.innerHTML = `Your BMI is <strong>${bmi}</strong> <br> It indicates <strong>${message}</strong>`;
       
       
    }
}
})