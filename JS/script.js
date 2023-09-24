window.addEventListener('click', function (e) {
     //for remove circle.
     let removeCircle = document.querySelectorAll(".circle");
     for (let circle of removeCircle) {
          document.body.removeChild(circle);
     }

     console.log(e);
     console.log(e.clientX);
     console.log(e.clientY);

     let div = document.createElement("div");
     div.classList.add("circle");
     div.style.left = e.clientX + "px"; // + "px" add last is syntax and very necessary.
     div.style.top = e.clientY + "px"; // + "px" add last is syntax and very necessary.
     document.body.appendChild(div);
}, false);


