function det(){
    var sumid = + localStorage.getItem('idd');
    var all=JSON.parse(localStorage.getItem("ALL"));
    document.getElementById('title').innerHTML = all[sumid-2].title;
    document.getElementById('description').innerHTML = all[sumid-2].description;
    document.getElementById('location').innerHTML = all[sumid-2].location;
    document.getElementById('date').innerHTML = all[sumid-2].date;
}

// task done
var str1;
done.onclick = function(){
    
    var sumid = + localStorage.getItem('idd');
    var all=JSON.parse(localStorage.getItem("ALL"));
    var chAllT = JSON.parse(localStorage.getItem('ALLT'));
    if (chAllT === null) {
        var allT = [];
    }
    else {
        var allT = chAllT;
    }
    allT.push(all[sumid-2]);
    all.splice(sumid-2, 1);
    localStorage.setItem("ALLT", JSON.stringify(allT));
    localStorage.setItem("ALL", JSON.stringify(all));
    location.href = "alltodos.html";
}