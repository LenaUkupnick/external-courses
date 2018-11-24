var arr = [];
var obj = {};
var i = 0;
function сhildNodes(node) {
    var classList = node.classList;
    if (classList && classList.length) {
        arr.push(classList[i]);
    }
    if (node.nodeType === 1 || node.nodeType === 3) {
        var child = node.firstChild;
        while (child) {
            if (child.nodeType === 1 || child.nodeType === 3) {
                arr.push(child.nodeName);
                сhildNodes(child);
            };
            child = child.nextSibling;
        };
    };
};
сhildNodes(document.body);
function howManyTimes() {
    for (i; i < arr.length; i++) {
        if (obj[arr[i]] !== undefined) {
            obj[arr[i]]++;
        }
        else {
            obj[arr[i]] = 1;
        }
    }
    console.log(obj);
};
howManyTimes();
