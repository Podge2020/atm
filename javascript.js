let bankAccounts = [];

function Account(pin){
	this.pin = pin;
    this.balance = 0;
    
    //deposit method 

    //withrdraw method
    
    //get balance method  
    }
    
function getAccount(){
	let pin = parseInt(document.getElementById("pinput").value); 
    for(let i=0; i < bankAccounts.length; i++){
    //existing account PIN entered     
      if( bankAccounts[i].pin === pin  ){
          //window.open("atm_menu.html"); 
          //update the page for menu options 
          return; 
          }  
    
    //new PIN, creates new bank account
    else (let newAccount = new Account(pin); 
                     
       bankAccounts.push(newAccount);)   
      }
}
