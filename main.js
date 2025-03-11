function fetchContent() {
    fetch('push.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('options-container').innerHTML = data;
            executeScripts();
        })
        .catch(error => console.error('Error fetching content:', error));
}


function executeScripts(element = document.getElementById('options-container')) {
const scripts = element.getElementsByTagName('script');

for (let i = 0; i < scripts.length; i++) {
const script = scripts[i];

if (script.src) {
   
    const newScript = document.createElement('script');
    newScript.src = script.src;
    document.body.appendChild(newScript);
} else {
    const newScript = document.createElement('script');
    newScript.text = script.innerHTML;
    document.body.appendChild(newScript);
}
}
}
// push 22mm
function secondfeatch() {
    fetch('second22.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('.secondc').innerHTML = data;
            executeScripts(document.querySelector('.secondc')); // Execute scripts in loaded content
        })
        .catch(error => console.error('Error fetching content:', error));
}

function executeScripts(element = document.getElementById('secondc')) {
if (!element) {
console.error("Element not found: secondc");
return;
}

const scripts = element.getElementsByTagName('script');

for (let i = 0; i < scripts.length; i++) {
const script = scripts[i];

if (script.src) {
// Check if script already exists to prevent duplication
if (!document.querySelector(`script[src="${script.src}"]`)) {
    const newScript = document.createElement('script');
    newScript.src = script.src;
    document.body.appendChild(newScript);
}
} else {
// Remove previous inline scripts before appending new ones
const oldScripts = document.querySelectorAll("script[data-dynamic]");
oldScripts.forEach(oldScript => oldScript.remove());

const newScript = document.createElement('script');
newScript.text = script.innerHTML;
newScript.setAttribute("data-dynamic", "true"); 
document.body.appendChild(newScript);
}
}
}
// push close
// push 30mm

function thirdfeatch() {
    fetch('second22.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('.thirdc').innerHTML = data;
            executeScripts(document.querySelector('.thirdc')); // Execute scripts in loaded content
        })
        .catch(error => console.error('Error fetching content:', error));
}

function executeScripts(element = document.getElementById('thirdc')) {
if (!element) {
console.error("Element not found: secondc");
return;
}

const scripts = element.getElementsByTagName('script');

for (let i = 0; i < scripts.length; i++) {
const script = scripts[i];

if (script.src) {
// Check if script already exists to prevent duplication
if (!document.querySelector(`script[src="${script.src}"]`)) {
    const newScript = document.createElement('script');
    newScript.src = script.src;
    document.body.appendChild(newScript);
}
} else {
// Remove previous inline scripts before appending new ones
const oldScripts = document.querySelectorAll("script[data-dynamic]");
oldScripts.forEach(oldScript => oldScript.remove());

const newScript = document.createElement('script');
newScript.text = script.innerHTML;
newScript.setAttribute("data-dynamic", "true"); 
document.body.appendChild(newScript);
}
}
}
// push close

// mommentory acuretor
function momentoryfeatch() {
    fetch('momentory.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('.momentoryact').innerHTML = data;
            executeScripts(document.querySelector('.momentoryact')); // Execute scripts in loaded content
        })
        .catch(error => console.error('Error fetching content:', error));
}

function executeScripts(element = document.getElementById('momentoryact')) {
if (!element) {
console.error("Element not found: secondc");
return;
}

const scripts = element.getElementsByTagName('script');

for (let i = 0; i < scripts.length; i++) {
const script = scripts[i];

if (script.src) {
// Check if script already exists to prevent duplication
if (!document.querySelector(`script[src="${script.src}"]`)) {
    const newScript = document.createElement('script');
    newScript.src = script.src;
    document.body.appendChild(newScript);
}
} else {
// Remove previous inline scripts before appending new ones
const oldScripts = document.querySelectorAll("script[data-dynamic]");
oldScripts.forEach(oldScript => oldScript.remove());

const newScript = document.createElement('script');
newScript.text = script.innerHTML;
newScript.setAttribute("data-dynamic", "true"); 
document.body.appendChild(newScript);
}
}
}
// momentory acuretor close

