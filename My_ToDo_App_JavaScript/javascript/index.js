function Cobj(title, description, location, date) {
    this.title = title;
    this.description = description;
    this.location = location;
    this.date = date;
}
chC = JSON.parse(localStorage.getItem("objCounter"));
var chAll = JSON.parse(localStorage.getItem('ALL'));
if (chAll === null) {
    var all = [];
}
else {
    var all = chAll;
}
if (chC === null) {
    var objCounter = 1;
    localStorage.setItem("objCounter", objCounter);
}
else {
    objCounter = chC;
}

var str1;



function check() {
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;
    var location = document.getElementById("location").value;
    var date = document.getElementById("date").value;
    //  absolute div
    var cls = document.getElementById('op');
    cls.classList.add("show2");
    var cls2 = document.getElementById('btn5');
    cls2.style.cursor = "pointer";

    if (title == "" || description == "" || location == "" || date == "") {

        document.getElementById("message").innerHTML = "All fields are required";
        return false;
    }
    else {
        var str = "obj" + objCounter + "= new Cobj(title,description,location,date)";
        eval(str);
        str1 = "obj" + objCounter;
        all.push(eval(str1));
        localStorage.setItem('ALL', JSON.stringify(all));
        objCounter = objCounter + 1;
        localStorage.setItem("objCounter", JSON.stringify(objCounter));
        return true;
    }

}


// absolute-div
function fun() {
    var cls = document.getElementById('op');
    cls.classList.remove("show2");

}
