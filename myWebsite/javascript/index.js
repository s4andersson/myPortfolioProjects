function loadComponent(url, elementId, scriptPath) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            const element = document.getElementById(elementId);
            element.innerHTML = data;

            console.log(`${url} loaded into #${elementId}`);

            // Dynamically load the external script
            if (scriptPath) {
                const script = document.createElement('script');
                script.src = scriptPath;
                script.defer = true;
                document.body.appendChild(script);
                console.log(`Script loaded: ${scriptPath}`);
            }
        })
        .catch(err => console.error(`Error loading component: ${err}`));
}

window.onload = function () {
    loadComponent(
        'myWebsite/aboutMe/aboutMe.html',
        'myAboutMe',
        'myWebsite/aboutMe/aboutMe.js'
    );
    loadComponent(
        'myWebsite/projects/projects.html', 
        'myProjects'
    );
    loadComponent(
        'myWebsite/contacts/contacts.html',
        'myContacts'
    );
};


function toggleMode() {

    const elementsToToggle = [
        document.body,
        document.getElementById('newAbout'),
        document.getElementById('Contact'),
        document.getElementById('Projects'),
        ...document.querySelectorAll('.about-cardContainer')
    ];

    elementsToToggle.forEach( element => {
        element.classList.toggle('light-mode');
        element.classList.toggle('dark-mode');
    });

    
    // document.body.classList.toggle('light-mode');
    // document.body.classList.toggle('dark-mode');
    // document.getElementById('newAbout').classList.toggle('light-mode');
    // document.getElementById('newAbout').classList.toggle('dark-mode');

    // document.getElementById('Contact').classList.toggle('light-mode');
    // document.getElementById('Contact').classList.toggle('dark-mode');

    // document.getElementById('Projects').classList.toggle('light-mode');
    // document.getElementById('Projects').classList.toggle('dark-mode');

    // document.querySelectorAll('.about-cardContainer').forEach(card => {
    //     card.classList.toggle('light-mode');
    //     card.classList.toggle('dark-mode');
    // });
}
