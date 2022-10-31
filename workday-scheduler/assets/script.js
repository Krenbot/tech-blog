var currentEl = document.getElementById("currentDay");
var currentTime = moment().format("dddd, MMM Do")
var saveBtnEl = document.querySelectorAll('.saveBtn')

//Displays current time in header
currentEl.innerText = currentTime;

//Changes colors of timeblocks to past/present/future
function timeColors() {
    var current = moment().hours();
    
    $('.time-block').each(function () {
        var hourBlock = parseInt($(this).attr('id'));
        // console.log(hourBlock);

        //Compares time hour to current and sets class
        if (hourBlock === current) {
            $(this).addClass("present")
        } else if (hourBlock < current) {
            $(this).addClass('past')
        } else {
            $(this).addClass('future')
        }
    });
}
timeColors()

// //Save input in local storage
$(".saveBtn").click(function () {
    var text = $(this).siblings('textarea').val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
    console.log(time, text)
});

//Retrieve Inputs from local storage/place in hours
// $('#9 textarea').val(localStorage.getItem('9'));
// $('#10 textarea').val(localStorage.getItem('10'));
// $('#11 textarea').val(localStorage.getItem('11'));
// $('#12 textarea').val(localStorage.getItem('12'));
// $('#13 textarea').val(localStorage.getItem('13'));
// $('#14 textarea').val(localStorage.getItem('14'));
// $('#15 textarea').val(localStorage.getItem('15'));
// $('#16 textarea').val(localStorage.getItem('16'));
// $('#17textarea').val(localStorage.getItem('17'));

for (let i = 9; i <= 17; i++){
    console.log(i)
    $('#' + i + ' textarea').val(localStorage.getItem(i));
    console.log('#' + i +' textarea')
}