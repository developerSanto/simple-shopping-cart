function handleProductChange(product, isIncrease){
    const productInput = document.getElementById(product + '-Count');
    const productCount = parseInt(productInput.value);
    let productNewCount = productCount;
    if(isIncrease == true){
        productNewCount = productCount + 1;
    }
    if(isIncrease == false && productNewCount > 0){
        productNewCount = productCount - 1;
    }
    productInput.value = productNewCount;
    let productTotal = 0;
    if(product == 'phone'){
        productTotal = productNewCount * 1219;
    }
    if(product == 'case'){
        productTotal = productNewCount * 59;
    }
    document.getElementById(product + 'Total').innerText = productTotal;
    calculateTotal();
}

// function handlePhoneChange(isIncrease){
//     const phoneInput = document.getElementById('phone-Count');
//     const phoneCount = parseInt(phoneInput.value);
//     let phoneNewCount = phoneCount;
//     if(isIncrease == true){
//         phoneNewCount = phoneCount + 1;
//     }
//     if(isIncrease == false && phoneNewCount > 0){
//         phoneNewCount = phoneCount - 1;
//     }
//     phoneInput.value = phoneNewCount;
//     const phoneTotal = phoneNewCount * 1219;
//     document.getElementById('phoneTotal').innerText = phoneTotal;
//     calculateTotal();
// }

// function handleCaseChange(isIncrease){
//     const caseInput = document.getElementById('case-Count');
//     const caseCount = parseInt(caseInput.value);
//     let caseNewCount = caseCount;
//     if(isIncrease == true){
//         caseNewCount = caseCount + 1;
//     }
//     if(isIncrease == false && caseNewCount > 0){
//         caseNewCount = caseCount - 1;
//     }
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById('caseTotal').innerText = caseTotal;
//     calculateTotal();
// }

function calculateTotal(){
    const phoneInput = document.getElementById('phone-Count');
    const phoneCount = parseInt(phoneInput.value);

    const caseInput = document.getElementById('case-Count');
    const caseCount = parseInt(caseInput.value);

    const totalPrice = phoneCount * 1219 + caseCount * 59;
    document.getElementById('subTotal').innerText = totalPrice;
    
    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax-amount').innerText = tax;

    const grandTotal = totalPrice + tax;

    document.getElementById('grandTotal').innerText = grandTotal;
    

}