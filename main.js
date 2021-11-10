
function myFunction() {

  var number = prompt("Introdueix un nombre");

          if (number != null && !(isNaN(number)) ) {

      for(var i = 0; i <= 10; i++) {


          const li = document.createElement('li');
          const text = document.createTextNode(Math.abs(number) + "x" + i + ": " + (Math.abs(number) * i) + " ");
          var a= li.appendChild(text);
          document.getElementById("list").appendChild(li)
          console.log(a)
        
      } 
}
       
  }


function MyFunc2() {

var input1 = prompt("Introdueix el nombre de columnes");
var input2 = prompt("Introdueix el nombre de files");

const body = document.body,
tbl = document.createElement('table');
tbl.style.width = '100px';
tbl.style.border = '1px solid black';

for (let i = 0; i < input2; i++) {
  const tr = tbl.insertRow();
  for (let j = 0; j < input1; j++) {
      const td = tr.insertCell();
      td.appendChild(document.createTextNode( (Math.floor(Math.random()*100)) ));
      td.style.border = '1px solid black';
  }
}
body.appendChild(tbl);


}


var denominations = [500, 200, 100, 50, 20, 10, 5]

var total;

function makeChange() {

  total = prompt("Introdueix el total");

  var piles = new Array(denominations.length).fill(0)
  var step = 0;

  while (total > 0 && step < denominations.length) {
    var denomination = denominations[step]
    var needed = Math.min(Math.floor(total / denomination), 10)
    total -= denomination * needed
    piles[step] = needed
    step++


    for(var i = 0; i <= 6; i++) {

      document.getElementsByTagName("h2")[i].innerHTML =  piles[i] + "x de " + denominations[i] + "(euros)";

  }

    
  }

  if (total > 0) {
    console.error("Still have money left:", total)
  }


  return piles


}





