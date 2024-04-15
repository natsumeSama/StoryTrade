const form = document.getElementById("livreform");
//192.168.1.70
let apiUrl;
if (document.URL.startsWith('file://')) {
    // L'application s'exécute dans Cordova
    apiUrl = 'http://192.168.1.70:5500/livres';
} else {
    // L'application s'éxecute dans un navigateur
    apiUrl = 'http://localhost:5500/livres';
}
form.addEventListener('submit', function(e){
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const editor = document.getElementById('editor').value;
    const description = document.getElementById('description').value;

    const data = { title, author, editor, description };

    fetch(apiUrl,{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
});