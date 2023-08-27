const existingHeader = document.getElementById('victory');
const newHeader = document.createElement('h1');
const yourName = "Your Name";
newHeader.id = 'victory';
newHeader.textContent = `${yourName} is the champion`;
existingHeader.parentNode.replaceChild(newHeader, existingHeader);
