// funcion to get innet Text


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

// call button functionality
const callBtns = document.getElementsByClassName("call-btn");

for(let callBtn of callBtns){
  callBtn.addEventListener("click", function(e){
    e.preventDefault();
    const card = callBtn.closest(".card");
    const serviceName = card.querySelector(".service-name").innerText;
    const serviceNum = card.querySelector(".service-num").innerText;

    const availableCoins = getInnerText("total-coins");
    if(availableCoins < 20){
      alert("Insufficient coin!")
    }
    else
    {
      console.log(serviceName)
      alert("Calling...\n" + serviceName +"\n"+ serviceNum);
      const totalCoins = availableCoins - 20;
      setInnerText("total-coins", totalCoins);
    }
  });
}