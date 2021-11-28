function handlePhoneChange(isIncrease){
    const phoneInput = document.getElementById('phoneCount');
    const phoneCount = parseInt(phoneInput.value);
    let phoneNewCount = phoneCount;
    if(isIncrease == true){
        phoneNewCount = phoneCount + 1;
    }
    if(isIncrease == false && phoneNewCount > 0){
        phoneNewCount = phoneCount - 1;
    }
    phoneInput.value = phoneNewCount;
    const phoneTotal = phoneNewCount * 1219;
    document.getElementById('phoneTotal').innerText = phoneTotal;
    calculateTotal();
}

function handleCaseChange(isIncrease){
    const caseInput = document.getElementById('caseCount');
    const caseCount = parseInt(caseInput.value);
    let caseNewCount = caseCount;
    if(isIncrease == true){
        caseNewCount = caseCount + 1;
    }
    if(isIncrease == false && caseNewCount > 0){
        caseNewCount = caseCount - 1;
    }
    caseInput.value = caseNewCount;
    const caseTotal = caseNewCount * 59;
    document.getElementById('caseTotal').innerText = caseTotal;
    calculateTotal();
}

function calculateTotal(){
    const phoneInput = document.getElementById('phoneCount');
    const phoneCount = parseInt(phoneInput.value);

    const caseInput = document.getElementById('caseCount');
    const caseCount = parseInt(caseInput.value);

    const TotalPrice = phoneCount * 1219 + caseCount * 59;
    document.getElementById('subTotal').innerText = TotalPrice;

    const totalPrice = document.getElementById('total').innerText = TotalPrice;

}