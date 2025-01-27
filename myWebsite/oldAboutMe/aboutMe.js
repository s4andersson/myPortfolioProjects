console.log("Script loaded!");

const flipButton = document.getElementById('flip-button');
const flipCard = document.getElementById('flip-card');
const flipButton2 = document.getElementById('flip-button2');

if (flipButton && flipCard && flipButton2) {
    console.log("Elements Found");

    flipButton.addEventListener('click', () => {
        console.log("Flip to back!");
        flipCard.classList.add('flip');
    });

    flipButton2.addEventListener('click', () => {
        console.log("Flip to front!");
        flipCard.classList.remove('flip');
    });
} else {
    console.error("Elements not found!");
}
