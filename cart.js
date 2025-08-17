let cart = JSON.parse(localStorage.getItem("cartItems"));
document.addEventListener("DOMContentLoaded",()=>{

  

    

    document.querySelector(".fa-solid.fa-arrow-left").addEventListener("click",()=>{
        window.location.href = "./index.html";
    })

      if(cart===null || !Array.isArray(cart)){
        cart = [];
    }
    

  
    let CartContainer=document.querySelector(".CartContainer")
    cart.forEach(item =>{
         let CartItemsHtml = 
         `<div class="cart-item"> 
         <img src ="../img/${item.img}" class="cart-img">
         <div class="item-info">
         <h4>${item.name}</h4>
         <p>${item.price}</p>
         </div>
         <div class="buybtn"> 
         <span> <i class="fa-solid fa-minus"></i> </span>
         <input type="Number" class="inputText" value="1">
         <span><i class="fa-solid fa-plus"></i></span>
         
         </div>
         <span> <i class="fa-solid fa-trash"></i> </span>
         </div>`;



         CartContainer.innerHTML += CartItemsHtml;
         CheckCartCondition();
          toggleBuyBtn();
        

           }); 
               // cart Item Increment Logic
            const inputText = document.querySelectorAll(".inputText");
       
           const plusBtns = document.querySelectorAll(".fa-solid.fa-plus");
           plusBtns.forEach((plusBtn, index)=>{
            plusBtn.addEventListener("click",()=>{
                 
                  let currentValue = Number(inputText[index].value) || 0;
                  inputText[index].value = currentValue +1;
                 
                   });
                });

                //Cart items Minus Logic
                let minusbtns = document.querySelectorAll(".fa-solid.fa-minus");
                minusbtns.forEach((minusbtn, index)=>{
                    minusbtn.addEventListener("click",()=>{ 
                       let currentValue = Number(inputText[index].value) || 0;
                       if(currentValue>0) inputText[index].value = currentValue - 1;
                    });
                });
                

           //Delete Logic
            let delteBtn = document.querySelectorAll(".fa-solid.fa-trash");
            
            delteBtn.forEach((btn, index)=>{
              btn.addEventListener("click",()=>{
                btn.closest(".cart-item").remove();
                cart.splice(index, 1);
                 localStorage.setItem("cartItems", JSON.stringify(cart));
                 CheckCartCondition();
                 toggleBuyBtn();
              });

            });

            function CheckCartCondition(){
               let emptyClass = document.querySelector(".emptyClass");

               if(cart.length===0){
               emptyClass.style.display = "block";
               }else{
                emptyClass.style.display = "none";
               }
            }

            //Purchas Btn Logic
          
            function toggleBuyBtn(){
                let purchaseBtn = document.querySelector(".checkoutBtn");


            if(cart.length===0){
              purchaseBtn.style.display = "none"
            }else{
              purchaseBtn.style.display = "block";
            }
          }
   
    
});