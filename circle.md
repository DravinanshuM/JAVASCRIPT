# project where we clicked one circle created.

# source code of JS.

```Javascript
console.log("Hello word");

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
```

# source code of CSS.
```CSS
* {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
}

 .circle {
     width: 50px;
     height: 50px;
     background-color: #3498db;
     border-radius: 50%;
     position: absolute; /* Position the circle absolutely within the body */
     pointer-events: none; /* Allows click events to pass through the circles */
 }
```

# source code of HTML.
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Document</title>
     <link rel="stylesheet" href="./CSS/style.css">
</head>
<body>
     <script src="./JS/script.js"></script>
</body>
</html>
```