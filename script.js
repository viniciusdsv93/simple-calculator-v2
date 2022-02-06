document.querySelectorAll('.buttons span').forEach((item) => {
    item.addEventListener('click', (e) => {
        insertValue(item.innerHTML);
    })
});

function insertValue(data) {
    if (data == "CE") {
        document.querySelector('input').value = '';
    }
    else if (data == "=") {
        try {
            document.querySelector('input').value = eval(document.querySelector('input').value);
            document.querySelector('input').setAttribute('status', 'done');
        }
        catch(err) {
            console.log("Error: " + err);
            document.querySelector('input').value = '';
        }
    }
    else {
        if (document.querySelector('input').getAttribute('status') == 'undone') {
            document.querySelector('input').value += data;
        }
        else {
            document.querySelector('input').value = '';
            document.querySelector('input').value += data;
            document.querySelector('input').setAttribute('status', 'undone');
        }
    }
}