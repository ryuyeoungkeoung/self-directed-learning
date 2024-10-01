document.getElementById("input_box").addEventListener("click", function () {
  const myDiv = document.getElementsByClassName("myDiv");
  if (myDiv.style.display === "none") {
    myDiv.style.display = "block";
  } else {
    myDiv.style.display = "none";
  }
});
