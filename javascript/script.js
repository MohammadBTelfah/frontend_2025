var searchform = document.getElementById('searchform');
searchform.addEventListener('submit', function(event) {
    event.preventDefault();
    var search = document.getElementById('search').value;
    console.log(search);
    localStorage.setItem('search',search)
    var ps=document.getElementById('ps')
    ps.innerHTML="you search about.."+localStorage.getItem('search')
});
