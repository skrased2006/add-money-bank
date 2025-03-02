document.getElementById("add-money").addEventListener("click",function(event){
    event.preventDefault();
    const amount = document.getElementById("amount").value;
   const covartrdAmount=parseFloat(amount);
   const pin=document.getElementById("pin").value;
   const pinNumber=parseInt(pin);
   const mainBalance=document.getElementById("main-balance").innerText;
   const convartedMainBalance=parseFloat(mainBalance);

   if(pinNumber===1234){
     const sum=convartedMainBalance+covartrdAmount;
     document.getElementById("main-balance").innerText=sum;
   }else{
    alert("pin number incorrect");
   }
})