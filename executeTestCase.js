var myVar = setInterval(function(){
    console.log('get printed on every 3 second ');
    var iframe = document.getElementsByTagName("frame")[0];
	var innerDoc = iframe.contentDocument || iframe.contentWindow.document;

	var tree = innerDoc.getElementsByClassName("x-tree-node-expanded")[1];

	var lis = tree.nextElementSibling.childElements();

	var count = lis.length;

	for(var k = 0; k < count; k++){
		var div = lis[k].getElementsByTagName("div")[0];

		// find span hiden để tìm pass or not pass
		var checkPass = div.childElements()[3].childElements()[0].childElements()[0];

		var str = checkPass.title.toString();
		console.log("check pass " + str);


		if(str != "Passed"){

			div.childElements()[3].click();

			var id = div.getAttribute("ext:tree-node-id");
			var numid = parseInt(id) + 1;
			console.log("ID " + id);

	        var iframe2 = document.getElementsByTagName("frame")[1];
			var innerDoc2 = iframe2.contentDocument || iframe2.contentWindow.document;

			var selecs = innerDoc2.getElementsByClassName('step_status');
			var n = selecs.length;
			console.log("do dai cua n: " + n);

			for(var i = 0; i < n; i++){
				selecs[i].setValue("p");
			}

			var elm = innerDoc2.getElementById("save_results");

			innerDoc2.getElementById('fastExecNextp_'+numid).click();
			break;
			
		}
		if(k == count-1){
			clearInterval(myVar);
		}
		
	}

},3000);
