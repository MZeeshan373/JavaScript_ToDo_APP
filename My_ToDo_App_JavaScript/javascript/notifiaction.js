
function Noti() {
    var counter = 0;
    //     var gettitle = JSON.parse(localStorage.getItem("alltitle"));
    // var getdate = JSON.parse(localStorage.getItem('alldate'));
    // var len = getdate.length;
    var all = JSON.parse(localStorage.getItem("ALL"));
    for (var i = 0; i < all.length; i++) {
        var ndate = new Date();
        var dndate = ndate.getDate();
        var mndate = ndate.getMonth();
        var yndate = ndate.getFullYear();
        ndate.setHours(00);
        ndate.setMinutes(00);
        ndate.setSeconds(00)
        ndate.setMilliseconds(00);
        var msndate = ndate.getTime();
        var newdate = new Date(all[i].date);
        var dnewdate = newdate.getDate();
        var mnewdate = newdate.getMonth();
        var ynewdate = newdate.getFullYear();

        newdate.setHours(00);
        newdate.setMinutes(00);
        newdate.setSeconds(00)
        newdate.setMilliseconds(00);
        var n = newdate.getHours();

        var msnewdate = newdate.getTime();

        var calcD = dnewdate - dndate;
        var calcM = mnewdate - mndate;
        var calcY = ynewdate - yndate;
        var calcMS = msnewdate - msndate;

        var msToDays = calcMS / (1000 * 60 * 60 * 24);
        if (calcD < 7 && calcM == 0 && calcY == 0) {
            if (calcD == 6 && calcM == 0 && calcY == 0) {


                // // creating new div
                var div = document.createElement('div');

                // adding classes to div
                div.classList.add("teal");
                div.classList.add('stylee');
               
                var e = document.getElementById('show').appendChild(div);
                // creating paragraph
                var g = document.createElement("p");
                g.classList.add('paragraph')
                var f = document.createTextNode("7 Days Remaining in  " + " '" + all[i].title + "'" + " Task");

                g.appendChild(f);
                e.appendChild(g);
                counter++;
            }
            else if (calcD == 0 && calcM == 0 && calcY == 0) {

                // // creating new div
                var div = document.createElement('div');
                // div.id = divid;

                // adding classes to div
                div.classList.add("teal");
                div.classList.add('stylee');


                var e = document.getElementById('show').appendChild(div);
                // creating paragraph
                var g = document.createElement("p");
                g.classList.add('paragraph')
                var f = document.createTextNode("Today is the Due Date of  " + " '" + all[i].title + "'" + " Task");

                g.appendChild(f);
                e.appendChild(g);
                counter++;
            }

        }

    }
    if (counter == 0) {
        var cls = document.getElementById('op');
        cls.classList.add("show2");
        var cls2 = document.getElementById('btn5');
        cls2.style.cursor = "pointer";
        document.getElementById("message").innerHTML = "No New Notification";
    }
}
// absolute-div
function fun() {
    var cls = document.getElementById('op');
    cls.classList.remove("show2");
    location.href = "alltodos.html";

}