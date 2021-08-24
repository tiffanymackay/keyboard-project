
        function changeColor() {
            let color = prompt("What color would you like?");
            let keys = document.querySelector("#keys");
            let h2 = document.querySelector("h2");
            color = color.toLowerCase(); // "Pink" "PINK"
    
            keys.style.fill = color;
            
            if (color === "pink" || color === "plum" || color === "purple" || color === "lavender") {
                h2.innerHTML = "😍 That's my favorite color too! ";
            } else {
                h2.innerHTML = "🙃 We like different colors."
            }
        }
            let button = document.querySelector("button");
            button.addEventListener("click", changeColor)
        
        