function button() {
    document.getElementById("fact").innerHTML = "";
    for(let k = 1; k <= 5; k++) {
        submit();
    }
}

function submit() {
    var div = document.createElement("div");
    if (!document.getElementById("input").value) {
        document.getElementById("fact").innerHTML = "Please input a number";
        return;
    }

    var http = new XMLHttpRequest();

    http.open('get', 'http://numbersapi.com/'+document.getElementById("input").value, true);
    http.send();
    
    http.onreadystatechange = function () {
        div.innerHTML = http.responseText;
    }

    document.getElementById("fact").appendChild(div);
}