
// This is the first segment
 const login = document.getElementById('login');
  login.addEventListener('click', function(){
    const loginArea = document.getElementById('login-Area');
    loginArea.style.display = 'none'; 
    const transaction = document.getElementById('transactionArea');
    transaction.style.display ='block';
  })   
// This is deposit segment

    const deposit = document.getElementById("addDeposit");
    deposit.addEventListener("click", function(){
    const depositNumber = getInputId("inputDeposit");

    document.getElementById("inputDeposit").value = "";
    updateSpan("balance", depositNumber);
    updateSpan("currentDeposit", depositNumber);
    
    
    

    })

    // withdraw segment 
    const withdrawbtn = document.getElementById("withdrawBtn");
    withdrawbtn.addEventListener("click", function(){
      const withdrawAmount = getInputId("inputWithdraw");
      
      updateSpan("currentWithdraw", withdrawAmount);
      updateSpan("balance",-1* withdrawAmount);
      document.getElementById("inputWithdraw").value = "";

      
    })
    function getInputId(id){
      const amount = document.getElementById(id).value;
      const amountNumber = parseFloat(amount);
      return amountNumber;
    }
    

    
   

    function updateSpan(id, depositNumber){
    const currentDepo = document.getElementById(id).innerText;
    const currentDepositNumber = parseFloat(currentDepo);
    const totalDeposit = currentDepositNumber + depositNumber;
    document.getElementById(id).innerText = totalDeposit;
    }


    
    

