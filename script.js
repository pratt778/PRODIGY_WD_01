
let container = document.querySelector('.hamburger-cont');
let navcont = document.querySelector('.navbar-cont');
let header = document.querySelector('.header-cont');
opennav = ()=>{
    container.classList.toggle('active');
    navcont.classList.toggle('active-bar')

}

window.onscroll = function(){
    if(document.body.scrollTop >=50 || document.documentElement.scrollTop >= 50){
        header.classList.add('headcol');
        console.log('scrolled')
    }
    else{
        header.classList.remove('headcol');
    }
}