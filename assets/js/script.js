$(document).ready(function(){ 
	$('#btnAdd').click(function(){
		var a = '<div> <label>horario de entrada:</label> <input class="form-control" type="time"></div>';
		var b = '<div> <label>horario de saida:</label> <input class="form-control" type="time"></div>';
		$('#copi').append(a);
		$('#copi2').append(b);
	});
	

});