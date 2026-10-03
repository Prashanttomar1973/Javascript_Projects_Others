const  BASE_URL="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const msg=document.querySelector(" .msg");




let i=0;
for(let select of dropdowns){
    for(currCode in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;
        if(select.name==="from" && currCode==="USD"){
            newOption.selected="selected";
        }else if(select.name==="to" && currCode==="INR"){
            newOption.selected="selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    })

}

const updateFlag=(element)=>{
    let currCode=element.value;
    let countryCode=countryList[currCode];
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newSrc;
}

btn.addEventListener("click",async (evt)=>{
    evt.preventDefault();
    updateExchangeRate();
});

const updateExchangeRate= async()=>{
    let  amount=document.querySelector(".amount input");
    let amountVal=amount.value;
   
    if(amountVal==="" || amountVal<1){
        amountVal=1; 
        amount.value="1";
    }
    
    const fromCode=fromCurr.value.toLowerCase();
    const toCode=toCurr.value.toLowerCase();

    console.log(fromCurr.value,toCurr.value);

    const URL=`${BASE_URL}/${fromCode}.json`;

    try{
    let response= await fetch(URL);
    let data= await response.json();
    let rate=data[fromCode][toCode];
    let finalAmount=amountVal*rate;
    console.log(`${amountVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`);
    if(msg){
        msg.innerText=`${amountVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`
    }
    }catch(error){
        console.error("Error fetching conversion rate",error);
    }
};

window.addEventListener("load",()=>{
    updateExchangeRate();
})
