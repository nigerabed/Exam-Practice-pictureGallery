let pics = document.querySelectorAll(".pics");

for (let i = 0; i < pics.length; i++) {
  pics[i].addEventListener("click", function (event) {
     
    let mainImg = document.getElementById("mainimg");
    mainImg.setAttribute("src", event.target.src);
  });
}