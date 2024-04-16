const form = document.getElementById("form");

    // L'application s'éxecute dans un navigateur
    const apiUrl = 'http://localhost:3000/livres';

form.addEventListener('click', function(e){
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const editor = document.getElementById('editor').value;
    const description = document.getElementById('description').value;

    const data = { title, author, editor, description};

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

document.getElementById('cameraTakePicture').addEventListener('click', function() {
    navigator.camera.getPicture(onSuccess, onFail, {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        correctOrientation: true
    });
});

function onSuccess(imageUri) {
    var image = document.getElementById('myImage');
    image.src = imageUri;
}

function onFail(message) {
    alert('Failed because: ' + message);
}

document.getElementById("cameraGetPicture").addEventListener("click", function() {
    navigator.camera.getPicture(onSuccessg, onFailg, { quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY
    });
});
     function onSuccessg(imageURL) {
        var image = document.getElementById('myImage');
        image.src = imageURL;
     }
  
     function onFailg(message) {
        alert('Failed because: ' + message);
     }