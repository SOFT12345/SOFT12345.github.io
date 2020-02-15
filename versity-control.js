let score_list = []
let unit_list = []
var total_Scores = 0;
var total_Units = 0;


function austria(event) {
    event.preventDefault();    

    let unit12 = document.querySelector('#test23a').value;
    let score12a = document.querySelector('#test24a').value;
    if (score12a >= 70 && score12a <= 100) {
      score_list.push(5 * unit12);
      unit_list.push(1 * unit12);
    } else if(score12a>=60 && score12a<=69){
      score_list.push(4 * unit12);
      unit_list.push(1 * unit12);
    } else if(score12a>=50 && score12a<=59){
      score_list.push(3 * unit12);
      unit_list.push(1 * unit12);
    } else if(score12a>=45 && score12a<=49){
      score_list.push(2 * unit12);
      unit_list.push(1 * unit12);
    } else if(score12a>=40 && score12a<=44){
      score_list.push(1 * unit12);
      unit_list.push(1 * unit12);
    } else {
      score_list.push(0);
      unit_list.push(1 * unit12);
    }

    let unit = document.querySelector('#test1a').value;
    let scorea = document.querySelector('#test2a').value;
    if (scorea >= 70 && scorea <= 100) {
      score_list.push(5 * unit);
      unit_list.push(1 * unit);
    } else if(scorea>=60 && scorea<=69){
      score_list.push(4 * unit);
      unit_list.push(1 * unit);
    } else if(scorea>=50 && scorea<=59){
      score_list.push(3 * unit);
      unit_list.push(1 * unit);
    } else if(scorea>=45 && scorea<=49){
      score_list.push(2 * unit);
      unit_list.push(1 * unit);
    } else if(scorea>=40 && scorea<=44){
      score_list.push(1 * unit);
      unit_list.push(1 * unit);
    } else {
      score_list.push(0);
      unit_list.push(1 * unit);
    }

    let unit2 = document.querySelector('#test3a').value;
    let score2a = document.querySelector('#test4a').value;
    if (score2a >= 70 && score2a <= 100) {
      score_list.push(5 * unit2);
      unit_list.push(1 * unit2);
    } else if(score2a>=60 && score2a<=69){
      score_list.push(4 * unit2);
      unit_list.push(1 * unit2);
    } else if(score2a>=50 && score2a<=59){
      score_list.push(3 * unit2);
      unit_list.push(1 * unit2);
    } else if(score2a>=45 && score2a<=49){
      score_list.push(2 * unit2);
      unit_list.push(1 * unit2);
    } else if(score2a>=40 && score2a<=44){
      score_list.push(1 * unit2);
      unit_list.push(1 * unit2);
    } else {
      score_list.push(0);
      unit_list.push(1 * unit2);
    }

    let unit3 = document.querySelector('#test5a').value;
    let score3a = document.querySelector('#test6a').value;
    if (score3a >= 70 && score3a <= 100) {
      score_list.push(5 * unit3);
      unit_list.push(1 * unit3);
    } else if(score3a>=60 && score3a<=69){
      score_list.push(4 * unit3);
      unit_list.push(1 * unit3);
    } else if(score3a>=50 && score3a<=59){
      score_list.push(3 * unit3);
      unit_list.push(1 * unit3);
    } else if(score3a>=45 && score3a<=49){
      score_list.push(2 * unit3);
      unit_list.push(1 * unit3);
    } else if(score3a>=40 && score3a<=44){
      score_list.push(1 * unit3);
      unit_list.push(1 * unit3);
    } else {
      score_list.push(0);
      unit_list.push(1 * unit3);
    }

    let unit4 = document.querySelector('#test7a').value;
    let score4a = document.querySelector('#test8a').value;
    if (score4a >= 70 && score4a <= 100) {
      score_list.push(5 * unit4);
      unit_list.push(1 * unit4);
    } else if(score4a>=60 && score4a<=69){
      score_list.push(4 * unit4);
      unit_list.push(1 * unit4);
    } else if(score4a>=50 && score4a<=59){
      score_list.push(3 * unit4);
      unit_list.push(1 * unit4);
    } else if(score4a>=45 && score4a<=49){
      score_list.push(2 * unit4);
      unit_list.push(1 * unit4);
    } else if(score4a>=40 && score4a<=44){
      score_list.push(1 * unit4);
      unit_list.push(1 * unit4);
    } else {
      score_list.push(0);
      unit_list.push(1 * unit4);
    }

    let unit5 = document.querySelector('#test9a').value;
    let score5a = document.querySelector('#test10a').value;
    if (score5a >= 70 && score5a  <= 100) {
      score_list.push(5 * unit5);
      unit_list.push(1 * unit5);
    } else if(score5a >=60 && score5a <=69){
      score_list.push(4 * unit5);
      unit_list.push(1 * unit5);
    } else if(score5a >=50 && score5a <=59){
      score_list.push(3 * unit5);
      unit_list.push(1 * unit5);
    } else if(score5a >=45 && score5a <=49){
      score_list.push(2 * unit5);
      unit_list.push(1 * unit5);
    } else if(score5a >=40 && score5a <=44){
      score_list.push(1 * unit5);
      unit_list.push(1 * unit5);
    } else {
      score_list.push(0);
      unit_list.push(1 * unit5);
    }

    let unit6 = document.querySelector('#test11a').value;
    let score6a = document.querySelector('#test12a').value;
    if (score6a >= 70 && score6a <= 100) {
      score_list.push(5 * unit6);
      unit_list.push(1 * unit6);
    } else if(score6a>=60 && score6a<=69){
      score_list.push(4 * unit6);
      unit_list.push(1 * unit6);
    } else if(score6a>=50 && score6a<=59){
      score_list.push(3 * unit6);
      unit_list.push(1 * unit6);
    } else if(score6a>=45 && score6a<=49){
      score_list.push(2 * unit6);
      unit_list.push(1 * unit6);
    } else if(score6a>=40 && score6a<=44){
      score_list.push(1 * unit6);
      unit_list.push(1 * unit6);
    } else {
      score_list.push(0);
      unit_list.push(1 * unit6);
    }

    let unit7 = document.querySelector('#test13a').value;
    let score7a = document.querySelector('#test14a').value;
    if (score7a >= 70 && score7a <= 100) {
      score_list.push(5 * unit7);
      unit_list.push(1 * unit7);
    } else if(score7a>=60 && score7a<=69){
      score_list.push(4 * unit7);
      unit_list.push(1 * unit7);
    } else if(score7a>=50 && score7a<=59){
      score_list.push(3 * unit7);
      unit_list.push(1 * unit7);
    } else if(score7a>=45 && score7a<=49){
      score_list.push(2 * unit7);
      unit_list.push(1 * unit7);
    } else if(score7a>=40 && score7a<=44){
      score_list.push(1 * unit7);
      unit_list.push(1 * unit7);
    } else {
      score_list.push(0);
      unit_list.push(1 * unit7);
    }

    let unit8 = document.querySelector('#test15a').value;
    let score8a = document.querySelector('#test16a').value;
    if (score8a >= 70 && score8a <= 100) {
      score_list.push(5 * unit8);
      unit_list.push(1 * unit8);
    } else if(score8a>=60 && score8a<=69){
      score_list.push(4 * unit8);
      unit_list.push(1 * unit8);
    } else if(score8a>=50 && score8a<=59){
      score_list.push(3 * unit8);
      unit_list.push(1 * unit8);
    } else if(score8a>=45 && score8a<=49){
      score_list.push(2 * unit8);
      unit_list.push(1 * unit8);
    } else if(score8a>=40 && score8a<=44){
      score_list.push(1 * unit8);
      unit_list.push(1 * unit8);
    } else {
      score_list.push(0);
      unit_list.push(1 * unit8);
    }

    let unit9 = document.querySelector('#test17a').value;
    let score9a = document.querySelector('#test18a').value;
    if (score9a >= 70 && score9a <= 100) {
      score_list.push(5 * unit9);
      unit_list.push(1 * unit9);
    } else if(score9a>=60 && score9a<=69){
      score_list.push(4 * unit9);
      unit_list.push(1 * unit9);
    } else if(score9a>=50 && score9a<=59){
      score_list.push(3 * unit9);
      unit_list.push(1 * unit9);
    } else if(score9a>=45 && score9a<=49){
      score_list.push(2 * unit9);
      unit_list.push(1 * unit9);
    } else if(score9a>=40 && score9a<=44){
      score_list.push(1 * unit9);
      unit_list.push(1 * unit9);
    } else {
      score_list.push(0);
      unit_list.push(1 * unit9);
    }

    let unit10 = document.querySelector('#test19a').value;
    let score10a = document.querySelector('#test20a').value;
    if (score10a >= 70 && score10a <= 100) {
      score_list.push(5 * unit10);
      unit_list.push(1 * unit10);
    } else if(score10a>=60 && score10a<=69){
      score_list.push(4 * unit10);
      unit_list.push(1 * unit10);
    } else if(score10a>=50 && score10a<=59){
      score_list.push(3 * unit10);
      unit_list.push(1 * unit10);
    } else if(score10a>=45 && score10a<=49){
      score_list.push(2 * unit10);
      unit_list.push(1 * unit10);
    } else if(score10a>=40 && score10a<=44){
      score_list.push(1 * unit10);
      unit_list.push(1 * unit10);
    } else {
      score_list.push(0);
      unit_list.push(1 * unit10);
    }

    let unit11 = document.querySelector('#test21a').value;
    let score11a = document.querySelector('#test22a').value;
    if (score11a >= 70 && score11a <= 100) {
      score_list.push(5 * unit11);
      unit_list.push(1 * unit11);
    } else if(score11a>=60 && score11a<=69){
      score_list.push(4 * unit11);
      unit_list.push(1 * unit11);
    } else if(score11a>=50 && score11a<=59){
      score_list.push(3 * unit11);
      unit_list.push(1 * unit11);
    } else if(score11a>=45 && score11a<=49){
      score_list.push(2 * unit11);
      unit_list.push(1 * unit11);
    } else if(score11a>=40 && score11a<=44){
      score_list.push(1 * unit11);
      unit_list.push(1 * unit11);
    } else {
      score_list.push(0);
      unit_list.push(1 * unit11);
    }
}

