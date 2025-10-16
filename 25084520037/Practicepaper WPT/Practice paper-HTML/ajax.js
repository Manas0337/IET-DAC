function loadData() {
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function () {
        const posts = JSON.parse(this.responseText);
        const table = document.getElementById("myTable");

        posts.forEach(post => {
            const row = table.insertRow();
            row.insertCell(0).innerHTML = post.id;
            row.insertCell(1).innerHTML = post.title;
        });
    };


    xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    xhttp.send();
}