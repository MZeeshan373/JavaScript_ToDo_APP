// update function fetching values from localstorage
function update(){
    var sumid =+ localStorage.getItem('idd');
    var all=JSON.parse(localStorage.getItem("ALL"));    
    var updateObj = all.slice(sumid, sumid + 1);
    
    document.getElementById('title').value = updateObj[0].title;
    document.getElementById('description').value = updateObj[0].description;
    document.getElementById('location').value = updateObj[0].location;
    document.getElementById('date').value = updateObj[0].date;
}
// updating values inlocalstprage
    function updatee(){
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;
    var location = document.getElementById("location").value;
    var date = document.getElementById("date").value;
// absolute div
    var cls = document.getElementById('op');
    cls.classList.add("show2");
    var cls2 = document.getElementById('btn5');
    cls2.style.cursor = "pointer";
    
    if (title == "" || description == "" || location == "" || date == "") {
        document.getElementById("message").innerHTML = "All fields are required";
        return false;
    }
   else{
        document.getElementById("message").innerHTML = "Task Updated Succesfully";
        var sumid = localStorage.getItem('idd');
        var all=JSON.parse(localStorage.getItem("ALL"));
        all[sumid].title=title;
        all[sumid].description=description;
        all[sumid].location=location;
        all[sumid].date=date;
        localStorage.setItem("ALL",JSON.stringify(all));
        return true;
   }
}

// absolute-div
function fun() {
    var cls = document.getElementById('op');
    cls.classList.remove("show2");

}