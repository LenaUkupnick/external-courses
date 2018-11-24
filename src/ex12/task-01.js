
document.getElementById('accordeon').addEventListener('click', function(elem) {
    var clickedElement = elem.target.closest('.accordeon-item');
    if (elem.target && elem.target.nodeName === "H3") {
        var elements = document.getElementsByClassName("accordeon-text");
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove('active');
    }
        var textInElement = clickedElement.getElementsByClassName('accordeon-text')[0];
        textInElement.classList.add('active');
    }
})