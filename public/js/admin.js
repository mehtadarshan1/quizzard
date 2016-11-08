/* set home as the active navbar element */
$('#nav-home').addClass('active');

var displayAccountsTable = function() {
    $.ajax({
        type: 'GET',
        url: '/studentlist',
        success: function(data) {
            $('#admin-label').html('Manage Accounts');
            $('#admin-content').html(data);
            $('#admin-button').off();
            $('#admin-button').click(function(evt) {
                $('#modal-createuser').modal('show');
            });
            $('#admin-button').html('Create User');
        }
    });
}

displayAccountsTable();

$('#option-accounts').click(function(evt) {
    displayAccountsTable();
});

$('#userform').submit(function(evt) {
    evt.preventDefault();

    var fields = $('#userform').serializeArray();
    var user = {};

    jQuery.each(fields, function(i, field) {
        user[field.name] = field.value;
    });

    $.ajax({
        type: 'POST',
        url: '/useradd',
        data: user,
        success: function(data) {
            if (data == 'failure')
                $('#result').html('User could not be added');
            else if (data == 'exists')
                $('#result').html('User ' + user.id + ' already exists');
            else if (data == 'success')
                $('#result').html('User ' + user.id + ' added to database');
        }
    });
});
