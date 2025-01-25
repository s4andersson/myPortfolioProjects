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
    loadComponent('aboutMe.html', 'myAboutMe', 'javascript/aboutMe.js');
};
