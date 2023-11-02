let cat = document.getElementById("cat");
cat.addEventListener("click", function(event){
   let mainimg = document.getElementById("mainimg");
   mainimg.setAttribute("src", "cat.jpg");
})

let dog = document.getElementById("dog");
dog.addEventListener("click", function (event) {
  let mainimg = document.getElementById("mainimg");
  mainimg.setAttribute("src", "dog.jpg");
});

let bird = document.getElementById("bird");
bird.addEventListener("click", function (event) {
  let mainimg = document.getElementById("mainimg");
  mainimg.setAttribute("src", "bird.jpg");
});