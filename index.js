let leads = [];
boolean = false;

const inputEl = document.querySelector("#email");
const btnEl = document.querySelector("#button");
const ulEl = document.querySelector("#ul-el");
const delBtn = document.querySelector("#deletebtn");
const delLast = document.querySelector("#deletelast");
const alert =document.querySelector("#invisible");
const email = document.querySelector("#email");
let leadstrueorfalse = JSON.parse(localStorage.getItem("myLeads"));

if(leadstrueorfalse){
   leads = leadstrueorfalse;
   renderleads();
}

btnEl.addEventListener("click",function(){
  let check= checkalready(inputEl.value);
  if(check){
   alert.style.display="block";
     inputEl.value="";
     boolean = true;
  }
  else{
    leads.push(inputEl.value);
    inputEl.value ="";
    localStorage.setItem("myLeads",JSON.stringify(leads));
    renderleads();
  }
})

delBtn.addEventListener("click",function(){
   localStorage.clear();
   leads=[];
   renderleads(leads);
})

delLast.addEventListener("click",function(){
   let get = JSON.parse(localStorage.getItem("myLeads"));
   console.log(get);
   get.pop();
   leads.pop();
   console.log(leads)
   renderleads(leads);
})
// tabBtn.addEventListener("click",function(){
//    browser.tab.query({ active: true,currentWindow: true}, function(tabs){ 
//        leads.push(tabs[0].url);
//       localStorage.setItem("myLeads",JSON.stringify(leads));
//       renderleads(leads);
//    // browser.tabs.getSelected(null, function(tab) {
//    //    var url1 = tab.url;
//    //    console.log(url1);
//    //    });
//    })
// })

//  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//    {greeting: "hello"}, 
// });
email.addEventListener("click",function(){
   alert.style.display ="none";
   boolean = false;
})
function checkalready(name){
   if(leads == ['']){
       return false;
   }
   else if(leads.find(myfunction)){
      if(true){
         return true;
      }
      }
   else{
      return false;
   }
   function myfunction(value){
      if(value == name){
         return true;
      }
    }
}



function renderleads(){
let listitem = "";
for(let i = 0;i<leads.length;i++){
       listitem +=  `
       <li>
          <a target='_blank' href='${leads[i]}'>
             ${leads[i]}
           </a>
        </li>
          `
        // const li = document.createElement("li");
        // li.textContent = leads[i];
        // ulEl.append(li);
}
ulEl.innerHTML = listitem;
}