var scripts = new Array();
scripts[0] = "$10";
scripts[1] = "$20";
scripts[2] = "$50";
scripts[3] = "$75";

for (i=0;i<scripts.length;i++)
{
    
document.write("&emsp;&nbsp;&emsp;"+ scripts[i] + "&emsp;&nbsp;&emsp;");

}

document.write("<br>");document.write("<br>");document.write("<br>");document.write("<br>");

document.write("&emsp;&nbsp;&nbsp;&nbsp;")

document.write("&nbsp;")

var button = document.createElement("button");
button.innerHTML = "Donate";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

document.write("&emsp;&nbsp;&emsp;");

document.write("&emsp;")

button.addEventListener ("click", function() {
  alert("Thank You For your Donation of $10!");
});

var button = document.createElement("button");
button.innerHTML = "Donate";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

document.write("&emsp;&emsp;&emsp;");

button.addEventListener ("click", function() {
  alert("Thank You For your Donation of $20!");
});

var button = document.createElement("button");
button.innerHTML = "Donate";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

document.write("&emsp;&nbsp;&emsp;&emsp;");


button.addEventListener ("click", function() {
  alert("Thank You For your Donation of $50!");
});

var button = document.createElement("button");
button.innerHTML = "Donate";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

document.write("&emsp;&nbsp;&emsp;&emsp;&nbsp;&emsp;");

document.write("&emsp;")

button.addEventListener ("click", function() {
  alert("Thank You For your Donation of $75!");
});
