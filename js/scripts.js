$(document).ready(function() {
  $("#quiz").submit(function(event) {
    event.preventDefault();
    $("#quiz-hide").hide();

    const question1 = $("input:radio[name=question1]:checked").val();
    const question2 = $("input:radio[name=question2]:checked").val();
    const question3 = $("input:radio[name=question3]:checked").val();
    const question4 = $("input:radio[name=question4]:checked").val();
    const question5 = $("input:radio[name=question5]:checked").val();
    let person = $("input#person").val();
    let languagePreference = 0;
    
    if (question1 === "interest1") {
      languagePreference ++;
    } else if (question1 === "interest2") {
      languagePreference += 2;
    } else {
      languagePreference += 3;
    };

    if (question2 === "interest1") {
      languagePreference ++;
    } else if (question2 === "interest2") {
      languagePreference += 2;
    } else {
      languagePreference += 3;
    };

    if (question3 === "interest1") {
      languagePreference ++;
    } else if (question3 === "interest2") {
      languagePreference += 2;
    } else {
      languagePreference += 3;
    };

    if (question4 === "interest1") {
      languagePreference ++;
    } else if (question4 === "interest2") {
      languagePreference += 2;
    } else {
      languagePreference += 3;
    };

    if (question5 === "interest1") {
      languagePreference ++;
    } else if (question5 === "interest2") {
      languagePreference += 2;
    } else {
      languagePreference += 3;
    };

  
    if (languagePreference <= 8) {
      $(".person").text(person);
      $("#languageJS").show();
    } else if (languagePreference <= 11) {
      $(".person").text(person);
      $("#languagePy").show();
    } else {
      $(".person").text(person);
      $("#languageC").show();
      };
  });
});