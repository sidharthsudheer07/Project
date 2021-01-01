var scripts = new Array();
scripts[0] = "$100";
scripts[1] = "$200";
scripts[2] = "$400";
scripts[3] = "$500";

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

document.write("&emsp;&nbsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");

document.write("&emsp;")

button.addEventListener ("click", function() {
  alert("Thank You For your Donation of $100!");
});

var button = document.createElement("button");
button.innerHTML = "Donate";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

document.write("&emsp;&emsp;&emsp;&nbsp;");

button.addEventListener ("click", function() {
  alert("Thank You For your Donation of $200!");
});

var button = document.createElement("button");
button.innerHTML = "Donate";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

document.write("&emsp;&nbsp;&emsp;&emsp;&nbsp;");


button.addEventListener ("click", function() {
  alert("Thank You For your Donation of $400!");
});

var button = document.createElement("button");
button.innerHTML = "Donate";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

document.write("&emsp;&nbsp;&emsp;&emsp;&nbsp;&emsp;");

document.write("&emsp;")

button.addEventListener ("click", function() {
  alert("Thank You For your Donation of $500!");
});
