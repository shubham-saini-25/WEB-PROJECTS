function courses() {
    var c = document.getElementById("cours").value;

    if (c == "B.Sc.") {
        document.getElementById("1").innerHTML = "Mathematics";
        document.getElementById("1").value = "Mathematics";
        document.getElementById("2").innerHTML = "Computer Science";
        document.getElementById("2").value = "Computer Science";
        document.getElementById("3").innerHTML = "Biology";
        document.getElementById("3").value = "Biology";
        document.getElementById("4").innerHTML = "Statics";
        document.getElementById("4").value = "Statics";
        document.getElementById("5").innerHTML = "Biotechnology";
        document.getElementById("5").value = "Biotechnology";
    }
    else if (c == "B.Com.") {
        document.getElementById("1").innerHTML = "Accounts & Finance";
        document.getElementById("1").value = "Accounts & Finance";
        document.getElementById("2").innerHTML = "Banking & Insurance";
        document.getElementById("2").value = "Banking & Insurance";
        document.getElementById("3").innerHTML = "Marketing";
        document.getElementById("3").value = "Marketing";
        document.getElementById("4").innerHTML = "Economics";
        document.getElementById("4").value = "Economics";
        document.getElementById("5").innerHTML = "Financial Market";
        document.getElementById("5").value = "Financial Market";
    }
    else if (c == "BCA") {
        document.getElementById("1").innerHTML = "Systems Analysis";
        document.getElementById("1").value = "Systems Analysis";
        document.getElementById("2").innerHTML = "Computer Graphics";
        document.getElementById("2").value = "Computer Graphics";
        document.getElementById("3").innerHTML = "Accounting Applications";
        document.getElementById("3").value = "Accounting Applications";
        document.getElementById("4").innerHTML = "Animation";
        document.getElementById("4").value = "Animation";
        document.getElementById("5").innerHTML = "Cyber Law";
        document.getElementById("5").value = "Cyber Law";
    }
    else if (c == "B.A.") {
        document.getElementById("1").innerHTML = "Political Science";
        document.getElementById("1").value = "Political Science";
        document.getElementById("2").innerHTML = "English";
        document.getElementById("2").value = "English";
        document.getElementById("3").innerHTML = "History";
        document.getElementById("3").value = "History";
        document.getElementById("4").innerHTML = "Philosophy";
        document.getElementById("4").value = "Philosophy";
        document.getElementById("5").innerHTML = "Geography";
        document.getElementById("5").value = "Geography";
    }
    else {
        document.getElementById("1").innerHTML = "Computer Science";
        document.getElementById("1").value = "Computer Science";
        document.getElementById("2").innerHTML = "Information Technology";
        document.getElementById("2").value = "Information Technology";
        document.getElementById("3").innerHTML = "Electrical Engineering";
        document.getElementById("3").value = "Electrical Engineering";
        document.getElementById("4").innerHTML = "Mechanical Engineering";
        document.getElementById("4").value = "Mechanical Engineering";
        document.getElementById("5").innerHTML = "Electonics & Communications";
        document.getElementById("5").value = "Electonics & Communications";
    }
}
