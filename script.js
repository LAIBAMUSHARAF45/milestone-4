"use strict";
var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get reference to form elements using their IDs
    const profilePictureInput = document.getElementById('profilePicture');
    const nameElement = document.getElementById('name');
    const emailElement = document.getElementById('email');
    const phoneElement = document.getElementById('phone');
    const educationElement = document.getElementById('education');
    const experienceElement = document.getElementById('experience');
    const skillsElement = document.getElementById('skills');
    // Check if all form elements are present
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;
    // Create resume output
    const resumeOutput = `
      <h2>Resume</h2>
      ${profilePictureInput.files && profilePictureInput.files[0] ? `<img src="${URL.createObjectURL(profilePictureInput.files[0])}" alt="Profile Picture" class='profile-picture'>` : ""}
      <p><strong>Name:</strong> <span id="edit-name" class="editable">${name}</span></p>
      <p><strong>Email:</strong> <span id="edit-email" class="editable">${email}</span></p>
      <p><strong>Phone Number:</strong> <span id="edit-phone" class="editable">${phone}</span></p>
      
      <h3>Education</h3>
      <p id="edit-education" class="editable">${education}</p>
      
      <h3>Experience</h3>
      <p id="edit-experience" class="editable">${experience}</p>
      
      <h3>Skills</h3>
      <p id="edit-skills" class="editable">${skills}</p>
    `;
    const resumeOutputElement = document.getElementById('resumeOutput');
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
        makeEditable();
    }
});
function makeEditable() {
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => {
        element.addEventListener('click', function () {
            var _a;
            const currentElement = element;
            const currentValue = currentElement.textContent || " ";
            // Replace content
            if (currentElement.tagName === 'P' || currentElement.tagName === 'SPAN') {
                const input = document.createElement('input');
                input.type = 'text';
                input.value = currentValue;
                input.classList.add('editing-input');
                input.addEventListener('blur', function () {
                    currentElement.textContent = input.value;
                    currentElement.style.display = 'inline';
                    input.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input, currentElement);
                input.focus();
            }
        });
    });
}