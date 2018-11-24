
document.getElementById("accordeon").addEventListener('click', function(elem) {
    if (elem.target && elem.target.nodeName === "H3") {
        var element = elem.target.parentNode;
        var open = document.getElementsByClassName('accordeon-text active')[0];
        open.classList.remove('active');
        open.classList.add('close');
        if (element.className === 'accordeon-text close') {
            element.className = 'accordeon-text active';
            }
    }
}) 