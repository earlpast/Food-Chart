$(document).foundation();
$(function () {
    $("#ckey .row").hide();
    $("#ckey h3").click("live", showKey);
    $(".callout").click("live", food);
    $("#clearIt").click("live", clearAll);
    console.log("Earl");
});

function showKey() {
    console.log("Showkey");
}

function clearAll() {
    $(".callout").removeClass("hitIt");
}
var portionsSelected = [];


function food() {
  var serving = getID($(this));
$(this).addClass("hitIt");
};

function getID(x) {
    var id = parseInt(x.attr('id').slice(-2).replace(/[a-zA-Z]+/g, ''));
    return id
}