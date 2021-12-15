let div = document.getElementById('dive');



try {
    div.innerHTML = 'pain au chocolat > chocolatine';
}

catch (error) {
    alert(
        error.message +
        " div n'existe pas !"
    );
}