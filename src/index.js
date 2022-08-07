/*global document */
   document.addEventListener('DOMContentLoaded',()=>{

 const cardArray =[
    {
        name :'fries',
        img  :'src/images/fries.png'
    },
    {
        name :'cheeseburger',
        img :'src/images/cheeseburger.png'
    },
    {
        name:'ice-cream',
        img :'src/images/ice-cream.png'

    },
    {
        name:'pizza',
        img :'src/images/pizza.png'
    },
    {
        name:'milkshake',
        img :'src/images/milkshake.png'
    },
    {
        name :'hotdog',
        img : 'src/images/hotdog.png'
    },

    {
        name :'fries',
        img  :'src/images/fries.png'
    },
    {
        name :'cheeseburger',
        img :'src/images/cheeseburger.png'
    },
    {
        name:'ice-cream',
        img :'src/images/ice-cream.png'

    },
    {
        name:'pizza',
        img :'src/images/pizza.png'
    },
    {
        name:'milkshake',
        img :'src/images/milkshake.png'
    },
    {
        name :'hotdog',
        img : 'src/images/hotdog.png'
    }


]

cardArray.sort(() =>0.5- Math.random())
console.log(cardArray)

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')

let cardsChosen =[]
let cardChosenIds=[]
let cardsWon =[]

function createBoard(){
    
    for(let i=0;i<cardArray.length;i++)
    {
        const card =document.createElement('img')
        card.setAttribute('src','src/images/blank.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipCard)
        grid.appendChild(card)
    }
}



function flipCard(){
   const cardId = this.getAttribute('data-id')
   //console.log(cardsArray[cardId])
   cardsChosen.push(cardArray[cardId].name)
   //console.log(cardsChosen)

   cardChosenIds.push(cardId)
   this.setAttribute('src',cardArray[cardId].img)
   if(cardsChosen.length === 2)
   {
    setTimeout( checkForMatch , 500)
   }
   console.log(cardChosenIds)
}
function checkForMatch(){
const cards =document.querySelectorAll('img')
const optionOneId = cardChosenIds[0]
const optionTwoId = cardChosenIds[1] 

    if(optionOneId== optionTwoId)
    {
        alert('You clicked the same Image!')
        cards[optionOneId].setAttribute('src','src/images/blank.png')
        cards[optionTwoId].setAttribute('src','src/images/blank.png')
    }else if(cardsChosen[0]=== cardsChosen[1]){
        alert('You have found a match')
        cards[optionOneId].setAttribute('src','src/images/white.png')
        cards[optionTwoId].setAttribute('src','src/images/white.png')

        cards[optionOneId].removeEventListener('click',flipCard)
        cards[optionTwoId].setAttribute('click',flipCard)

        cardsWon.push(cardsChosen)
    }else{
        cards[optionOneId].setAttribute('src','src/images/blank.png')
        cards[optionTwoId].setAttribute('src','src/images/blank.png')
        alert('Sorry We Ain\'t same Bro' )

    }

    cardsChosen=[]
    cardChosenIds=[]
    resultDisplay.textContent =cardsWon.length
    if(cardsWon.length === cardArray.length /2)
    {
        resultDisplay.textContent ='Congratulations ! You Won'
    }

    console.log(cardsChosen)
    console.log(cardsWon)

}

createBoard()

})