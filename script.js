let first_img = document.getElementById("first_img");
let second_img = document.getElementById("second_img");
let third_img = document.getElementById("third_img");
let fourth_img = document.getElementById("fourth_img");

let activeIndex = 0;



first_img.addEventListener("click", formAppears);
second_img.addEventListener("click", viewAppears);
third_img.addEventListener("click", showDice);
fourth_img.addEventListener("click", showToken);


function formAppears() {
    if(activeIndex==0){

   
    document.getElementById("studentForm").style.display = 'block';
    document.getElementById("viewStudent").style.display = 'none';

    let on_Submit = document.getElementById("submit");

    submit.addEventListener("click", function() {
        document.getElementById("studentForm").style.display = 'none';
        activeIndex = 1;
    })
}
else{
    alert("This link is not active");
}

}

function viewAppears() {
  if(activeIndex==1){

    document.getElementById("studentForm").style.display = 'none';
    document.getElementById("viewStudent").style.display = 'block';
    document.getElementById("viewDice").style.display = 'none';
    activeIndex = 2;
}
else{
    alert("This link is not active");
}

}

let btn = document.getElementById("submit");
btn.addEventListener("click", userData);

function userData() {

    document.getElementById("lblName").innerHTML = document.getElementById("input_name").value;
    document.getElementById("lblUsername").innerHTML = document.getElementById("input_username").value;

}

function showDice() {
    if(activeIndex==2){

    document.getElementById("viewDice").style.display = 'block';
    document.getElementById("viewStudent").style.display = 'none';
}
else{
    alert("This link is not active");
}

}

let viewDice = document.getElementById("viewDice");
viewDice.addEventListener("click", rollDice);


let dice_rolled = 0;
let totalSum = 0;
let wrongCount = 0;

function rollDice() {
if(activeIndex==2){

    if(wrongCount >= 2){
        document.getElementById("diceMessage").innerHTML ="Bad Luck";
        return false;
    }

    dice_rolled++;

    let randomNumber = Math.floor(Math.random() * 6) + 1;
    totalSum = totalSum + randomNumber;

    document.getElementById("diceMessage").innerHTML = randomNumber;
    if(dice_rolled == 3) {
       
        if(totalSum > 10) {
            document.getElementById("diceMessage").innerHTML = "Congratulation!!! Your total score is: " + totalSum + " way to fourth image is activated now";
            document.getElementById("couponCode").innerHTML = generateToken();
            activeIndex = 3;
        }
        else {
            wrongCount =wrongCount+1;
            if(wrongCount<2)
            {
                document.getElementById("diceMessage").innerHTML = "Ooopss!!! Your total score is: " + totalSum + " Try again";
            }
            else
            {
                document.getElementById("diceMessage").innerHTML = "Bad Luck";
            }

        }
        totalSum = 0;
        dice_rolled = 0;
    }
}
else{
    alert("Your coupon is already generated");
}
    
     }

     function showToken() {
        if(activeIndex==3){
        document.getElementById("studentForm").style.display = 'none';
        document.getElementById("viewStudent").style.display = 'none';
        document.getElementById("viewDice").style.display = 'none';
        document.getElementById("viewCouponcode").style.display = 'block';
    }
    else{
        alert("This link is not active");
    }
     }

     function generateToken() {
        let capital_digit = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let number = "0123456789"

        let characters = capital_digit + number;

        let token = ""
        for (let i = 0; i < 12; i++) {
            let random = Math.floor(Math.random() * characters.length)
            token = token + characters[random]
        }
        return token;
    }
    