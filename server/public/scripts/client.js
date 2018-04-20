console.log('eyy');
$(document).ready(onReady);

function onReady() {
    $('#recordButt').on('click', addNew);
    console.log('ayy');
    getAllSongs();
}

function getAllSongs() {
    $('#records').html('');
    $.ajax({
        type: 'GET', //this can also be method
        url: '/records'
    })
    .then(function(response) {
        console.log(response);
        response.forEach(function(record) {
            $('#records').append(`<tr>
                <td>${record.title}</td>
                <td>${record.artist}</td>
                <td>${record.year}</td>
                <td>${record.cost}</td>
                </tr>`);
        });
    });
}

function formatRecords(record) {
    let returnString = '<tr>';
    returnString += '<td>' + record.title + '</td>';
    returnString += '<td>' + record.artist + '</td>';
    returnString += '<td>' + record.year + '</td>';
    returnString += '<td>' + record.cost + '</td></tr>';
    console.log(returnString);
    return returnString;
}

function addNew() {
    let record = {
        title: $('#titleInput').val(),
        artist: $('#artistInput').val(),
        year: $('#yearInput').val(),
        cost: $('#costInput').val()
    };
    console.log(record);
    $('input').val('');
    $.ajax({
        method: 'POST',
        url: '/add-record',
        data: record
    }).then(function(response) {
        console.log(response);
        getAllSongs();        
    });

}