// Waits for DOM to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Task 1: Change text content dynamically
    const changeableText = document.getElementById('changeable-text');
    const changeTextBtn = document.getElementById('change-text-btn');
    
    changeTextBtn.addEventListener('click', function() {
        changeableText.textContent = "The text has been changed successfully!";
    });

    // Task 2: Modify CSS styles via JavaScript
    const styleChangeText = document.getElementById('style-change-text');
    const changeStyleBtn = document.getElementById('change-style-btn');
    
    changeStyleBtn.addEventListener('click', function() {
        styleChangeText.classList.toggle('highlight');
    });

    // Task 3: Add or remove an element when a button is clicked
    const dynamicElements = document.getElementById('dynamic-elements');
    const addElementBtn = document.getElementById('add-element-btn');
    const removeElementBtn = document.getElementById('remove-element-btn');
    let elementCounter = 1;
    
    addElementBtn.addEventListener('click', function() {
        const newElement = document.createElement('div');
        newElement.id = 'dynamic-element';
        newElement.textContent = `Dynamic Element #${elementCounter}`;
        dynamicElements.appendChild(newElement);
        elementCounter++;
    });
    
    removeElementBtn.addEventListener('click', function() {
        if (dynamicElements.lastChild) {
            dynamicElements.removeChild(dynamicElements.lastChild);
            elementCounter = Math.max(1, elementCounter - 1);
        }
    });
});