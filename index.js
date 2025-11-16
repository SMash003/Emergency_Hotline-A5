const callingHistory = [];

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
const callingHis = document.getElementById("calling-history");
callingHis.innerText = ""

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
      alert("Calling...\n" + serviceName +"\n"+ serviceNum);
      const totalCoins = availableCoins - 20;
      setInnerText("total-coins", totalCoins);

      const data = {
        serName: serviceName,
        serNum: serviceNum,
        time: new Date().toLocaleTimeString()
      }

      callingHistory.push(data);

      const div = document.createElement("div")
      div.innerHTML = 
      `
        <div class="flex items-center justify-between bg-[#FAFAFA] p-4  rounded-lg mt-4">
          <div>
              <p class="text-lg font-normal">${data.serName}</p>
              <p class="text-[#5C5C5C]">${data.serNum}</p>
          </div>
          <div>
              <p class="text-lg font-normal">${data.time}</p>
          </div>
        </div>
      `

      callingHis.appendChild(div);
    }
  });
}

// "Clear" button functionality
document.getElementById("clear-btn").addEventListener("click", function(e)
{
  e.preventDefault();
  callingHistory.length = 0;  
  document.getElementById("calling-history").innerHTML = "";
})

// Copy button functionality
const copyBtns = document.getElementsByClassName("copy-btn");

for(let copyBtn of copyBtns){
  copyBtn.addEventListener("click", function(e){
    e.preventDefault();
    alert("Number copied to clipboard.")

    let card = copyBtn.closest(".card");
    let number = card.querySelector(".service-num").innerText;
    navigator.clipboard.writeText(number);
  })
}