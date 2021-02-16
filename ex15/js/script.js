$(function () {
    $("#container img").click(function (e) { 
        $("#bigimg").attr("src", $(this).attr("src"));
        $("#bigimg").attr("alt", $(this).attr("alt"));
        $("#bigimg").next().text($(this).attr("alt"));

    });
});