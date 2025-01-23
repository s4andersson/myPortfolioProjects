function loadComponent(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
}

window.onload = function() {
    loadComponent('projects.html', 'myProjects');
    loadComponent('contacts.html', 'myContacts');
    loadComponent('aboutMe.html', 'myAboutMe');
}