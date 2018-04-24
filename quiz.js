var Score = -1;
var marked = 0;
var red = "#f44254";
var green = "#8bf97b";
var black = "transparent";

function answered() {
  
  var incomplete = 0;
  var Q1check = $("input:radio[name='Q1']").is(":checked");  
  var Q1element = document.getElementById("Q1");
  if (Q1check) {
    Q1element.style.backgroundColor = black;
  } else {  
    Q1element.style.backgroundColor = red;
    incomplete = 1;
  }
  var Q2check = $("input:radio[name='Q2']").is(":checked");  
  var Q2element = document.getElementById("Q2");
  if (Q2check) {
    Q2element.style.backgroundColor = black;
  } else {
    Q2element.style.backgroundColor = red;
    incomplete = 1;
  }
  var Q3check = $("input:radio[name='Q3']").is(":checked");  
  var Q3element = document.getElementById("Q3");
  if (Q3check) {
    Q3element.style.backgroundColor = black;
  } else {
    Q3element.style.backgroundColor = red;
    incomplete = 1;
  }
  var Q4check = $("input:radio[name='Q4']").is(":checked");  
  var Q4element = document.getElementById("Q4");
  if (Q4check) {
    Q4element.style.backgroundColor = black;
  } else {
    Q4element.style.backgroundColor = red;
    incomplete = 1;
  }
  var Q5check = $("input:checkbox[name='Q5']").is(":checked");  
  var Q5element = document.getElementById("Q5");
  if (Q5check) {
    Q5element.style.backgroundColor = black;
  } else {
    Q5element.style.backgroundColor = red;
    incomplete = 1;
  }
  var Q6check = $("input:checkbox[name='Q6']").is(":checked");  
  var Q6element = document.getElementById("Q6");
  if (Q6check) {
    Q6element.style.backgroundColor = black;
  } else {
    Q6element.style.backgroundColor = red;
    incomplete = 1;
  }
  var Q7check = $("input:text[name='Q7']"); 
  var Q7element = document.getElementById("Q7");
  var i = 0;
  while(i<Q7check.length) {
    if (Q7check[i].value === ""){
      Q7element.style.backgroundColor = red;
        incomplete = 1;
    } else {
      Q7element.style.backgroundColor = black;
    }
    i++;
  }
  var Q8check = $("input:text[name='Q8']");  
  var Q8element = document.getElementById("Q8");
  if (Q8check[0].value === ""){
    Q8element.style.backgroundColor = red;
    incomplete = 1;
  } else {
    Q8element.style.backgroundColor = black;
  }
  if(incomplete == "1"){
     alert("Please complete all questions!")
  } else {
    markTest();
    showCorrect();
  }
  
}

