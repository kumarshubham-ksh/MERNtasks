function checkfn() {
  var fn = document.getElementById("fn").value;
  if (fn.length < 4) {
    document.getElementById("fnpop").innerHTML = "POOR";
    document.getElementById("fnpop").style.color = "red";
  } else {
    document.getElementById("fnpop").innerHTML = "GOOD";
    document.getElementById("fnpop").style.color = "green";
  }
}
function checkln() {
  var ln = document.getElementById("ln").value;
  if (ln.length < 4) {
    document.getElementById("lnpop").innerHTML = "POOR";
    document.getElementById("lnpop").style.color = "red";
  } else {
    document.getElementById("lnpop").innerHTML = "GOOD";
    document.getElementById("lnpop").style.color = "green";
  }
}
function checkmail() {
  var mail = document.getElementById("mail").value;
  if (mail.length < 10) {
    document.getElementById("mailpop").innerHTML = "POOR";
    document.getElementById("mailpop").style.color = "red";
  } else {
    document.getElementById("mailpop").innerHTML = "GOOD";
    document.getElementById("mailpop").style.color = "green";
  }
}
function checkpass() {
  var pass = document.getElementById("pass").value;
  if (pass.length < 8) {
    document.getElementById("passpop").innerHTML = "POOR";
    document.getElementById("passpop").style.color = "red";
  } else {
    document.getElementById("passpop").innerHTML = "GOOD";
    document.getElementById("passpop").style.color = "green";
  }
}
function checkrepass() {
  var repass = document.getElementById("repass").value;
  if (repass.length < 8) {
    document.getElementById("repasspop").innerHTML = "POOR OR MISMATCH";
    document.getElementById("repasspop").style.color = "red";
  } else {
    document.getElementById("repasspop").innerHTML = "GOOD";
    document.getElementById("repasspop").style.color = "green";
  }
}
function checkage() {
  var age = document.getElementById("age").value;
  if (age.length < 1) {
    document.getElementById("agepop").innerHTML = "POOR";
    document.getElementById("agepop").style.color = "red";
  } else {
    document.getElementById("agepop").innerHTML = "GOOD";
    document.getElementById("agepop").style.color = "green";
  }
}
function checkphno() {
  var phno = document.getElementById("phno").value;
  if (phno.length < 10) {
    document.getElementById("phnopop").innerHTML = "POOR";
    document.getElementById("phnopop").style.color = "red";
  } else {
    document.getElementById("phnopop").innerHTML = "GOOD";
    document.getElementById("phnopop").style.color = "green";
  }
}
function checkadd() {
  var add = document.getElementById("add").value;
  if (add.length < 10) {
    document.getElementById("addpop").innerHTML = "POOR";
    document.getElementById("addpop").style.color = "red";
  } else {
    document.getElementById("addpop").innerHTML = "GOOD";
    document.getElementById("addpop").style.color = "green";
  }
}
function checkstate() {
  var state = document.getElementById("state").value;
  if (state.length < 6) {
    document.getElementById("statepop").innerHTML = "POOR";
    document.getElementById("statepop").style.color = "red";
  } else {
    document.getElementById("statepop").innerHTML = "GOOD";
    document.getElementById("statepop").style.color = "green";
  }
}
function verify() {
  var fn = document.getElementById("fn").value;
  var ln = document.getElementById("ln").value;
  var mail = document.getElementById("mail").value;
  var pass = document.getElementById("pass").value;
  var repass = document.getElementById("repass").value;
  var age = document.getElementById("age").value;
  var phno = document.getElementById("phno").value;
  var add = document.getElementById("add").value;
  var state = document.getElementById("state").value;
  if (
    fn.length < 4 ||
    ln.length < 4 ||
    mail.length < 10 ||
    pass.length < 8 ||
    repass.length < 8 ||
    age.length < 1 ||
    phno.length < 10 ||
    add.length < 10 ||
    state.length < 6
  ) {
    return false;
  }
  return true;
}
document.getElementById("submit").addEventListener("click", function () {
  location.reload();
});
