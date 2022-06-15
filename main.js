let cartAmount=document.getElementById('cart-amount');
let count=0;
let increment=()=>{
    count+=1;
    cartAmount.innerHTML=count;
    updater(count)
}
let decrement=()=>{
    if(count===0)return
    else{
    count-=1;
    cartAmount.innerHTML=count;
   updater(count)
    }
    
}
let main=document.getElementById('mainImg');

function imgChanger1(){
main.src="images/image-product-1.jpg";

}
function imgChanger2(){
    main.src="images/image-product-2.jpg";
}
function imgChanger3(){
    main.src="images/image-product-3.jpg";
}
function imgChanger4(){
    main.src="images/image-product-4.jpg";  
}
let priceChannel=document.getElementById('price-channel');
let indicator=document.getElementById('indicator');
function updater(count){
  
    let newCount=count;
    newCount="$"+ calcu(count);
    
   priceChannel.innerHTML=newCount;

}
function addToCart(){
    indicator.innerHTML=count;
}
function calcu(count){
return count*125
}