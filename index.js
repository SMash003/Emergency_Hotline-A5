// function to get inner text(int)
function getInnerText(id){
    const element = parseInt(document.getElementById(id).innerText);
    return element;
}

// function to set inner text
function setInnerText(id, value){
    const element = document.getElementById(id);
    element.innerText = value;
}


// heart icon functionality
const hearts = document.getElementsByClassName("heart-icon");

for (let heart of hearts) {
  heart.addEventListener("click", function(e) {
    e.preventDefault();
    const availableHearts = getInnerText("total-hearts");
    const totalHearts = availableHearts + 1;
    setInnerText("total-hearts", totalHearts);
  });
}
