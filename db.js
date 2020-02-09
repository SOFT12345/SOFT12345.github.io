var person1 = {
    matricNo: "HR201703428",
    name: "Idowu Elijah Adewale",
    course: "Computer Engineering",
    level: "HND II",
    programme: "Higher National Diploma",
    image: "/img/IMG_20181225_095034.jpg"
}
  var person2 = {
    matricNo: "HR201700810",
    name: "Fabiyi Gbenga John",
    course: "Computer Engineering",
    level: "HND II",
    programme: "Higher National Diploma",
    image: ""
}
  var person3 = {
    matricNo: "HR201702871",
    name: "ADELEKE TAWAKALTU ADEBIMPE",
    course: "Computer Engineering",
    level: "HND II",
    programme: "Higher National Diploma",
    image: ""
}
  var person4 = {
    matricNo: "HR201701122",
    name: "JOHN TOSIN MICHAEL",
    course: "Computer Engineering",
    level: "HND II",
    programme: "Higher National Diploma",
    image: ""
}
  var person5 = {
    matricNo: "HR201704158",
    name: "OKPODU DANIEL OGIELU",
    course: "Computer Engineering",
    level: "HND II",
    programme: "Higher National Diploma",
    image: ""
}
  var person6 = {
    matricNo: "HR201703194",
    name: "ARIYO SODIQ ADESOLA",
    course: "Computer Engineering",
    level: "HND II",
    programme: "Higher National Diploma",
    image: ""
  }
  var person7 = {
    matricNo: "HR201702503",
    name: "TUNDE IBUKUN",
    course: "Computer Engineering",
    level: "HND II",
    programme: "Higher National Diploma",
    image: ""
  }
  var person8 = {
    matricNo: "HR201701286",
    name: "ADEYEMI BOLADE EMMANUEL",
    course: "Computer Engineering",
    level: "HND II",
    programme: "Higher National Diploma",
    image: ""
  }
  var person9 = {
    matricNo: "HR201703078",
    name: "AMUPITAN MOSES FUNSHO",
    course: "Computer Engineering",
    level: "HND II",
    programme: "Higher National Diploma",
    image: ""
  }
  var person10 = {
    matricNo: "HR201703818",
    name: "IKPESA EWOMAZINO EZEKIEL",
    course: "Computer Engineering",
    level: "HND II",
    programme: "Higher National Diploma",
    image: ""
  }
  var person11 = {
    matricNo: "HR201702157",
    name: "ADIMULA SAMSON ADEBAYO",
    course: "Computer Engineering",
    level: "HND II",
    programme: "Higher National Diploma",
    image: ""
  }
  var person12 = {
    matricNo: "HR201701256",
    name: "SALAAM RASAQ DAMILARE",
    course: "Computer Engineering",
    level: "HND II",
    programme: "Higher National Diploma",
    image: ""
  }
  
  var person13 = {
    matricNo: "HR201702597",
    name: "DAVID ABIDEMI JULIANAH",
    course: "Computer Engineering",
    level: "HND II",
    programme: "Higher National Diploma",
    image: ""
  }
  
  var person14 = {
    matricNo: "HR201702975",
    name: "AKILAPA OLAWALE JAMES",
    course: "Computer Engineering",
    level: "HND II",
    programme: "Higher National Diploma",
    image: ""
  }
  
  var person15 = {
    matricNo: "HR201702528",
    name: "ONI MICHAEL ADEBOWALE",
    course: "Computer Engineering",
    level: "HND II",
    programme: "Higher National Diploma",
    image: ""
  }
  var person16 = {
    matricNo: "HR201701402",
    name: "HAMMED YESIRU ADESINA",
    course: "Computer Engineering",
    level: "HND II",
    programme: "Higher National Diploma",
    image: ""
  }
  var person17 = {
    matricNo: "HR201701794",
    name: "OLADOSU QUDUS",
    course: "Computer Engineering",
    level: "HND II",
    programme: "Higher National Diploma",
    image: ""
  }
  
  function michael(event){
    event.preventDefault(); 
    let getDetails = document.querySelector('#details').value;
    if(getDetails === person1.matricNo.toLowerCase() || getDetails === person1.matricNo){
      console.log(person1);
      return document.querySelector('#showName').innerHTML ="Name:   " +person1.name + "<br> "+ "<br> " + "Matric No:   "+person1.matricNo+ "<br> "+ "<br> "+ "Course:   " +person1.course+ "<br> "+ "<br> " + "Level:   " +person1.level+ "<br> "+ "<br> "+ "Programme:   " +person1.programme+ "<br> "+ "<br> " +person1.image;
    } else if(getDetails === person2.matricNo.toLowerCase() || getDetails === person2.matricNo){
      console.log(person2);
      return document.querySelector('#showName').innerHTML ="Name:   " +person2.name + "<br> "+ "<br> " + "Matric No:   "+person2.matricNo+ "<br> "+ "<br> "+ "Course:   " +person2.course+ "<br> "+ "<br> " + "Level:   " +person2.level+ "<br> "+ "<br> "+ "Programme:   " +person2.programme;
    }  else if(getDetails === person3.matricNo.toLowerCase() || getDetails === person3.matricNo){
      consolelog(person3);
      return document.querySelector('#showName').innerHTML ="Name:   " +person3.name + "<br> "+ "<br> " + "Matric No:   "+person3.matricNo+ "<br> "+ "<br> "+ "Course:   " +person3.course+ "<br> "+ "<br> " + "Level:   " +person3.level+ "<br> "+ "<br> "+ "Programme:   " +person3.programme;
    }  else if(getDetails === person4.matricNo.toLowerCase() || getDetails === person4.matricNo){
      consolelog(person4);
      return document.qu4rySelector('#showName').innerHTML ="Name:   " +person4.name + "<br> "+ "<br> " + "Matric No:   "+person4.matricNo+ "<br> "+ "<br> "+ "Course:   " +person4.course+ "<br> "+ "<br> " + "Level:   " +person4.level+ "<br> "+ "<br> "+ "Programme:   " +person4.programme;
    }  else if(getDetails === person5.matricNo.toLowerCase() || getDetails === person5.matricNo){
      console.log(person5);
      return document.queySelector('#showName').innerHTML ="Name:   " +person5.name + "<br> "+ "<br> " + "Matric No:   "+person5.matricNo+ "<br> "+ "<br> "+ "Course:   " +person5.course+ "<br> "+ "<br> " + "Level:   " +person5.level+ "<br> "+ "<br> "+ "Programme:   " +person5.programme;
    }  else if(getDetails === person6.matricNo.toLowerCase() || getDetails === person6.matricNo){
      console.log(person6);
      return document.querySelector('#showName').innerHTML ="Name:   " +person6.name + "<br> "+ "<br> " + "Matric No:   "+person6.matricNo+ "<br> "+ "<br> "+ "Course:   " +person6.course+ "<br> "+ "<br> " + "Level:   " +person6.level+ "<br> "+ "<br> "+ "Programme:   " +person6.programme;
    }  else if(getDetails === person7.matricNo.toLowerCase() || getDetails === person7.matricNo){
      console.log(person7);
      return document.querySelector('#showName').innerHTML ="Name:   " +person7.name + "<br> "+ "<br> " + "Matric No:   "+person7.matricNo+ "<br> "+ "<br> "+ "Course:   " +person7.course+ "<br> "+ "<br> " + "Level:   " +person7.level+ "<br> "+ "<br> "+ "Programme:   " +person7.programme;
    }  else if(getDetails === person8.matricNo.toLowerCase() || getDetails === person8.matricNo){
      console.log(person8);
      return document.querySelector('#showName').innerHTML ="Name:   " +person8.name + "<br> "+ "<br> " + "Matric No:   "+person8.matricNo+ "<br> "+ "<br> "+ "Course:   " +person8.course+ "<br> "+ "<br> " + "Level:   " +person8.level+ "<br> "+ "<br> "+ "Programme:   " +person8.programme;
    }  else if(getDetails === person9.matricNo.toLowerCase() || getDetails === person9.matricNo){
      console.log(person9);
      return document.querySelector('#showName').innerHTML ="Name:   " +person9.name + "<br> "+ "<br> " + "Matric No:   "+person9.matricNo+ "<br> "+ "<br> "+ "Course:   " +person9.course+ "<br> "+ "<br> " + "Level:   " +person9.level+ "<br> "+ "<br> "+ "Programme:   " +person9.programme;
    }  else if(getDetails === person10.matricNo.toLowerCase() || getDetails === person10.matricNo){
      console.log(person10);
      return document.querySelector('#showName').innerHTML ="Name:   " +person10.name + "<br> "+ "<br> " + "Matric No:   "+person10.matricNo+ "<br> "+ "<br> "+ "Course:   " +person10.course+ "<br> "+ "<br> " + "Level:   " +person10.level+ "<br> "+ "<br> "+ "Programme:   " +person10.programme;
    }  else if(getDetails === person11.matricNo.toLowerCase() || getDetails === person11.matricNo){
      console.log(person11);
      return document.querySelector('#showName').innerHTML ="Name:   " +person11.name + "<br> "+ "<br> " + "Matric No:   "+person11.matricNo+ "<br> "+ "<br> "+ "Course:   " +person11.course+ "<br> "+ "<br> " + "Level:   " +person11.level+ "<br> "+ "<br> "+ "Programme:   " +person11.programme;
    }  else if(getDetails === person12.matricNo.toLowerCase() || getDetails === person12.matricNo){
      console.log(person12);
      return document.querySelector('#showName').innerHTML ="Name:   " +person12.name + "<br> "+ "<br> " + "Matric No:   "+person12.matricNo+ "<br> "+ "<br> "+ "Course:   " +person12.course+ "<br> "+ "<br> " + "Level:   " +person12.level+ "<br> "+ "<br> "+ "Programme:   " +person12.programme;
    }  else if(getDetails === person13.matricNo.toLowerCase() || getDetails === person13.matricNo){
      console.log(person13);
      return document.querySelector('#showName').innerHTML ="Name:   " +person13.name + "<br> "+ "<br> " + "Matric No:   "+person13.matricNo+ "<br> "+ "<br> "+ "Course:   " +person13.course+ "<br> "+ "<br> " + "Level:   " +person13.level+ "<br> "+ "<br> "+ "Programme:   " +person13.programme;
    }  else if(getDetails === person14.matricNo.toLowerCase() || getDetails === person14.matricNo){
      console.log(person14);
      return document.querySelector('#showName').innerHTML ="Name:   " +person14.name + "<br> "+ "<br> " + "Matric No:   "+person14.matricNo+ "<br> "+ "<br> "+ "Course:   " +person14.course+ "<br> "+ "<br> " + "Level:   " +person14.level+ "<br> "+ "<br> "+ "Programme:   " +person14.programme;
    }  else if(getDetails === person15.matricNo.toLowerCase() || getDetails === person15.matricNo){
      console.log(person15);
      return document.querySelector('#showName').innerHTML ="Name:   " +person15.name + "<br> "+ "<br> " + "Matric No:   "+person15.matricNo+ "<br> "+ "<br> "+ "Course:   " +person15.course+ "<br> "+ "<br> " + "Level:   " +person15.level+ "<br> "+ "<br> "+ "Programme:   " +person15.programme;
    }  else if(getDetails === person16.matricNo.toLowerCase() || getDetails === person16.matricNo){
      console.log(person16);
      return document.querySelector('#showName').innerHTML ="Name:   " +person16.name + "<br> "+ "<br> " + "Matric No:   "+person16.matricNo+ "<br> "+ "<br> "+ "Course:   " +person16.course+ "<br> "+ "<br> " + "Level:   " +person16.level+ "<br> "+ "<br> "+ "Programme:   " +person16.programme;
    }  else if(getDetails === person17.matricNo.toLowerCase() || getDetails === person17.matricNo){
      console.log(person17);
      return document.querySelector('#showName').innerHTML ="Name:   " +person17.name + "<br> "+ "<br> " + "Matric No:   "+person17.matricNo+ "<br> "+ "<br> "+ "Course:   " +person17.course+ "<br> "+ "<br> " + "Level:   " +person17.level+ "<br> "+ "<br> "+ "Programme:   " +person17.programme;
    }   else{
      $(document).ready(function(){
        $("#zino-click").click(function(){
          $("#showName").text(function(){
            return("Welcome " + $("#details").val());
          });
        });
      });
    }
  }
  
  
  document.querySelector('#zino-click').addEventListener('click', michael);
  // document.querySelector('#zino-click').addEventListener('click', gfg_Run);
  
  // var el_down = document.getElementById("#showName");
  // el_down.innerHTML = JSON.stringify(person1);