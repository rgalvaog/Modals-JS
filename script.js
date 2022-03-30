// Modal Implementation JavaScript
// Rafael G. Guerra
// March 2022

// Use strict mode
'use strict';

// Global Variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

// Global Functions
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Show modal when button is clicked
for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', openModal);
}

// Modal closes when pressing the X button
btnCloseModal.addEventListener('click', closeModal);

// Modal closes when we click outside the modal
overlay.addEventListener('click', closeModal);

// Modal closes when we press the ESC key
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
