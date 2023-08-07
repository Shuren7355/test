document.getElementById("searchInput").addEventListener("keyup", function() {
  var input = this.value.toLowerCase();
  var subjects = document.getElementById("subjectList").getElementsByTagName("li");

  for (var i = 0; i < subjects.length; i++) {
    var subject = subjects[i].textContent.toLowerCase();
    var subjectElement = subjects[i];

    if (subject.indexOf(input) > -1) {
      subjectElement.style.display = "";
    } else {
      subjectElement.style.display = "none";
    }
  }
});