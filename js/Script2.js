window.onbeforeprint = function () {
    $('#enlever_impression_1').attr("class", "d-none");
    $('#enlever_impression_2').attr("class", "d-none");
};
window.onafterprint = function () {
    $('#enlever_impression_1').attr("class", "d-block");
    $('#enlever_impression_2').attr("class", "d-block");
};