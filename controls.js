let score_list = []
let unit_list = []
var totalScore = 0;
var totalUnit = 0;

var BUTTON = document.querySelector('#button');
BUTTON.addEventListener('click', function() {    
  let unit12 = document.querySelector('#test23').value;
  let score12 = document.querySelector('#test24').value;
  if (score12 >= 75 && score12 <= 100) {
    score_list.push(4 * unit12);
    unit_list.push(1 * unit12);
  } else if(score12>=70 && score12<=74){
    score_list.push(3.5 * unit12);
    unit_list.push(1 * unit12);
  } else if(score12>=65 && score12<=69){
    score_list.push(3.25 * unit12);
    unit_list.push(1 * unit12);
  } else if(score12>=60 && score12<=64){
    score_list.push(3 * unit12);
    unit_list.push(1 * unit12);
  } else if(score12>=55 && score12<=59){
    score_list.push(2.75 * unit12);
    unit_list.push(1 * unit12);
  } else if(score12>=50 && score12<=54){
    score_list.push(2.5 * unit12);
    unit_list.push(1 * unit12);
  } else if(score12>=45 && score12<=49){
    score_list.push(2.25 * unit12);
    unit_list.push(1 * unit12);
  } else if(score12>=40 && score12<=44){
    score_list.push(2 * unit12);
    unit_list.push(1 * unit12);
  } else {
    score_list.push(0);
    unit_list.push(1 * unit12);
  }

  let unit = document.querySelector('#test1').value;
  let score = document.querySelector('#test2').value;
  if (score >= 75 && score <= 100) {
    score_list.push(4 * unit);
    unit_list.push(1 * unit);
    } else if(score>=70 && score<=74){
    score_list.push(3.5 * unit);
    unit_list.push(1 * unit);
    } else if(score>=65 && score<=69){
    score_list.push(3.25 * unit);
    unit_list.push(1 * unit);
    } else if(score>=60 && score<=64){
    score_list.push(3 * unit);
    unit_list.push(1 * unit);
    } else if(score>=55 && score<=59){
    score_list.push(2.75 * unit);
    unit_list.push(1 * unit);
    } else if(score>=50 && score<=54){
    score_list.push(2.5 * unit);
    unit_list.push(1 * unit);
    } else if(score>=45 && score<=49){
    score_list.push(2.25 * unit);
    unit_list.push(1 * unit);
    } else if(score>=40 && score<=44){
    score_list.push(2 * unit);
    unit_list.push(1 * unit);
    } else{
    score_list.push(0);
    unit_list.push(1 * unit);
  }

  let unit2 = document.querySelector('#test3').value;
  let score2 = document.querySelector('#test4').value;
  if (score2 >= 75 && score2 <= 100) {
    score_list.push(4 * unit2);
    unit_list.push(1 * unit2);
  } else if(score2>=70 && score2<=74){
    score_list.push(3.5 * unit2);
    unit_list.push(1 * unit2);
  } else if(score2>=65 && score2<=69){
    score_list.push(3.25 * unit2);
    unit_list.push(1 * unit2);
  } else if(score2>=60 && score2<=64){
    score_list.push(3 * unit2);
    unit_list.push(1 * unit2);
  } else if(score2>=55 && score2<=59){
    score_list.push(2.75 * unit2);
    unit_list.push(1 * unit2);
  } else if(score2>=50 && score2<=54){
    score_list.push(2.5 * unit2);
    unit_list.push(1 * unit2);
  } else if(score2>=45 && score2<=49){
    score_list.push(2.25 * unit2);
    unit_list.push(1 * unit2);
  } else if(score2>=40 && score2<=44){
    score_list.push(2 * unit2);
    unit_list.push(1 * unit2);
  } else{
    score_list.push(0);
    unit_list.push(1 * unit2);
  }

  let unit3 = document.querySelector('#test5').value;
  let score3 = document.querySelector('#test6').value;
  if (score3 >= 75 && score3 <= 100) {
    score_list.push(4 * unit3);
    unit_list.push(1 * unit3);
  } else if(score3>=70 && score3<=74){
    score_list.push(3.5 * unit3);
    unit_list.push(1 * unit3);
  } else if(score3>=65 && score3<=69){
    score_list.push(3.25 * unit3);
    unit_list.push(1 * unit3);
  } else if(score3>=60 && score3<=64){
    score_list.push(3 * unit3);
    unit_list.push(1 * unit3);
  } else if(score3>=55 && score3<=59){
    score_list.push(2.75 * unit3);
    unit_list.push(1 * unit3);
  } else if(score3>=50 && score3<=54){
    score_list.push(2.5 * unit3);
    unit_list.push(1 * unit3);
  } else if(score3>=45 && score3<=49){
    score_list.push(2.25 * unit3);
    unit_list.push(1 * unit3);
  } else if(score3>=40 && score3<=44){
    score_list.push(2 * unit3);
    unit_list.push(1 * unit3);
  } else{
    score_list.push(0);
    unit_list.push(1 * unit3);
  }

  let unit4 = document.querySelector('#test7').value;
  let score4 = document.querySelector('#test8').value;
  if (score4 >= 75 && score4 <= 100) {
    score_list.push(4 * unit4);
    unit_list.push(1 * unit4);
  } else if(score4>=70 && score4<=74){
    score_list.push(3.5 * unit4);
    unit_list.push(1 * unit4);
  } else if(score4>=65 && score4<=69){
    score_list.push(3.25 * unit4);
    unit_list.push(1 * unit4);
  } else if(score4>=60 && score4<=64){
    score_list.push(3 * unit4);
    unit_list.push(1 * unit4);
  } else if(score4>=55 && score4<=59){
    score_list.push(2.75 * unit4);
    unit_list.push(1 * unit4);
  } else if(score4>=50 && score4<=54){
    score_list.push(2.5 * unit4);
    unit_list.push(1 * unit4);
  } else if(score4>=45 && score4<=49){
    score_list.push(2.25 * unit4);
    unit_list.push(1 * unit4);
  } else if(score4>=40 && score4<=44){
    score_list.push(2 * unit4);
    unit_list.push(1 * unit4);
  } else{
    score_list.push(0);
    unit_list.push(1 * unit4);
  }

  let unit5 = document.querySelector('#test9').value;
  let score5 = document.querySelector('#test10').value;
  if (score5 >= 75 && score5 <= 100) {
    score_list.push(4 * unit5);
    unit_list.push(1 * unit5);
  } else if(score5>=70 && score5<=74){
    score_list.push(3.5 * unit5);
    unit_list.push(1 * unit5);
  } else if(score5>=65 && score5<=69){
    score_list.push(3.25 * unit5);
    unit_list.push(1 * unit5);
  } else if(score5>=60 && score5<=64){
    score_list.push(3 * unit5);
    unit_list.push(1 * unit5);
  } else if(score5>=55 && score5<=59){
    score_list.push(2.75 * unit5);
    unit_list.push(1 * unit5);
  } else if(score5>=50 && score5<=54){
    score_list.push(2.5 * unit5);
    unit_list.push(1 * unit5);
  } else if(score5>=45 && score5<=49){
    score_list.push(2.25 * unit5);
    unit_list.push(1 * unit5);
  } else if(score5>=40 && score5<=44){
    score_list.push(2 * unit5);
    unit_list.push(1 * unit5);
  } else{
    score_list.push(0);
    unit_list.push(1 * unit5);
  }

  let unit6 = document.querySelector('#test11').value;
  let score6 = document.querySelector('#test12').value;
  if (score6 >= 75 && score6 <= 100) {
    score_list.push(4 * unit6);
    unit_list.push(1 * unit6);
  } else if(score6>=70 && score6<=74){
    score_list.push(3.5 * unit6);
    unit_list.push(1 * unit6);
  } else if(score6>=65 && score6<=69){
    score_list.push(3.25 * unit6);
    unit_list.push(1 * unit6);
  } else if(score6>=60 && score6<=64){
    score_list.push(3 * unit6);
    unit_list.push(1 * unit6);
  } else if(score6>=55 && score6<=59){
    score_list.push(2.75 * unit6);
    unit_list.push(1 * unit6);
  } else if(score6>=50 && score6<=54){
    score_list.push(2.5 * unit6);
    unit_list.push(1 * unit6);
  } else if(score6>=45 && score6<=49){
    score_list.push(2.25 * unit6);
    unit_list.push(1 * unit6);
  } else if(score6>=40 && score6<=44){
    score_list.push(2 * unit6);
    unit_list.push(1 * unit6);
  } else{
    score_list.push(0);
    unit_list.push(1 * unit6);
  }

  let unit7 = document.querySelector('#test13').value;
  let score7 = document.querySelector('#test14').value;
  if (score7 >= 75 && score7 <= 100) {
    score_list.push(4 * unit7);
    unit_list.push(1 * unit7);
  } else if(score7>=70 && score7<=74){
    score_list.push(3.5 * unit7);
    unit_list.push(1 * unit7);
  } else if(score7>=65 && score7<=69){
    score_list.push(3.25 * unit7);
    unit_list.push(1 * unit7);
  } else if(score7>=60 && score7<=64){
    score_list.push(3 * unit7);
    unit_list.push(1 * unit7);
  } else if(score7>=55 && score7<=59){
    score_list.push(2.75 * unit7);
    unit_list.push(1 * unit7);
  } else if(score7>=50 && score7<=54){
    score_list.push(2.5 * unit7);
    unit_list.push(1 * unit7);
  } else if(score7>=45 && score7<=49){
    score_list.push(2.25 * unit7);
    unit_list.push(1 * unit7);
  } else if(score7>=40 && score7<=44){
    score_list.push(2 * unit7);
    unit_list.push(1 * unit7);
  } else{
    score_list.push(0);
    unit_list.push(1 * unit7);
  }

  let unit8 = document.querySelector('#test15').value;
  let score8 = document.querySelector('#test16').value;
  if (score8 >= 75 && score8 <= 100) {
    score_list.push(4 * unit8);
    unit_list.push(1 * unit8);
  } else if(score8>=70 && score8<=74){
    score_list.push(3.5 * unit8);
    unit_list.push(1 * unit8);
  } else if(score8>=65 && score8<=69){
    score_list.push(3.25 * unit8);
    unit_list.push(1 * unit8);
  } else if(score8>=60 && score8<=64){
    score_list.push(3 * unit8);
    unit_list.push(1 * unit8);
  } else if(score8>=55 && score8<=59){
    score_list.push(2.75 * unit8);
    unit_list.push(1 * unit8);
  } else if(score8>=50 && score8<=54){
    score_list.push(2.5 * unit8);
    unit_list.push(1 * unit8);
  } else if(score8>=45 && score8<=49){
    score_list.push(2.25 * unit8);
    unit_list.push(1 * unit8);
  } else if(score8>=40 && score8<=44){
    score_list.push(2 * unit8);
    unit_list.push(1 * unit8);
  } else{
    score_list.push(0);
    unit_list.push(1 * unit8);
  }

  let unit9 = document.querySelector('#test17').value;
  let score9 = document.querySelector('#test18').value;
  if (score9 >= 75 && score9 <= 100) {
    score_list.push(4 *unit9);
    unit_list.push(1 * unit9);
  } else if(score9>=70 && score9<=74){
    score_list.push(3.5 * unit9);
    unit_list.push(1 * unit9);
  } else if(score9>=65 && score9<=69){
    score_list.push(3.25 * unit9);
    unit_list.push(1 * unit9);
  } else if(score9>=60 && score9<=64){
    score_list.push(3 * unit9);
    unit_list.push(1 * unit9);
  } else if(score9>=55 && score9<=59){
    score_list.push(2.75 * unit9);
    unit_list.push(1 * unit9);
  } else if(score9>=50 && score9<=54){
    score_list.push(2.5 * unit9);
    unit_list.push(1 * unit9);
  } else if(score9>=45 && score9<=49){
    score_list.push(2.25 * unit9);
    unit_list.push(1 * unit9);
  } else if(score9>=40 && score9<=44){
    score_list.push(2 * unit9);
    unit_list.push(1 * unit9);
  } else{
    score_list.push(0);
    unit_list.push(1 * unit9);
  }

  let unit10 = document.querySelector('#test19').value;
  let score10 = document.querySelector('#test20').value;
  if (score10 >= 75 && score10 <= 100) {
    score_list.push(4 * unit10);
    unit_list.push(1 * unit10);
  } else if(score10>=70 && score10<=74){
    score_list.push(3.5 * unit10);
    unit_list.push(1 * unit10);
  } else if(score10>=65 && score10<=69){
    score_list.push(3.25 * unit10);
    unit_list.push(1 * unit10);
  } else if(score10>=60 && score10<=64){
    score_list.push(3 * unit10);
    unit_list.push(1 * unit10);
  } else if(score10>=55 && score10<=59){
    score_list.push(2.75 * unit10);
    unit_list.push(1 * unit10);
  } else if(score10>=50 && score10<=54){
    score_list.push(2.5 * unit10);
    unit_list.push(1 * unit10);
  } else if(score10>=45 && score10<=49){
    score_list.push(2.25 * unit10);
    unit_list.push(1 * unit10);
  } else if(score10>=40 && score10<=44){
    score_list.push(2 * unit10);
    unit_list.push(1 * unit10);
  } else{
    score_list.push(0);
    unit_list.push(1 * unit10);
  }

  let unit11 = document.querySelector('#test21').value;
  let score11 = document.querySelector('#test22').value;
  if (score11 >= 75 && score11 <= 100) {
    score_list.push(4 * unit11);
    unit_list.push(1 * unit11);
  } else if(score11>=70 && score11<=74){
    score_list.push(3.5 * unit11);
    unit_list.push(1 * unit11);
  } else if(score11>=65 && score11<=69){
    score_list.push(3.25 * unit11);
    unit_list.push(1 * unit11);
  } else if(score11>=60 && score11<=64){
    score_list.push(3 * unit11);
    unit_list.push(1 * unit11);
  } else if(score11>=55 && score11<=59){
    score_list.push(2.75 * unit11);
    unit_list.push(1 * unit11);
  } else if(score11>=50 && score11<=54){
    score_list.push(2.5 * unit11);
    unit_list.push(1 * unit11);
  } else if(score11>=45 && score11<=49){
    score_list.push(2.25 * unit11);
    unit_list.push(1 * unit11);
  } else if(score11>=40 && score11<=44){
    score_list.push(2 * unit11);
    unit_list.push(1 * unit11);
  } else{
    score_list.push(0);
    unit_list.push(1 * unit11);
  }
});


