document.getElementById('deposite-button').addEventListener('click',function(){
    const depositeAmount = document.getElementById('deposite-amount');
    const deposite = depositeAmount.value;
    
    const mainDepoAmount=document.getElementById('depo-amount');
    const totalDepoAmount = parseFloat(mainDepoAmount.innerText) + parseFloat(deposite);
    mainDepoAmount.innerText= totalDepoAmount;


    const previuseTotal = document.getElementById('total-balance');
    const newTotalBalance = parseFloat(previuseTotal.innerText) + parseFloat(deposite);
    previuseTotal.innerText = newTotalBalance;

    depositeAmount.value ='';
})

document.getElementById('transfer-button').addEventListener('click',function(){
    const getPayment = document.getElementById('payment-amount');
    const payment= getPayment.value;

    const previuseTotal = document.getElementById('total-balance');
    const newTotal = parseFloat(previuseTotal.innerText);

    if (payment > newTotal) {
        alert('insaficiant balance')
        getPayment.value='';
        return;
    }
    
    const paymentAmount = document.getElementById('pre-payment-amount');
    const totalPayment= parseFloat(paymentAmount.innerText) + parseFloat(payment);
    paymentAmount.innerText = totalPayment;

    const previusePayment = document.getElementById('total-balance');
    const newPayment = parseFloat(previusePayment.innerText) - parseFloat(payment);
    previusePayment.innerText = newPayment; 
    
    getPayment.value='';
})
