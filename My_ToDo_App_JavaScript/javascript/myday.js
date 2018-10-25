var btnid = 0;
var divid = 1;
function myday() {

    var counter = 0;
    var all = JSON.parse(localStorage.getItem("ALL"));
    for (var i = 0; i < all.length; i++) {
        var ndate = new Date();
        var dndate = ndate.getDate();
        var mndate = ndate.getMonth();
        var yndate = ndate.getFullYear();

        var newdate = new Date(all[i].date);
        var dnewdate = newdate.getDate();
        var mnewdate = newdate.getMonth();
        var ynewdate = newdate.getFullYear();
        var calcD = dnewdate - dndate;
        var calcM = mnewdate - mndate;
        var calcY = ynewdate - yndate;
        if (calcD == 0 && calcM == 0 && calcY == 0) {
            title = all[i].title;

            // creating new div
            var div = document.createElement('div');
            div.id = divid;

            // creating button div
            var btndiv = document.createElement("div");
            btndiv.classList.add("btnDiv");
            btndiv.id = i + 1;
            btndiv.onclick = detail;
            // adding classes to div
            div.classList.add("teal");
            div.classList.add('style');
            // creating delete button
            var btn = document.createElement("button");
            btn.id = i;
            btn.onclick = del;
            btn.classList.add('btn');
            btn.classList.add('right');
            btn.classList.add('custombutton')
            btn.classList.add('waves-effect');
            btn.classList.add('waves-lighten-2');
            var text = document.createTextNode('Delete');
            btn.appendChild(text);
            // creating update button
            var btn1 = document.createElement("button");
            btn1.id = i;
            btn1.onclick = up;
            btn1.classList.add('btn');
            btn1.classList.add('custombutton')
            btn1.classList.add('right');
            btn1.classList.add('waves-effect');
            btn1.classList.add('waves-lighten-2');
            var text1 = document.createTextNode('Update');
            btn1.appendChild(text1);

            var e = document.getElementById('show').appendChild(div);
            // creating paragraph
            var g = document.createElement("p");
            g.classList.add('paragraph')
            var f = document.createTextNode(title);
            g.appendChild(f);
            btndiv.appendChild(g);
            e.appendChild(btndiv);
            e.appendChild(btn);
            e.appendChild(btn1);
            //e.appendChild(g);
            divid += 1;
            btnid += 1;
            counter++;

        }
    }
    if (counter == 0) {
        var cls = document.getElementById('op');
        cls.classList.add("show2");
        var cls2 = document.getElementById('btn5');
        cls2.style.cursor = "pointer";
        document.getElementById("message").innerHTML = "No Task in MyDay";
    }
}
// absolute-div
function fun() {
    var cls = document.getElementById('op');
    cls.classList.remove("show2");
    location.href = "alltodos.html";

}

// delete button function
function del() {
    var val = document.getElementById(this.id);
    val.parentNode.remove();
    var all = JSON.parse(localStorage.getItem("ALL"));
    all.splice(this.id, 1);
    localStorage.setItem("ALL", JSON.stringify(all));
    window.location.reload();

}
// up function for directing to new page
function up() {
    
    var sum = + this.id;
    localStorage.setItem('idd', sum);
    location.href = "update.html";
}
// detail dunction
function detail() {
    var sum = + this.id;
    localStorage.setItem('idd', sum);
    location.href = "detail.html";
}
