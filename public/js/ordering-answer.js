/*Initializes the movability of sort*/
$(function(){
	$('#sortable').sortable({
		revert:true,
		start: function(event,ui) {
			$('#icon1',ui.item).hide();
			$("#icon2",ui.item).show();
		},
		stop: function(event,ui) {
			$("#icon2",ui.item).hide();
			$("#icon1",ui.item).show();
      	}
	});
});

/*Default value of question options*/
var orderAnswerCount = 4;
var addOrderingAnswer = function(){
	orderAnswerCount++;
    var inputdiv = "<div class='row'><li class='input-field col s10'><i class='material-icons prefix'>swap_vert</i><input id='icon_prefix' type='text' placeholder='Enter Answer Here' name='orderItem{0}' required='required' class='validate'/></li><div class='input-field col s2'><a onclick='$(this).parent().parent().remove()' class='btn-floating btn-tiny waves-effect waves-light red'><i class='tiny material-icons'>close</i></a></div></div>";
    $('#sortable').append(inputdiv.format([orderAnswerCount]));
}