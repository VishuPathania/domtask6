//Using QuerySelectorALL change the font color to green for 2nd item in the item list
//Choose all the odd elements and make their background green using QuerySelectorALL﻿
//Make the 2nd item have green background color

var odd= document.querySelectorAll('li:nth-child(odd)');
for (var i=0; i< odd.length ;i++) {
    odd[i].style.background = 'green';
}
console.log(odd.length);

var second= document.querySelector('.list-group-item:nth-child(2)');
second.style.background = 'green' ;

//Make the 3rd item invisible
var third= document.querySelectorAll('li:nth-child(3)');
third[0].style.display='none';