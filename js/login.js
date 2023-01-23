
document.getElementById('click-button').addEventListener("click",function(){
    const userid = document.getElementById('username');
    const username = userid.value;

    const userPass=document.getElementById('user-password');
    const password = userPass.value;

    if (username==='kamruzzaman' && password==='1526842685') {
        window.location.href='https://kamruzzamanhridoy8.github.io/la-meridian/bank.html';
    }else{
        alert('invalid user plaese try again leter');
    }
    
    userid.value = '';
    userPass.value = '';
})