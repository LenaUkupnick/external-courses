// document.getElementById("accordeon").addEventListener("click", function(elem) {
//     var clickedElement = elem.target.closest(".accordeon-item");
//     if (elem.target && elem.target.nodeName === "H3") {
//         var elements = document.getElementsByClassName("active")[0];
//         elements.classList.remove("active")
// }
//     var textInElement = clickedElement.getElementsByClassName("accordeon-text")[0];
//     textInElement.classList.add("active");
// }) 
document.getElementById("accordeon").addEventListener("click", function(elem) {
    var clickedElement = elem.target.closest(".accordeon-item");
    if (elem.target && elem.target.nodeName === "H3") {
        var elements = document.getElementsByClassName("active")[0];
        elements.classList.remove("active");
        var textInElement = clickedElement.getElementsByClassName("accordeon-text")[0];
    textInElement.classList.add("active");
}   
}) 