function newton(event) {
  event.preventDefault();
  score_list.forEach(function(element){
    total_Scores += element;
  });
  unit_list.forEach(function(element){
    total_Units += element;
  });
  gp = total_Scores/total_Units;
}


function gpCalculator6(event) {
  event.preventDefault();
    console.log("Score: " +score_list);
    console.log("Unit: " +unit_list);
    console.log("Total Score: " +total_Scores);
    console.log("Total Unit: " +total_Units);
    return document.querySelector('#resulta').innerHTML = " Your Grade Point Is: " +gp.toFixed(2);
}

function grades(event) {
  event.preventDefault();
  if (gp.toFixed(2) >= 4.50 && gp.toFixed(2) <= 5.00){
    return document.querySelector('#gradea').innerHTML = " First Class <br> <br> HONOURS ";
  } else if (gp.toFixed(2) >= 4.00 && gp.toFixed(2) <= 4.49){
    return document.querySelector('#gradea').innerHTML = " Second Class UPPER <br> <br> DIVISION ";
  } else if (gp.toFixed(2) >= 3.50 && gp.toFixed(2) <= 3.99){
    return document.querySelector('#gradea').innerHTML = " Second Class LOWER <br> <br> DIVISION ";
  } else if (gp.toFixed(2) >= 3.00 && gp.toFixed(2) <= 3.49){
    return document.querySelector('#gradea').innerHTML = " Thirld Class <br> <br> DIVISION ";
  } else if (gp.toFixed(2) >= 2.50 && gp.toFixed(2) <= 2.99){
    return document.querySelector('#gradea').innerHTML = " Pass";
  }else if (gp.toFixed(2) >= 2.00 && gp.toFixed(2) <= 2.49){
    return document.querySelector('#gradea').innerHTML = " Adviced To Withdraw ";
  }  else {
    return document.querySelector('#gradea').innerHTML = " Bros, Go And Do Yahoo!!! ";
  }
}

document.querySelector('#button').addEventListener('click', austria);
document.querySelector('#button').addEventListener('click', newton);
document.querySelector('#button').addEventListener('click', gpCalculator6);
document.querySelector('#button').addEventListener('click', grades);