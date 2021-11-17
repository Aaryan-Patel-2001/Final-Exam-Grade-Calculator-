var myelem = document.getElementById("Submit");
myelem.onclick = function(event){
 var allElems = document.forms[0];
 var currentGrade = allElems.currentGrade.value;
 var targetGrade = allElems.targetGrade.value;
 var finalWeightage = allElems.finalWeightage.value;
 var result = (((targetGrade-(currentGrade*(1-(finalWeightage/100))))*100)/finalWeightage);
 result = Math.round(result);
 var resString = `You need ${result} in the final exams to get a grade of ${targetGrade}`;
 var maxGrade = ((1-(finalWeightage/100))*currentGrade)+((finalWeightage/100)*100);
 maxGrade = Math.round(maxGrade);
 var altResult = `Sorry! You cannot get that Grade. The maximum you can get is a ${maxGrade}`;
 if (currentGrade<0 || currentGrade>100 || targetGrade<0 || targetGrade>100 || finalWeightage<0 || finalWeightage>100){
  window.alert("All values should be between 0 and 100!");
  document.getElementById("finalGrade").reset();
 }
 else{
  if (result<=100){
   document.getElementById("resultDisplay").innerHTML = resString;
 }
  else{
   document.getElementById("resultDisplay").innerHTML = altResult;
 }
 }
 event.preventDefault();
}

var clear = document.getElementById("Reset");
clear.onclick = function(event){
  document.getElementById("resultDisplay").innerHTML = "";
}
