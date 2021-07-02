//price increase and decrease function
function handleProductChange(product, isIncrease){
    const productCount = getInputValue(product);
    let productNewCount = productCount;
    if(isIncrease == true){
        productNewCount = productCount + 1;
    }
    if(isIncrease == false && productCount > 0){
        productNewCount = productCount -1;
    }
    document.getElementById(product+'-count').value = productNewCount;
    let productTotal = 0;
    if(product == 'phone'){
        productTotal = productNewCount*1219;
    }
    if(product == 'case'){
        productTotal = productNewCount*59;
    }
    document.getElementById(product+'-total').innerText = '$'+productTotal;
    calculateTotal();
}


function calculateTotal(){
    const phoneCount = getInputValue('phone');
    const caseCount = getInputValue('case');

    const totalPrice = phoneCount*1219 + caseCount*59;
    document.getElementById('total-price').innerText ='$'+totalPrice;

    const tax = Math.round(totalPrice*0.1);
    document.getElementById('tax-amount').innerText = '$' + tax;

    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = '$' + grandTotal;
}

function getInputValue(product){
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    return productCount;
}





// //phone increase decrease function
// document.getElementById('phone-increase').addEventListener('click',function(){
//     handlePhone(true);
// })
// document.getElementById('phone-decrease').addEventListener('click',function(){
//     handlePhone(false);
// })

// function handlePhone(isIncrease){
//     const phoneInput = document.getElementById('phone-count');
//     const phoneCount = parseInt(phoneInput.value);
//     if(isIncrease == true){
//         phoneNewCount = phoneCount+1;
//     }
//     if(isIncrease == false && phoneCount > 0){
//         phoneNewCount = phoneCount-1;
//     }
//     phoneInput.value = phoneNewCount;
//     const phoneTotal = phoneNewCount*1219;
//     document.getElementById('phone-total').innerText = phoneTotal;
// }


// //case increase decrease function
// document.getElementById('case-increase').addEventListener('click',function(){
//     handleCase(true);
// });
// document.getElementById('case-decrease').addEventListener('click',function(){
//     handleCase(false);
// })

// function handleCase(isIncrease){
//     const caseInput = document.getElementById("case-count");
//     const caseCount = parseInt(caseInput.value);
//     if(isIncrease == true){
//         caseNewCount = caseCount + 1;
//     }
//     if(isIncrease == false && caseCount > 0){
//         caseNewCount = caseCount - 1;
//     }
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount*59; 
//     document.getElementById('case-total').innerText = caseTotal;
// }


//-----------------------------------------------------------------------------

// //case price increase
// document.getElementById("case-increase").addEventListener("click",function(){
//     const caseInput = document.getElementById("case-count");
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount+1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount*59; 
//     document.getElementById('case-total').innerText = caseTotal;
// });

// //case price decrease
// document.getElementById("case-decrease").addEventListener("click",function(){
//     const caseInput = document.getElementById("case-count");
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount-1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount*59;
//     document.getElementById("case-total").innerText = caseTotal;
// });

// //phone price increase
// document.getElementById("phone-increase").addEventListener("click",function(){
//     const phoneInput = document.getElementById("phone-count");
//     const phoneCount = parseInt(phoneInput.value);
//     const phoneNewCount = phoneCount+1;
//     phoneInput.value = phoneNewCount;
//     const phoneTotal = phoneNewCount*1219;
//     document.getElementById("phone-total").innerText = phoneTotal;
// });

// //phone price decrease
// document.getElementById("phone-decrease").addEventListener("click",function(){
//     const phoneInput = document.getElementById("phone-count");
//     const phoneCount = parseInt(phoneInput.value);
//     const phoneNewCount = phoneCount-1;
//     phoneInput.value = phoneNewCount;
//     const phoneTotal = phoneNewCount*1219;
//     document.getElementById("phone-total").innerText = phoneTotal;
// });