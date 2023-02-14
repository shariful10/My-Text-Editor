const textarea = document.getElementById('message-field');
function f1(e) {
    if (textarea.style.fontWeight === 'bold') {
        textarea.style.fontWeight = 'normal'
    }
    else {
        textarea.style.fontWeight = 'bold'
    }
}
function f2(e) {
    if (textarea.style.fontStyle === 'italic') {
        textarea.style.fontStyle = 'normal'
    }
    else {
        textarea.style.fontStyle = 'italic'
    }
}
function f3(e) {
    if (textarea.style.textDecoration === 'underline') {
        textarea.style.textDecoration = 'none'
    }
    else {
        textarea.style.textDecoration = 'underline'
    }
}
function f4(e) {
    if (textarea.style.textAlign === 'left') {
        textarea.style.textAlign = 'left'
    }
    else {
        textarea.style.textAlign = 'left'
    }
}
function f5(e) {
    if (textarea.style.textAlign === 'center') {
        textarea.style.textAlign = 'left';
    }
    else {
        textarea.style.textAlign = 'center';
    }
}
function f6(e) {
    if (textarea.style.textAlign === 'right') {
        textarea.style.textAlign = 'left'
    }
    else {
        textarea.style.textAlign = 'right'
    }
}
function f7(e) {
    if (textarea.style.textAlign === 'justify') {
        textarea.style.textAlign = 'left'
    }
    else {
        textarea.style.textAlign = 'justify'
    }
}
function f8(e) {
    let valueStr = e.value;
    let value = parseInt(valueStr);
    textarea.style.fontSize = value + 'px'
}
function f9(e) {
    if (textarea.style.textTransform === 'uppercase') {
        textarea.style.textTransform = 'none'
    }
    else {
        textarea.style.textTransform = 'uppercase'
    }
}
function f10(e) {
    let value = e.value;
    textarea.style.color = value;
}