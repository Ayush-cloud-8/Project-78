var images = ["Dad.jpg" , "Mom.jpg" , "Me.png" , "Vihan1.jpg"];
var names = ["Gopal Harle" , "Manisha Harle" , "Ayush Harle" , "Vihan Harle"];
var i = 0;

function update() {
    document.getElementById("image").src = images[i]; 
    document.getElementById("names").innerHTML = names[i];
    i++;

    if (i == 4) {
        i = 0;
    }
}