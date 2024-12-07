ytLink.addEventListener("input", function (e) {
 if(e.target.value.length < 8) return;
  getURL();
});

function getURL() {
  var url = document.getElementById("ytLink").value;

  if (
    url.match(
      /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
    )
  ) {
    var regExp =
      /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var videoID = url.match(regExp);

    if (videoID && videoID[2].length == 11) {
      let endMax =
        "https://i3.ytimg.com/vi/" + videoID[2] + "/maxresdefault.jpg";
      let endHQ = "https://i3.ytimg.com/vi/" + videoID[2] + "/hqdefault.jpg";

      var thumbDiv = document.getElementById("thumbnails");
      thumbDiv.innerHTML = "";

      crateImage(endMax);
      crateImage(endHQ);
    }
  } else {
    var thumbDiv = document.getElementById("thumbnails");
    thumbDiv.innerHTML = "Ссылка недействительна";
    thumbDiv.className = "text-red-500 text-center";
  }
}

function crateImage(url) {
  var img = document.createElement("img");
  img.className = "pb-5";
  img.src = url;
  document.getElementById("thumbnails").appendChild(img);
}
