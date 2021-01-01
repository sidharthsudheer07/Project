var scripts = new Array();
scripts[0] = "$750";
scripts[1] = "$800";
scripts[2] = "$900";
scripts[3] = "$1000";

for (i=0;i<scripts.length;i++)
{
    
document.write("&emsp;&nbsp;&emsp;"+ scripts[i] + "&emsp;&nbsp;&emsp;");

}

document.write("<br>");document.write("<br>");document.write("<br>");document.write("<br>");

document.write("&emsp;&nbsp;&nbsp;&nbsp;&nbsp;")

document.write("&nbsp;")

var button = document.createElement("button");
button.innerHTML = "Donate";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

document.write("&emsp;&nbsp;&emsp;&nbsp;&nbsp;");

document.write("&emsp;")

button.addEventListener ("click", function() {
  alert("Thank You For your Donation of $750!");
});

var button = document.createElement("button");
button.innerHTML = "Donate";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

document.write("&emsp;&emsp;&emsp;");

button.addEventListener ("click", function() {
  alert("Thank You For your Donation of $800!");
});

var button = document.createElement("button");
button.innerHTML = "Donate";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

document.write("&emsp;&nbsp;&emsp;&emsp;");


button.addEventListener ("click", function() {
  alert("Thank You For your Donation of $900!");
});

var button = document.createElement("button");
button.innerHTML = "Donate";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

document.write("&emsp;&nbsp;&emsp;&emsp;&nbsp;&emsp;");

document.write("&emsp;")

button.addEventListener ("click", function() {
  alert("Thank You For your Donation of $1000!");
});
