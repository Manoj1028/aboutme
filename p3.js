
    let valNum = 0

    function lengthConverter(){
        valNum=Number(document.getElementById("valNum").value);
        let m=lengthConverter1(valNum);
    }
function lengthConverter1(valNum) {
    temp=parseFloat(valNum)

    let m = temp / 0.0022046;
  document.getElementById('outputMeters').innerHTML = m

  return m;
  
}

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "manoj_info.txt", true);
    xhttp.send();
  }

