window.onload = function(){
	var flag = 1;
	document.getElementById("screen").value = "0";
	var arr = document.getElementsByClassName("$input");
	for(var i = 0;i < arr.length;i++){
		arr[i].onclick = function(){
			if(flag == 0){//上一次按键为‘=’
				flag = 1;
				var message = document.getElementById("screen");
				if(this.innerHTML=='+'||this.innerHTML=='-'||this.innerHTML=='*'||this.innerHTML=='/'){
					message.value += this.innerHTML;
				}
				else if(this.innerHTML=='.'){
					message.value = "0"+this.innerHTML;
				}
				else{
					message.value = this.innerHTML;
				}
			}
			else{
				var message=document.getElementById("screen");
				if(message.value == "0"){
					if(this.innerHTML>='0'&&this.innerHTML<='9'){
						message.value = this.innerHTML;
					}
					else if(this.innerHTML=='('){
						message.value = this.innerHTML;
					}
					else{
						message.value += this.innerHTML;
					}
				}
				else{
					var len = message.value.length;
					var temp = message.value[len-1];
					if(temp=='+'||temp=='-'||temp=='*'||temp=='/'||temp=='.'){
						if(this.innerHTML=='+'||this.innerHTML=='-'||this.innerHTML=='*'||this.innerHTML=='/'||this.innerHTML=='.'){
							message.value = message.value.substring(0, message.value.length - 1);
						}
					}
					else if(this.innerHTML=='('){
						if((temp>='0'&&temp<='9')||temp==')'){
							message.value += "*";
							
						}
						else if(temp=='.'){
							message.value += "0";
							
						}
					}
					else if(len > 1&&temp == '0'){
						if((message.value[len-2]=='+'||message.value[len-2]=='-'||message.value[len-2]=='*'||message.value[len-2]=='/')&&(this.innerHTML>='0'&&this.innerHTML<='9')){
							message.value = message.value.substring(0, message.value.length - 1);
						}
					}
					message.value += this.innerHTML;

				}
			}
			var _size = document.getElementById("screen");
			if(_size.value.length>25&&_size.value.length<29){
				_size.style.fontSize = 22+"px";
			}
			else if(_size.value.length>28){
				_size.style.fontSize = 19+"px";
			}
			else if(_size.value.length<26){
				_size.style.fontSize = 25+"px";
			}//控制字体
		}
	}

	document.getElementById("ce").onclick = function(){
		var message=document.getElementById("screen");
		document.getElementById("screen").style.fontSize = 25+"px";
		message.value = "0";
	}

	document.getElementById("delete").onclick = function(){
		var message = document.getElementById("screen");
		if(message.value.length!=1){
			message.value = message.value.substring(0, message.value.length - 1);
		}
		else{
			message.value = "0";
		}
		var _size = document.getElementById("screen");
		if(_size.value.length>25&&_size.value.length<29){
			_size.style.fontSize = 22+"px";
		}
		else if(_size.value.length>28){
			_size.style.fontSize = 19+"px";
		}
		else if(_size.value.length<26){
			_size.style.fontSize = 25+"px";
		}
	}

	document.getElementById("evaluate").onclick = function(){
		flag = 0;
		document.getElementById("screen").style.fontSize = 25+"px";
		var m = Math.pow(10,10);
		var f = document.getElementById("screen").value;

		try{
			document.getElementById("screen").value = parseFloat(eval(f).toFixed(10));
		}  

		catch(exception){
			alert("'"+document.getElementById("screen").value+"'不是合法算式!");
			document.getElementById("screen").value = "0";
			return;
		}
		if(document.getElementById("screen").value=="undefined"){
			document.getElementById("screen").value = "0";
			alert("请输入算式！");
		}
		else if(document.getElementById("screen").value=="NaN"||document.getElementById("screen").value=="Infinity"||document.getElementById("screen").value=="-Infinity"){
			document.getElementById("screen").value = "0";
			alert("除数不能为0！");
		}
	}
}


