function redirectTo(page) {
    switch (page) {
        case 'inicio':
            redirectToPath("http://localhost/Fieltro/");
            break;
        case 'temas':
            redirectToPath("http://localhost/Fieltro/2");
            break;
        case 'quienessomos':
            redirectToPath("http://localhost/Fieltro/3");
            break;
        default:
            alert("algo salio mal");
            break;
    }
}

function redirectToPath(path) {
    window.location.href = path;
}