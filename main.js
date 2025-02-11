function FactBox()
{
    //document.getElementById("jump-man").id = "jump-man-fact";
    var jumpMan = document.querySelector('#jump-man');
    jumpMan.classList.add('animeermij');
    sleep(3000).then(() => { jumpMan.classList.remove('animeermij');});
    var textBox = document.querySelector('#text');
    sleep(2000).then(() => { textBox.innerHTML = "dasda";});
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }