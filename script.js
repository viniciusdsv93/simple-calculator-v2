function qs(item) {
    return document.querySelector(item);
}

function qsall(item) {
    return document.querySelectorAll(item);
}

qsall('.buttons span').forEach((item) => {
    item.addEventListener('click', (e) => {
        insertValue(item.innerHTML);
    })
});

function insertValue(data) {
    if (data == "CE") {
        qs('input').value = '';
    }
    else if (data == "=") {
        try {
            qs('input').value = eval(qs('input').value.replaceAll('x', '*').replaceAll('÷', '/'));
            qs('input').setAttribute('status', 'done');
        }
        catch(err) {
            console.log("Error: " + err);
            qs('input').value = '';
        }
    }
    else {
        if (qs('input').getAttribute('status') == 'undone') {
            qs('input').value += data;
        }
        else {
            qs('input').value = '';
            qs('input').value += data;
            qs('input').setAttribute('status', 'undone');
        }
    }
}