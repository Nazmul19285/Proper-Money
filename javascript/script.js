function calculate(){
    let income = document.getElementById("income");
    let food = document.getElementById("food");
    let rent = document.getElementById("rent");
    let clothes = document.getElementById("clothes");
    let incomeAmount = income.value;
    let foodAmount = food.value;
    let rentAmount = rent.value;
    let clothesAmount = clothes.value;
    incomeAmount = parseFloat(incomeAmount);
    foodAmount = parseFloat(foodAmount);
    rentAmount = parseFloat(rentAmount);
    clothesAmount = parseFloat(clothesAmount);
    if(Number(incomeAmount) && Number(foodAmount) && Number(rentAmount) && Number(clothesAmount)){
        let fare = foodAmount + rentAmount + clothesAmount;
        let expense = document.getElementById("totalExpenses");
        expense.style.backgroundColor = "";
        expense.innerText = fare;
        let balance = document.getElementById("balance");
        balance.style.backgroundColor = "";
        balance.innerText = incomeAmount - fare;
        if(fare > incomeAmount){
            expense.style.backgroundColor = "red";
            expense.innerText = " Insufficient income";
            balance.style.backgroundColor = "red";
            balance.innerText = " Insufficient income";
        }
    }
    else{
        if(!Number(incomeAmount)){
            wrongInput(income);
        }
        if(!Number(foodAmount)){
            wrongInput(food);
        }
        if(!Number(rentAmount)){
            wrongInput(rent);
        }
        if(!Number(clothesAmount)){
            wrongInput(clothes);
        }
    }
}

function wrongInput(inputField){
    inputField.style.backgroundColor = "red";
    inputField.value = "Wrong input";
}

function savings(){
    let save = document.getElementById("save");
    let saveAmount = parseFloat(save.value);
    if(!Number(saveAmount)){
        save.style.backgroundColor = "red";
        save.value = "Wrong input";
    }
    else{
        let incomeAmount = document.getElementById("income").value;
        incomeAmount = parseFloat(incomeAmount);
        let savingsField = document.getElementById("savingsField");
        let savingsAmount = (saveAmount/100)*incomeAmount;
        let remainingField = document.getElementById("remainingBalance");
        let balance = document.getElementById("balance").innerText;
        balance = parseFloat(balance);
        if(savingsAmount>balance){
            savingsField.style.backgroundColor = "red";
            remainingField.style.backgroundColor = "red";
            savingsField.innerText = "Insufficient balance to save";
            remainingField.innerText = "Insufficient balance to save";
        }
        else{
            savingsField.style.backgroundColor = "";
            remainingField.style.backgroundColor = "";
            savingsField.innerText = savingsAmount;
            remainingField.innerText = balance - savingsAmount;
        }
    }
}

function clearField(){
    event.target.value = " ";
    event.target.style.backgroundColor = "";
}
