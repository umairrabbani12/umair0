let userInput = document.getElementById("user");
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");

function calculateAge(){
    let birthDate = new Date(userInput.value);

    let D1 = birthDate.getDate();
    let M1 = birthDate.getMonth() + 1;
    let Y1 = birthDate.getFullYear();

    let today = new Date();

    let D2 = today.getDate();
    let M2 = today.getMonth() + 1;
    let Y2 = today.getFullYear();

    let D3,M3,Y3;

    Y3 = Y2 - Y1;

    if (M2 >= M1) {
        M3 = M2 - M1;
    }
    else{
        Y3--;
        M3 = 12 + M2 - M1;
    }
    if (D2 >= D1) {
        D3 = D2 - D1;
    }
    else{
        M3--;
        D3 = getDayInMonth(Y1 , M1) + D2 - D1;
    }
    if (M3 < 0) {
        M3 = 11;
        Y3--;
    }
    result.innerHTML = `You are ${Y3}  Year, ${M3} month and ${D3} days`;
}
function getDayInMonth(year, month) {
    return new Date(year, month, 0).getDate();    
}