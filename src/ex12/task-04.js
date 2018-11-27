var obj = {};
var i = 0;
function childNodes(node) {
    var classList = node.classList;
    if (classList && classList.length) {
        for (i = 0; i < classList.length; i++) {
            if (obj[classList[i]] !== undefined) {
                obj[classList[i]]++;
            } else { obj[classList[i]] = 1; }
        }
    }
    if (node.nodeType === node.ELEMENT_NODE || node.nodeType === node.TEXT_NODE) {
        var child = node.firstChild
        while (child) {
            if (child.nodeType === child.ELEMENT_NODE || child.nodeType === child.TEXT_NODE) {
                if (obj[child.nodeName] !== undefined) {
                    obj[child.nodeName]++
                } else { obj[child.nodeName] = 1; }
                childNodes(child);
            }
            child = child.nextSibling;
        }
    }
};
childNodes(document.body);
console.log(obj);