let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if(document.getElementById("Hi").value =="undefined"){
            string="";
            document.querySelector("input").value = string;
        }
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector("input").value = string;
        } else if (e.target.innerHTML == "CLR") {
            string = "";
            document.querySelector("input").value = string;
        }
        else {
            console.log(e.target);
            string += e.target.innerHTML;
            document.querySelector("input").value = string;
        }
    });
});


change = () => {
    x = document.getElementById("drk");
}
