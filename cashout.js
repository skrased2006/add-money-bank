document.getElementById("cashout-btn").addEventListener("click",function(event){
    event.preventDefault();
    const amount = document.getElementById("amount").value;
   const covartrdAmount=parseFloat(amount);
   const pin=document.getElementById("cashout-pin").value;
   const pinNumber=parseInt(pin);
   const mainBalance=document.getElementById("main-balance").innerText;
   const convartedMainBalance=parseFloat(mainBalance);

   if(pinNumber===1234){
     const sum=convartedMainBalance-covartrdAmount;
     document.getElementById("main-balance").innerText=sum;
    console.log(sum)
   }else{
    alert("pin number incorrect");
   }
})



