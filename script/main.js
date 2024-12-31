const calculate = () => {
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector(".clear");
    let equal = document.querySelector(".equal");
    let screen = document.querySelector(".screen");

    buttons.forEach((button)=>{
        button.addEventListener("click",(e)=>{
            value = e.target.dataset.num;
            screen.value += value;
        });
    });
    equal.addEventListener("click",(e)=>{
         screen.value = eval(screen.value);
    });
    clear.addEventListener("click",(e)=>{
        screen.value = "";
    });
}

calculate();