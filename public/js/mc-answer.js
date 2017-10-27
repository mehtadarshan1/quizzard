var mcAnswerCount = 4; // default number of options

/**
* Adds an option to the multiple choice
*/
var addMCAnswers = function(dom){
    mcAnswerCount++;
    var newdiv = document.createElement('p');
    var inputdiv = '<input type="radio" name="radbutton" value="mcans{0}" id="mcans{1}" required/><label for="mcans{2}">Is Correct</label><input type="text" name="mcans{3}" placeholder="Enter Answer Here" required style="float:left;" class="form-control"/><a onclick="$(this).parent().remove()" class="btn-floating btn-tiny waves-effect waves-light red"><i class="tiny material-icons">close</i></a>';
    newdiv.innerHTML = inputdiv.format(mcAnswerCount,mcAnswerCount,mcAnswerCount,mcAnswerCount);
    $('#qAnswer > div.form-group').append(newdiv);
}