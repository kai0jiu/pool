const person = document.getElementById('person-one');
const swap = document.getElementById('swap');

function printPerson() {
    $.ajax({
        type: "POST",
        url: "/index",
        dataType: "json",
        data: { "person": person.value },
        success: function(msg) {
            console.log(msg);
            $("#display").text(msg.person); //注意显示的内容
        },
        error: function(xhr, status, error) {
            console.log(error);
        }
    });
}

swap.addEventListener('click', printPerson);