function markTest() {
  Score = 0;
  marked = 1;
  
  var Q1check = $("input:radio[name='Q1']:checked").val();
  var Q1result = $("#Q1result");
  if (Q1check == "Correct") {
    Q1result.html("Correct");
    Q1result.css({'color':green});
    Score++;
  } else {
    Q1result.html("Incorrect, the statement is False");
    Q1result.css({'color':red});
  }
  
  var Q2check = $("input:radio[name='Q2']:checked").val();
  var Q2result = $("#Q2result");
  if (Q2check == "Correct") {
    Q2result.html("Correct");
    Q2result.css({'color':green});
    Score++;
  } else {
    Q2result.html("Incorrect, the statement is True");
    Q2result.css({'color':red});
  }
  
  var Q3check = $("input:radio[name='Q3']:checked").val();
  var Q3result = $("#Q3result");
  if (Q3check == "Correct") {
    Q3result.html("Correct");
    Q3result.css({'color':green});
    Score++;
  } else {
    Q3result.html("Incorrect, Helena Ravenclaw was known as the grey lady");
    Q3result.css({'color':red});
  }
  
  var Q4check = $("input:radio[name='Q4']:checked").val();
  var Q4result = $("#Q4result");
  if (Q4check == "Correct") {
    Q4result.html("Correct");
    Q4result.css({'color':green});
    Score++;
  } else {
    Q4result.html("Incorrect, he got his eyes from his mother");
    Q4result.css({'color':red});
  }
  
  var c15 = document.getElementById("5c1").checked;
  var c25 = document.getElementById("5c2").checked;
  var c35 = document.getElementById("5c3").checked;
  var ic5 = document.getElementById("5ic").checked;
  var Q5result = $("#Q5result");
  if (c15 && c25 && c35 && !ic5) {
    Q5result.html("Correct");
    Q5result.css({'color': green});
    Score++;
  } else {
    Q5result.html("Incorrect, everything but the Cockroach Cluster");
    Q5result.css({'color':red});
  }
  
  var c16 = document.getElementById("6c1").checked;
  var c26 = document.getElementById("6c2").checked;
  var c36 = document.getElementById("6c3").checked;
  var ic6 = document.getElementById("6ic").checked;
  var Q6result = $("#Q6result");
  if (c16 && c26 && c36 && !ic6) {
    Q6result.html("Correct");
    Q6result.css({'color': green});
    Score++;
  } else {
    Q6result.html("Incorrect, did someone cast Obliviate on you? Too bad it is forgivable");
    Q6result.css({'color':red});
  }
  
  var hp = document.getElementById("hp").value;
  hp = hp.replace(/\s/g, "");
  hp = hp.toLowerCase();
  var vk = document.getElementById("vk").value;
  vk = vk.replace(/\s/g, "");
  vk = vk.toLowerCase();
  var fd = document.getElementById("fd").value;
  fd = fd.replace(/\s/g, "");
  fd = fd.toLowerCase();
  var cd = document.getElementById("cd").value;
  cd = cd.replace(/\s/g, "");
  cd = cd.toLowerCase();
  var Q7result = $("#Q7result");
  if ((hp == "D" || hp == "d") && (vk == "C" || vk == "c") && (fd ="A" || fd == "a") && (cd == "B" || cd == "b"))   {
    Q7result.html("Correct");
    Q7result.css({'color': green});
    Score++;
  } else {
    Q7result.html("Incorrect, Harry - Ridgeback, Victor - Fireball, Fleur - Welsh Green, Cedrick - Snort-Snout");
    Q7result.css({'color':red});
  }
  
  var norberta = document.getElementById("norberta").value;
  norberta = norberta.replace(/\s/g, "");
  norberta = norberta.toLowerCase();
  var Q8result = $("#Q8result");
  if (norberta == "Norberta" || norberta == "norberta")   {
    Q8result.html("Correct");
    Q8result.css({'color': green});
    Score++;
  } else {
    Q8result.html("Incorrect, after realising it was a female the name changed to Norberta");
    Q8result.css({'color':red});
  }
  var score = $("#Score");
  score.html("<br>Score:<h2>"+Score+"/8</h2>");
}

function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var username_requirements = /^[A-Z]+[A-Za-z0-9]{4,14}$/;
  var password_requirements = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!?,.]).{8,}$/;
  if (!username_requirements.test(username)) {
    alert("Username has incorrect format, username can be between 5-15 characters. Only containing A-Z/a-Z/0-9 starting with A-Z.");
    return false;
  }
  if (!password_requirements.test(password)) {
    alert("Password has incorrect format, password must be at least eight characters long and contain one or more of each of the following: lower-case letter, upper-case letter, digit, punctuation mark");
    return false;
  }
  return true;
}

window.onload = function() {
  var quizAnswers = document.getElementById("quizAnswers");
  var userForm = document.getElementById("userForm");
  
  quizAnswers.onsubmit = function(e) {
    if (marked === 0){
    e.preventDefault();
    answered();
    } else {
      alert("You have already finished the quiz.");
    }
  }
  
  userForm.onsubmit = function(e) {
    e.preventDefault();
    if (Score == -1) {
      alert("Can only register a score after completing the quiz!");
    } else { 
      var valid = validate();
      if (valid){
        alert("Username and Password validated");
        /*var data = $("#user").serializeArray();
        data.push({name: "Score", value : Score});
        var post = $.post(".php", data)
        post.done();
        post.fail();
        post.always();
        */
      } else {
        alert ("Invalid Credentials")
      }
    }
  }
  
}
