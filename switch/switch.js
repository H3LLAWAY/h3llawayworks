var hello = 'Привет. Эта страница - пример моей работы по смене оформления сайта.'
alert (hello) //Представление 
var cont = 'При нажатии на тумблер - меняется тема страницы с тёмной на светлую, и обратно.'
alert (cont) //Пояснение страницы


function tema(){
document.body.classList.toggle('dark-mode')
}


