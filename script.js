document.addEventListener("DOMContentLoaded", function(event){
    let darkModeButton = document.querySelector(".dark_mode_btn");
    let body = document.querySelector("body");
    let display = document.querySelector(".display");
    let result = document.querySelector('#result');
    let normalButton = document.querySelectorAll("#Normal_btn");
    let deleteSingleNum  = document.querySelector("#delete_single_num");
    let equalTo = document.querySelector("#equalTo");
    let history = document.querySelector("#history");
    let clear = document.querySelector("#clear");
    /* Dark mode*/
    let darkModeStatus = false;
    darkModeButton.addEventListener('click', function(event){
        body.classList.toggle('dark_mode_active');
        if (darkModeStatus == false) {
            this.innerHTML = '<i class="fa fa-sun-o" aria-hidden="true"></i>';
            darkModeStatus = true;
        }else{
            this.innerHTML = '<i class="fa fa-moon-o" aria-hidden="true"></i>';
            darkModeStatus = false;
        }
    });

    /* writing your calculation */
    let initialValue = "";
    normalButton.forEach((normalButton, index)=>{
        normalButton.addEventListener('click', function(){
            let text = this.innerHTML;
            initialValue = initialValue + text;
            result.innerHTML = initialValue;
        });
    });   

    
});