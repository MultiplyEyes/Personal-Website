const baseURL = "https://fdnd.directus.app/items/person/?filter={%22id%22:214}";
const response = await fetch(baseURL);
const lookForMyData = await response.json();

function FactBox()
{
    var jumpMan = document.querySelector('#jump-man');
    jumpMan.classList.add('factani');
    sleep(3000).then(() => { jumpMan.classList.remove('factani');});
    var textBox = document.querySelector('#text');
    sleep(2000).then(() => { textBox.innerHTML = "FACTS";});
}

function GoalBox()
{
    var jumpMan = document.querySelector('#jump-man');
    jumpMan.classList.add('goalani');
    sleep(3000).then(() => { jumpMan.classList.remove('goalani');});
    var textBox = document.querySelector('#text');
    sleep(2000).then(() => { textBox.innerHTML = "GOAL";});
}

function ModelBox()
{
    var jumpMan = document.querySelector('#jump-man');
    jumpMan.classList.add('modelani');
    sleep(4000).then(() => { jumpMan.classList.remove('modelani');});
    var textBox = document.querySelector('#text');
    sleep(2500).then(() => { textBox.innerHTML = lookForMyData.data[0].name;});
}

// source : https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(ms) 
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

// querySelector naar je button
// addEventListener click op die button
// Call ModelBox
// source : jSon Teacher

let hobbyEvent = document.getElementById('Hobby');
hobbyEvent.addEventListener('click', ModelBox);

let goalEvent = document.getElementById('goals');
goalEvent.addEventListener('click', GoalBox);

let factEvent = document.getElementById('fact');
factEvent.addEventListener('click', FactBox);

console.log(lookForMyData);

console.log(lookForMyData.data[0].name)