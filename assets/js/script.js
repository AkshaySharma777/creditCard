function applyColor(){
   let inputColor1 = document.querySelector('#inputColor1');
   let creditCard = document.querySelector('.creditCard');
   creditCard.style.backgroundColor= inputColor1.value;
}

fetch(`assets/banks.json`)
.then(response => response.json())
.then(output => {
    console.log(output);
    printData(output);
})
.catch(error => {console.log(error)});

function printData(data){
  console.log(data);
  let select = document.createElement("select");
  let option = document.createElement("option");
}