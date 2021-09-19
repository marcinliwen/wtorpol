'use strict';

window.addEventListener("load", function(){
    console.log('load')
    document.querySelector(".mobile-menu-btn").addEventListener('click', function(){
        console.log('opens')
        this.classList.toggle('open');
        document.body.classList.toggle('is-open');
        document.querySelector('#menu').classList.toggle('open');
    })

    var menuLinks = document.querySelectorAll('.header-nav nav ul li a');

    menuLinks.forEach(function(item){
        item.addEventListener('click', function(){
            document.querySelector(".mobile-menu-btn").classList.toggle('open');
            document.body.classList.toggle('is-open');
            document.querySelector('#menu').classList.toggle('open');
        })
    })
})