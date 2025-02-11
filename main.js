const baseURL = "https://fdnd.directus.app/items/person/?filter={%22id%22:214}";
const response = await fetch(baseURL);
const lookForMyData = await response.json();
var jumpMan = document.querySelector('#jump-man');
var textBox = document.querySelector('#text');

var busy = false;

// source : CSS Teacher Sanne
function FactBox()
{
    if(!busy) {
        busy = true;
        jumpMan.classList.add('factani');
        jumpMan.addEventListener("animationend", () => {
            jumpMan.classList.remove('factani');
            textBox.innerHTML = "FACTS";
            busy = false;
        })
    }

}

function GoalBox()
{
    // var jumpMan = document.querySelector('#jump-man');
    if(!busy){
        busy = true
        jumpMan.classList.add('goalani');
        jumpMan.addEventListener("animationend", () => {
            jumpMan.classList.remove('goalani');
            textBox.innerHTML = "Yes, indeed. It is called Lothric, Where the transitory lands of the Lords of Cinder converge. In venturing north, the pilgrims discover the truth of the old words. “The fire fades, and the lords go without thrones.”When the link of fire is threatened, the bell tolls, unearthing the old Lords of Cinder from their graves.Aldrich, Saint of the Deep.Farron’s Undead Legion, The Abyss Watchers. Yes, indeed. It is called Lothric, Where the transitory lands of the Lords of Cinder converge. In venturing north, the pilgrims discover the truth of the old words. “The fire fades, and the lords go without thrones.”When the link of fire is threatened, the bell tolls, unearthing the old Lords of Cinder from their graves.Aldrich, Saint of the Deep.Farron’s Undead Legion, The Abyss Watchers. Yes, indeed. It is called Lothric, Where the transitory lands of the Lords of Cinder converge. In venturing north, the pilgrims discover the truth of the old words. “The fire fades, and the lords go without thrones.”When the link of fire is threatened, the bell tolls, unearthing the old Lords of Cinder from their graves.Aldrich, Saint of the Deep.Farron’s Undead Legion, The Abyss Watchers.";
            busy = false;
        })
    }
}

function ModelBox()
{
    if(!busy) {
        busy = true;
        // var jumpMan = document.querySelector('#jump-man');
        jumpMan.classList.add('modelani');

        jumpMan.addEventListener("animationend", () => {
            jumpMan.classList.remove('modelani');
            textBox.innerHTML = lookForMyData.data[0].name;
            busy = false;
        })
    }
}

// querySelector naar je button
// addEventListener click op die button
// Call ModelBox
// source : jSon Teacher Krijn

let hobbyEvent = document.getElementById('Hobby');
hobbyEvent.addEventListener('click', ModelBox);

let goalEvent = document.getElementById('goals');
goalEvent.addEventListener('click', GoalBox);

let factEvent = document.getElementById('fact');
factEvent.addEventListener('click', FactBox);

console.log(lookForMyData);

console.log(lookForMyData.data[0].name)