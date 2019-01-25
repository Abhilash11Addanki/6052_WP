var secretkey = ["1167","0611"];
var comments = [];
var names = [];
function myFunction() {
	var pass = document.getElementById("pwd").value;
	var flag = false;
	if (pass===secretkey[0] || pass===secretkey[1]) {
		flag = true;
	}
	if (usr.value=="" || comment.value=="" || flag==false) {
		alert("Please Check The Details You Have Entered!");
	} else {
		addComments();
		document.getElementById("myForm").reset();
	}
}
function addComments() {
		var comment = document.getElementById("comment").value;
		var name = document.getElementById("usr").value;
		comments.push(comment);
		names.push(name);
		var code='';
		var i;
		for (i = comments.length - 1; i >= 0; i--) {
			code += '<center>'
			code += '<p><h3><b>'+ comments[i] + '</b></h3></p>';
			code += '<p><h5><b>'+ names[i] + '</b></h5></p><br>';
			code += '</center>'
		}
		document.getElementById("commentslist").innerHTML = code;
}