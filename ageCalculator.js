const section = document.querySelector('section')
section.setAttribute('style','width:85vh; border:1px solid black ; box-shadow: 1px 1px 8px 2px grey; height:45vh;text-align:center;margin:auto;margin-top:70px;font-family: \'Josefin Sans\', sans-serif;')

document.getElementsByTagName('h1')[0].setAttribute('style','font-size:30px;color:red')
document.getElementsByTagName('div')[0].setAttribute('style','text-align:center')

const send = document.getElementsByTagName('input')[1]
send.setAttribute('style','margin:20px 115px;height:35px;width:150px;background-color:pink;border:1px solid pink;color:black;border-radius:7px')

const inputField = document.querySelector('input')
inputField.setAttribute('style','width:50ch;height:4vh')

const result = document.createElement('span');
result.setAttribute('style','font-size:28px; font-weight:bold;color:blue')
section.appendChild(result)
result.innerHTML = "Your age is __ years Old"

function ageCalculater(e){
    const year = inputField.value;
    let NumberYear = "";
    for(let i=0;i<4;i++){
        NumberYear += year[i]
    }
    const currentDate = new Date();
    currentDate.setFullYear(2023)
    const age = (currentDate.getFullYear()) - (+NumberYear);
    if(age >= -1){
        result.innerHTML = `Your age is ${age} years Old`
    }else if(age < -1){
        // return
        result.innerHTML = `Your age is -1 years Old`
    }else{
        alert("Enter your Date Of Birth")
    }
    e.preventDefault();
}
send.addEventListener('click',ageCalculater)