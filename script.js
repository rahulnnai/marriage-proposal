function flyToRandom() {
    const button = document.getElementById('no');

    // Calculate random position within the viewport
    const x = Math.random() * window.innerWidth - 10;
    const y = Math.random() * window.innerHeight - 10;

    // Set the new position
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

function clickyes() {
    let image = document.getElementById('propimg');
    let text = document.getElementById('text');
    let yesbt = document.getElementById('yes');
    let nobt = document.getElementById('no');
    let propimg = document.getElementById('propimg');
  

    image.src = 'assets/dance.gif';
    image.alt = 'dance-video';
    propimg.style.height = '336px';
    propimg.style.width = '592px';
    text.innerHTML = "In your 'yes', my world found its forever.";

    yesbt.parentNode.removeChild(yesbt);
    nobt.parentNode.removeChild(nobt);

}
