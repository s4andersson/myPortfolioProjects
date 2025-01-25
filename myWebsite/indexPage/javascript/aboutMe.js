console.log("Script loaded!");

const flipButton = document.getElementById('flip-button');
const aboutMeCard = document.getElementById('aboutMe');
const aboutMeBack = document.getElementById('aboutMeBack');
const flipButton2 = document.getElementById('flip-button2');

if (flipButton && aboutMeCard && aboutMeBack && flipButton2) {
    console.log("Elements Found");

    // Initially set the front card active
    aboutMeCard.classList.add('active');
    

    flipButton.addEventListener('click', () => {
        console.log("Button clicked!");
        aboutMeCard.classList.remove('active');
        aboutMeBack.classList.add('active');
        // aboutMeCard.style.display = "none";
        // aboutMeBack.style.display = "block";
    });

    flipButton2.addEventListener('click', () => {
        console.log("Button 2 clicked!");
        aboutMeBack.classList.remove('active');
        aboutMeCard.classList.add('active');
        // aboutMeBack.style.display = "none";
        // aboutMeCard.style.display = "block";
    });
} else {
    console.error("Elements not found!");
}
