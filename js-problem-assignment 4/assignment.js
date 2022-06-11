//problem1
function anaToVori (ana){
    if(typeof ana != 'number'){
   return "error";
    }
    var Vari = ana/16;
    return Vari;
}
var totalana = 35;
var result = anaToVori(totalana);
console.log ( result );


//problem2
function pandaCost(singgara,somocar,jilapi){
  if(typeof singgara != "number"){
      return "error";
  }
  if(typeof somocar != "number"){
      return "error";
  }
  if(typeof jilapi != "number"){
      return "error";
  }
 
  var singgaraprice = 7;
  var somocarprice = 10;
  var jilapiprice = 15;

  var singgaraQuantiy = singgaraprice *singgara;
  var somocarQuantity = somocarprice *somocar;
  var jilapiQuantity = jilapiprice *jilapi;
  var totalPandaCost =singgaraQuantiy+somocarQuantity+jilapiQuantity;
  return totalPandaCost;

}
 var result   =  pandaCost(3,5,0);
console.log(result);

//problem 3;

function picnicBudget(pepolenumber){

    if(typeof pepolenumber != "number"){
        return "error";
    }
  var frist100pepole =5000;
  var sceond100pepole =4000;
  var thirdpepole =3000;

    if(pepolenumber<=100){
         var frist100pepoleBudget = frist100pepole *pepolenumber;
         return frist100pepoleBudget;
    }
    else if(pepolenumber<=200){
        var frist100pepoleBudget = frist100pepole *100;
        var restpepole = pepolenumber - 100;
        var sceond100pepoleBudget = (sceond100pepole *restpepole)+frist100pepoleBudget;
          return sceond100pepoleBudget; 
    }
    else{
        var frist100pepoleBudget =  frist100pepole * 100;
        var sceond100pepoleBudget = sceond100pepole * 100;
        var restotherpepole = pepolenumber -200;
        var  thirdpepoleBudget = (thirdpepole *restotherpepole) + frist100pepoleBudget+sceond100pepoleBudget;
        return thirdpepoleBudget;
    }
    
}
 var result =  picnicBudget(350);
console.log(result);



//problem 4 
 function oddFriend (friends){

     var evennumber = false;
    var stringName = '';
    for(var i = 0 ; i<friends.length; i++){
        
        if(friends[i].length %2 != 0){
         stringName =friends[i];
          return stringName;
         } 

         else{
             evennumber = true;
            
         }
    }
 
    if(evennumber==true){
        return "error";
    }

 }

 var friendsName = ["Dibs","Rudrasah","monr","Dibos"];
 var result = oddFriend(friendsName);
 console.log(result);



