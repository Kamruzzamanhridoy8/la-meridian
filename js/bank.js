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
