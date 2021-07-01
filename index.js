//case price increase
document.getElementById("case-increase").addEventListener("click",function(){
    const caseInput = document.getElementById("case-count");
    const caseCount = parseInt(caseInput.value);
    const caseNewCount = caseCount+1;
    caseInput.value = caseNewCount;
    const caseTotal = caseNewCount*59;
    document.getElementById('case-total').innerText = caseTotal;
});

//case price decrease
document.getElementById("case-decrease").addEventListener("click",function(){
    const caseInput = document.getElementById("case-count");
    const caseCount = parseInt(caseInput.value);
    const caseNewCount = caseCount-1;
    caseInput.value = caseNewCount;
    const caseTotal = caseNewCount*59;
    document.getElementById("case-total").innerText = caseTotal;
});

//phone price increase
document.getElementById("phone-increase").addEventListener("click",function(){
    const phoneInput = document.getElementById("phone-count");
    const phoneCount = parseInt(phoneInput.value);
    const phoneNewCount = phoneCount+1;
    phoneInput.value = phoneNewCount;
    const phoneTotal = phoneNewCount*1219;
    document.getElementById("phone-total").innerText = phoneTotal;
});

//phone price decrease
document.getElementById("phone-decrease").addEventListener("click",function(){
    const phoneInput = document.getElementById("phone-count");
    const phoneCount = parseInt(phoneInput.value);
    const phoneNewCount = phoneCount-1;
    phoneInput.value = phoneNewCount;
    const phoneTotal = phoneNewCount*1219;
    document.getElementById("phone-total").innerText = phoneTotal;
});