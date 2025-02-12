const baseURL = "https://fdnd.directus.app/items/person/?filter={%22id%22:214}";
const response = await fetch(baseURL);
const lookForMyData = await response.json();

var jumpMan = document.querySelector('#jump-man');
var textBox = document.querySelector('#text');
var modalF = document.querySelector('#modal-fact');
var modalG = document.querySelector('#modal-goals');
var modalH = document.querySelector('#modal-hobby');

var factTitle = document.querySelector('#fact-title');
var factText = document.querySelector('#fact-text');

factTitle.innerHTML += lookForMyData.data[0].name;
factText.innerHTML = lookForMyData.data[0].bio;

var busy = false;

// source refacter: CSS Teacher Sanne
function FactBox()
{
    if(!busy) {
        busy = true;
        modalG.classList.remove('visable');
        modalH.classList.remove('visable');
        jumpMan.classList.add('factani');
        sleep(1700).then(() => {modalF.classList.add('visable');});
        jumpMan.addEventListener("animationend", () => {
            jumpMan.classList.remove('factani');
            // textBox.innerHTML = "FACTS";
            busy = false;
        })
    }

}

function GoalBox()
{
    // var jumpMan = document.querySelector('#jump-man');
    if(!busy){
        busy = true
        modalF.classList.remove('visable');
        modalH.classList.remove('visable');
        jumpMan.classList.add('goalani');
        sleep(1700).then(() => {modalG.classList.add('visable');});
        jumpMan.addEventListener("animationend", () => {
            jumpMan.classList.remove('goalani');
            // textBox.innerHTML = "Yes, indeed. It is called Lothric, Where the transitory lands of the Lords of Cinder converge. In venturing north, the pilgrims discover the truth of the old words. “The fire fades, and the lords go without thrones.”When the link of fire is threatened, the bell tolls, unearthing the old Lords of Cinder from their graves.Aldrich, Saint of the Deep.Farron’s Undead Legion, The Abyss Watchers. Yes, indeed. It is called Lothric, Where the transitory lands of the Lords of Cinder converge. In venturing north, the pilgrims discover the truth of the old words. “The fire fades, and the lords go without thrones.”When the link of fire is threatened, the bell tolls, unearthing the old Lords of Cinder from their graves.Aldrich, Saint of the Deep.Farron’s Undead Legion, The Abyss Watchers. Yes, indeed. It is called Lothric, Where the transitory lands of the Lords of Cinder converge. In venturing north, the pilgrims discover the truth of the old words. “The fire fades, and the lords go without thrones.”When the link of fire is threatened, the bell tolls, unearthing the old Lords of Cinder from their graves.Aldrich, Saint of the Deep.Farron’s Undead Legion, The Abyss Watchers.";
            busy = false;
        })
    }
}

function ModelBox()
{
    if(!busy) {
        busy = true;
        modalF.classList.remove('visable');
        modalG.classList.remove('visable');
        // var jumpMan = document.querySelector('#jump-man');
        jumpMan.classList.add('modelani');
        sleep(2200).then(() => {modalH.classList.add('visable');});
        jumpMan.addEventListener("animationend", () => {
            jumpMan.classList.remove('modelani');
            // textBox.innerHTML = lookForMyData.data[0].name;
            busy = false;
        })
    }
}

function exitAllPage()
{
    modalF.classList.remove('visable');
    modalG.classList.remove('visable');
    modalH.classList.remove('visable');
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// querySelector naar je button
// addEventListener click op die button
// Call ModelBox
// source refacter: jSon Teacher Krijn

let hobbyEvent = document.getElementById('Hobby');
hobbyEvent.addEventListener('click', ModelBox);

let goalEvent = document.getElementById('goals');
goalEvent.addEventListener('click', GoalBox);

let factEvent = document.getElementById('fact');
factEvent.addEventListener('click', FactBox);

let exitPage = document.getElementsByClassName('exit');
let visablePage = document.getElementsByClassName('visable');
for (let i = 0; i < exitPage.length; i++) 
{
    exitPage[i].addEventListener('click', exitAllPage);
}

console.log(lookForMyData);

console.log(lookForMyData.data[0].name)