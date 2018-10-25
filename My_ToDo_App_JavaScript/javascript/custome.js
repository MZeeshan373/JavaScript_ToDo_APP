const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});
// pages directd
create.onclick = function(){
    location.href = "index.html";
}
all.onclick = function(){
    location.href = "alltodos.html";
}
day.onclick = function(){
    location.href = "myday.html";
};