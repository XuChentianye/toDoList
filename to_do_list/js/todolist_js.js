if (localStorage.getItem('count') == NaN || localStorage.getItem('count') == undefined) {
	localStorage.setItem('count', 0);
}

function add() {
	var count = parseInt(localStorage.getItem('count'));
	var temp = document.getElementById("inputBox");
	var text = temp.value;
	if (text == "") {
		alert("输入框不能为空！");
		return 0;
	}
	temp.value = "";
	var daiban = document.getElementById("daiban");
	var addTask = document.createElement("li");
	var addButton1 = document.createElement("button");
	var addButton2 = document.createElement("button");
	addButton1.innerText = "删除";
	addButton1.onclick = function() {
		daiban.removeChild(this.previousElementSibling.previousElementSibling);
		daiban.removeChild(this.previousElementSibling);
		daiban.removeChild(this);
	}
	addButton2.innerText = "完成";
	addButton2.onclick = function() {
		this.previousElementSibling.style.color = "darkgray";
		this.previousElementSibling.style.textDecoration = "line-through";
	}
	addTask.innerHTML = "<br/><br/>" + text;
	daiban.insertBefore(addButton1, daiban.firstElementChild);
	daiban.insertBefore(addButton2, daiban.firstElementChild);
	daiban.insertBefore(addTask, daiban.firstElementChild);
	count++;
	localStorage.setItem('count', count);
	localStorage.setItem(localStorage.getItem('count'), text);
}

function load() {
	if (localStorage.getItem('count') != '0') {
		var count = parseInt(localStorage.getItem('count'));
		for (var i = 1; i <= count; i++) {
			var daiban = document.getElementById("daiban");
			var addTask = document.createElement("li");
			var addButton1 = document.createElement("button");
			var addButton2 = document.createElement("button");
			addButton1.innerText = "删除";
			addButton1.onclick = function() {
				daiban.removeChild(this.previousElementSibling.previousElementSibling);
				daiban.removeChild(this.previousElementSibling);
				daiban.removeChild(this);
			}
			addButton2.innerText = "完成";
			addButton2.onclick = function() {
				this.previousElementSibling.style.color = "darkgray";
				this.previousElementSibling.style.textDecoration = "line-through";
			}
			var temp = localStorage.getItem(i.toString());
			addTask.innerHTML = "<br/><br/>" + temp;
			daiban.insertBefore(addButton1, daiban.firstElementChild);
			daiban.insertBefore(addButton2, daiban.firstElementChild);
			daiban.insertBefore(addTask, daiban.firstElementChild);
		}
	}
}