var sumation = document.querySelector('#button');
sumation.addEventListener('click', function() {
  event.preventDefault();
  score_list.forEach(function(element){
    totalScore += element;
  });
  unit_list.forEach(function(element){
    totalUnit += element;
  });
  gp = totalScore/totalUnit;
} );


var debug = document.querySelector('#button');
debug.addEventListener('click', function() {
  event.preventDefault();
    console.log("Score: " +score_list);
    console.log("Unit: " +unit_list);
    console.log("Total Score: " +totalScore);
    console.log("Total Unit: " +totalUnit);
    return document.querySelector('#result').innerHTML = " Your Grade Point Is: " +gp.toFixed(2);
});

var final = document.querySelector('#button');
final.addEventListener('click', function() {
  event.preventDefault();
  if (gp.toFixed(2) >= 3.50 && gp.toFixed(2) <= 4.00){
    return document.querySelector('#grade').innerHTML = " Distinction ";
  } else if (gp.toFixed(2) >= 3.00 && gp.toFixed(2) <= 3.49){
    return document.querySelector('#grade').innerHTML = " Upper Credit ";
  } else if (gp.toFixed(2) >= 2.50 && gp.toFixed(2) <= 2.99){
    return document.querySelector('#grade').innerHTML = " Lower Credit ";
  } else if (gp.toFixed(2) >= 2.00 && gp.toFixed(2) <= 2.50){
    return document.querySelector('#grade').innerHTML = " Pass ";
  } else if (gp.toFixed(2) >= 1.50 && gp.toFixed(2) <= 1.99){
    return document.querySelector('#grade').innerHTML = " Probation ";
  }else if (gp.toFixed(2) >= 1.00 && gp.toFixed(2) <= 1.49){
    return document.querySelector('#grade').innerHTML = " Adviced To Withdraw";
  }  else {
    return document.querySelector('#grade').innerHTML = " Bros, Go And Do Yahoo!!! ";
  }
}
);
