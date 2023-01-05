//code using querySelctor 

// var item = document.querySelector('.list-group-item')

// item.style.color = 'red'
//make 2nd item background green


// var secondItem = document.querySelector('.list-group-item:nth-child(2)')

// secondItem.style.backgroundColor = 'green'

// make 3rd item invisible

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)')

// thirdItem.style.display = 'none'


//code using querySelectorAll 


//Change the font color green

var sdItem = document.querySelectorAll('li.list-group-item')

sdItem[1].style.color = 'green'

//change the odd element background green

var odd = document.querySelectorAll('li:nth-child(odd)')

for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor = 'green'
}