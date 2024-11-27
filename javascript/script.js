var searchform = document.getElementById('searchform');
searchform.addEventListener('submit', function(event) {
    event.preventDefault();
    var search = document.getElementById('search').value;
    let searches = JSON.parse(localStorage.getItem('searches')) || [];
    searches.push(search);
    localStorage.setItem('searches', JSON.stringify(searches));
    var ps=document.getElementById('ps')
    ps.innerHTML="you search about: "+search
});
