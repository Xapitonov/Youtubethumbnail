ytLink.addEventListener("input", function (e) {
    getURL();
});

function getURL() {
    var url = document.getElementById('ytLink').value;

    if (url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)) {

        var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var videoID = url.match(regExp);

        if (videoID && videoID[2].length == 11) {

            let endMax = "https://i3.ytimg.com/vi/" + videoID[2] + "/maxresdefault.jpg"
            let endHQ = "https://i3.ytimg.com/vi/" + videoID[2] + "/hqdefault.jpg"

            var thumbDiv = document.getElementById("thumbnails");
            thumbDiv.innerHTML = "";

            UrlExists(endMax)
            UrlExists(endHQ)

        }

    } else {

        alert('Insert Youtube link')

    }
}

function UrlExists(url) {

    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();

    if (http.status != 404) {

        var img = document.createElement('img');
        img.src = url;
        document.getElementById('thumbnails').appendChild(img);


    } else {

    }
}

function showHelp(){

    alert("Just paste the youtube link on the input box")


}