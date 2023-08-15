// console.log('deposite')
document.getElementById('btn-deposite').addEventListener('click', function(){
    const depositeAmount = document.getElementById('deposite-amount');
    const newDepositeAmountString = depositeAmount.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString);
    // console.log(taka);
    const depositeTotalElement = document.getElementById('deposite-total');
    const previousDepositeTotalString = depositeTotalElement.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeTotalString);
    const currentDepositTotal = previousDepositeTotal + newDepositeAmount;
    depositeTotalElement.innerText = currentDepositTotal;

    // step-5:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    const currentBalanceTotal = previousBalanceTotal + newDepositeAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    depositeAmount.value = '';


})