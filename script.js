var fileInput = document.querySelector(".URL-input");
var downloadButton = document.querySelector(".convert-button");

downloadButton.addEventListener("click", function() {
  console.log(`URL: ${fileInput.value}`);
  sendURL(fileInput.value)
});

function sendURL(URL){
    window.location.href=`http://localhost:4000/download?URL=${URL}`;
}