//const { create } = require("browser-sync");
window.addEventListener('DOMContentLoaded', function() {
//hamburger menu activation classes
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElem = document.querySelector('.menu__close');
const olerlay = document.querySelector('.menu__overlay');


hamburger.addEventListener('click',() => {
    menu.classList.add('active')
    hamburger.classList.add('hamburger_active');
    olerlay.classList.add('menu__overlay_active');
        document.body.style.overflow = "hidden";


});
closeElem.addEventListener('click',() => {
    menu.classList.remove('active')
    hamburger.classList.remove('hamburger_active');
    olerlay.classList.remove('menu__overlay_active');
        document.body.style.overflow = "";

});
//log in  
const logIn = document.querySelector('.login');
const formLogin = document.querySelector('.form__login');
const closeElemLog = document.querySelector('.menu__close_login');

logIn.addEventListener('click', ()=>{
    formLogin.classList.add('form__login_active');
    olerlay.classList.add('menu__overlay_active');
        document.body.style.overflow = "hidden";

});
closeElemLog.addEventListener('click',() => {
    formLogin.classList.remove('form__login_active');
    olerlay.classList.remove('menu__overlay_active');
        document.body.style.overflow = "";

});
//sign in
const sign = document.querySelector('.sign');
const formSign = document.querySelector('.form__sign');
const closeElemSign = document.querySelector('.menu__close_sign');

sign.addEventListener('click', ()=>{
    formSign.classList.add('form__sign_active');
    olerlay.classList.add('menu__overlay_active');
        document.body.style.overflow = "hidden";

});
closeElemSign.addEventListener('click',() => {
    formSign.classList.remove('form__sign_active');
    olerlay.classList.remove('menu__overlay_active');
        document.body.style.overflow = "";

});


//dynamic js create food elements (without test, simple rel)
const foodItem = document.querySelector('.food__items');
console.log(foodItem);


background = ['../../img/spagetti.png','../../img/indian.png','../../img/franch.png','../../img/steak.png','../../img/seafood.png','../../img/sushi.png','../../img/mexicano.png','../../img/chines.png','../../img/pizza.png','../../img/american.png'];
span = ['327 Recipes','856 Recipes','27 Recipes','174 Recipes','731 Recipes','237 Recipes','145 Recipes','529 Recipes','327 Recipes','1.437 Recipes'];
linkText =['ITALIAN','INDIAN','FRENCH','STEAKHOUSE','SEAFOOD','SUSHI','MEXICAN','CHINESE','PIZZA','AMERICAN'];

for (let i=0; i<=9; i++) {
    let div = document.createElement('div');
        div.classList.add('food__item');
        div.style.backgroundImage = `url(${background[i]})`;
        div.innerHTML = ` <span>${span[i]}</span>                
        <a href="#">${linkText[i]}</a>`,
        foodItem.append(div) 
    
};


//counter

let counters = document.querySelectorAll('.counter__span');


function timer(num, coun) {
    let n = 0;
    let step = parseFloat(coun.getAttribute('data-max'));
    let interval = setInterval(() => {
        n = n + step;
        if (n == num ) {
            coun.innerText = coun.getAttribute('data-max');
            console.log(step)
        }
        coun.innerHTML = n;
        setTimeout(() => {
            clearInterval(interval); 
            coun.innerText = coun.getAttribute('data-max');
                    }, step);
        });  
       
 };    
    
 

//scroll eventlistener
    //window+document+footer.height and scroll heigtht

function showByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight + 100 >= document.documentElement.scrollHeight) {counters.forEach(item => timer(parseFloat(item.getAttribute('data-max')), item ));

    }
}
window.addEventListener('scroll', showByScroll);
console.log(window.pageYOffset);
//console.log(document.documentElement.clientHeight);
console.log(document.documentElement.scrollHeight);

});
