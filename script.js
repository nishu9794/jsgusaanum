let nam = document.getElementById('h');
let random = Math.floor(Math.random()*21);
document.getElementById('a').innerHTML = random + 1;
document.getElementById('b').innerHTML = random - 9;
let j = Math.floor(Math.random()*2)
if(j == 0){
document.getElementById('c').innerText = random;
}else{document.getElementById('c').innerText = random + 3}
document.getElementById('d').innerHTML = random + 2;
document.getElementById('e').innerHTML = random + 3;
const myfun = () =>{
let t = prompt("Enter your choise")

}
  setTimeout(myfun,8000)
if (t.value == random.value){
    document.getElementsByTagName('h1').innerText = 12;
}
else{document.getElementsByName('h1').innerText = nam;}