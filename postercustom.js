$(document).ready(function(){

$(function() {
    var value1 = parseInt(document.getElementById("result1").value, 10);
	var clickCount = localStorage.getItem('clickCount');
    document.getElementById("result1").value = clickCount;
});

$(function() {
    var value2 = parseInt(document.getElementById("result2").value, 10);
	var clickCount2 = localStorage.getItem('clickCount2');
    document.getElementById("result2").value = clickCount2;
});

$(function() {
    var value3 = parseInt(document.getElementById("result3").value, 10);
	var clickCount3 = localStorage.getItem('clickCount3');
    document.getElementById("result3").value = clickCount3;
});

$(function() {
    var value4 = parseInt(document.getElementById("result4").value, 10);
	var clickCount4 = localStorage.getItem('clickCount4');
    document.getElementById("result4").value = clickCount4;
});

$(function() {
    var value5 = parseInt(document.getElementById("result5").value, 10);
	var clickCount5 = localStorage.getItem('clickCount5');
    document.getElementById("result5").value = clickCount5;
});

$(function() {
    var value6 = parseInt(document.getElementById("result6").value, 10);
	var clickCount6 = localStorage.getItem('clickCount6');
    document.getElementById("result6").value = clickCount6;
});

$(function() {
    var value7 = parseInt(document.getElementById("result7").value, 10);
	var clickCount7 = localStorage.getItem('clickCount7');
    document.getElementById("result7").value = clickCount7;
});

$(function() {
    var value8 = parseInt(document.getElementById("result8").value, 10);
	var clickCount8 = localStorage.getItem('clickCount8');
    document.getElementById("result8").value = clickCount8;
});

/*
 $(function() {
            $('form').bind('submit', function(){
                $.ajax({
                    type: 'post',
                    url: "insert.php",
                    data: $("form").serialize(),
                    success: function() {
                    }
                });
                return false;
            });
        });
*/
		
$('#box1').click( function() {
	 $.ajax({
        url:"insert.php",
        type:"POST",
		success: function(response){
        $("#clicked").html(response);
   }
    });
    var value = parseInt(document.getElementById("result1").value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById("result1").value = value;
	localStorage.setItem('clickCount', value);
});

$('#submit2').click( function() {
	 $.ajax({
        url:"insert2.php",
        type:"POST",
		success: function(response){
        $("#clicked").html(response);
   }
    });
    var value = parseInt(document.getElementById("result2").value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById("result2").value = value;
	document.getElementById("clicked").innerHTML = value;
	localStorage.setItem('clickCount2', value);
	  
});

$('#submit3').click( function() {
	 $.ajax({
        url:"insert3.php",
        type:"POST",
		success: function(response){
        $("#clicked").html(response);
   }
    });
    var value = parseInt(document.getElementById("result3").value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById("result3").value = value;
	document.getElementById("clicked").innerHTML = value;
	localStorage.setItem('clickCount3', value);
	  
});

$('#submit4').click( function() {
	 $.ajax({
        url:"insert4.php",
        type:"POST",
		success: function(response){
        $("#clicked").html(response);
   }
    });
    var value = parseInt(document.getElementById("result4").value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById("result4").value = value;
	document.getElementById("clicked").innerHTML = value;
	localStorage.setItem('clickCount4', value);
	  
});

$('#submit5').click( function() {
	 $.ajax({
        url:"insert5.php",
        type:"POST",
		success: function(response){
        $("#clicked").html(response);
   }
    });
    var value = parseInt(document.getElementById("result5").value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById("result5").value = value;
	document.getElementById("clicked").innerHTML = value;
	localStorage.setItem('clickCount5', value);
	  
});

$('#submit6').click( function() {
	 $.ajax({
        url:"insert6.php",
        type:"POST",
		success: function(response){
        $("#clicked").html(response);
   }
    });
    var value = parseInt(document.getElementById("result6").value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById("result6").value = value;
	document.getElementById("clicked").innerHTML = value;
	localStorage.setItem('clickCount6', value);
	  
});

$('#submit7').click( function() {
	 $.ajax({
        url:"insert7.php",
        type:"POST",
		success: function(response){
        $("#clicked").html(response);
   }
    });
    var value = parseInt(document.getElementById("result7").value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById("result7").value = value;
	document.getElementById("clicked").innerHTML = value;
	localStorage.setItem('clickCount7', value);
	  
});

$('#submit8').click( function() {
	 $.ajax({
        url:"insert8.php",
        type:"POST",
		success: function(response){
        $("#clicked").html(response);
   }
    });
    var value = parseInt(document.getElementById("result8").value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById("result8").value = value;
	document.getElementById("clicked").innerHTML = value;
	localStorage.setItem('clickCount8', value);
	  
});
/*
$( function() {
    var clickCount2 = localStorage.getItem('clickCount2');
    clickCount2 = clickCount2 ? parseInt(clickCount2) : 0;
    var $num = $('#result2');
    $num.text(clickCount2);
    $('#box2').click( function() {
        $num.text(++clickCount2);
        localStorage.setItem('clickCount2', clickCount2);
		document.getElementById("clicked").innerHTML = clickCount2;
    });
    
});

$( function() {
    var clickCount3 = localStorage.getItem('clickCount3');
    clickCount3 = clickCount3 ? parseInt(clickCount3) : 0;
    var $num = $('#result3');
    $num.text(clickCount3);
    $('#box3').click( function() {
        $num.text(++clickCount3);
        localStorage.setItem('clickCount3', clickCount3);
		document.getElementById("clicked").innerHTML = clickCount3;
    });
});

$( function() {
    var clickCount4 = localStorage.getItem('clickCount4');
    clickCount4 = clickCount4 ? parseInt(clickCount4) : 0;
    var $num = $('#result4');
    $num.text(clickCount4);
    $('#box4').click( function() {
        $num.text(++clickCount4);
        localStorage.setItem('clickCount4', clickCount4);
		document.getElementById("clicked").innerHTML = clickCount4;
    });
    
});

$( function() {
    var clickCount5 = localStorage.getItem('clickCount5');
    clickCount5 = clickCount5 ? parseInt(clickCount5) : 0;
    var $num = $('#result5');
    $num.text(clickCount5);
    $('#box5').click( function() {
        $num.text(++clickCount5);
        localStorage.setItem('clickCount5', clickCount5);
		document.getElementById("clicked").innerHTML = clickCount5;
    });
    
});

$( function() {
    var clickCount6 = localStorage.getItem('clickCount6');
    clickCount6 = clickCount6 ? parseInt(clickCount6) : 0;
    var $num = $('#result6');
    $num.text(clickCount6);
    $('#box6').click( function() {
        $num.text(++clickCount6);
        localStorage.setItem('clickCount6', clickCount6);
		document.getElementById("clicked").innerHTML = clickCount6;
    });
    
});

$( function() {
    var clickCount7 = localStorage.getItem('clickCount7');
    clickCount7 = clickCount7 ? parseInt(clickCount7) : 0;
    var $num = $('#result7');
    $num.text(clickCount7);
    $('#box7').click( function() {
        $num.text(++clickCount7);
        localStorage.setItem('clickCount7', clickCount7);
		document.getElementById("clicked").innerHTML = clickCount7;
    });
    
});

$( function() {
    var clickCount8 = localStorage.getItem('clickCount8');
    clickCount8 = clickCount8 ? parseInt(clickCount8) : 0;
    var $num = $('#result8');
    $num.text(clickCount8);
    $('#box8').click( function() {
        $num.text(++clickCount8);
        localStorage.setItem('clickCount8', clickCount8);
		document.getElementById("clicked").innerHTML = clickCount8;
    });
    
});
/*
$('#box1').click(function() {
		var value = document.getElementById("result1").innerHTML;
		var newValue = parseInt(value,10) + 1;
		document.getElementById("result1").innerHTML = newValue;
		document.getElementById("clicked").innerHTML = newValue;
    });

$('#box2').click(function() {
		var value = document.getElementById("result2").innerHTML;
		var newValue = parseInt(value,10) + 1;
		document.getElementById("result2").innerHTML = newValue;
		document.getElementById("clicked").innerHTML = newValue;
    });

$('#box3').click(function() {
		var value = document.getElementById("result3").innerHTML;
		var newValue = parseInt(value,10) + 1;
		document.getElementById("result3").innerHTML = newValue;
		document.getElementById("clicked").innerHTML = newValue;
    });
	
$('#box4').click(function() {
		var value = document.getElementById("result4").innerHTML;
		var newValue = parseInt(value,10) + 1;
		document.getElementById("result4").innerHTML = newValue;
		document.getElementById("clicked").innerHTML = newValue;
    });
	
$('#box5').click(function() {
		var value = document.getElementById("result5").innerHTML;
		var newValue = parseInt(value,10) + 1;
		document.getElementById("result5").innerHTML = newValue;
		document.getElementById("clicked").innerHTML = newValue;
    });
	
$('#box6').click(function() {
		var value = document.getElementById("result6").innerHTML;
		var newValue = parseInt(value,10) + 1;
		document.getElementById("result6").innerHTML = newValue;
		document.getElementById("clicked").innerHTML = newValue;
    });
	
$('#box7').click(function() {
		var value = document.getElementById("result7").innerHTML;
		var newValue = parseInt(value,10) + 1;
		document.getElementById("result7").innerHTML = newValue;
		document.getElementById("clicked").innerHTML = newValue;
    });
	
$('#box8').click(function() {
		var value = document.getElementById("result8").innerHTML;
		var newValue = parseInt(value,10) + 1;
		document.getElementById("result8").innerHTML = newValue;
		document.getElementById("clicked").innerHTML = newValue;
    });

*/

	$("#resultbox").click(function () {
        $(".backup").toggle();
    });
	
});
