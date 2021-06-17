'use strict'
// ! GLOBAL VARIABLES
const showModalBtn = document.querySelectorAll('.show-modal')
const closeModalBtn = document.querySelector('.close-modal')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
// !FUNCTIONS
const openModal = function () {
	modal.classList.remove('hidden')
	overlay.classList.remove('hidden')
}
const closeModal = function () {
	modal.classList.add('hidden')
	overlay.classList.add('hidden')
}
// ! EVENT LISTENERS
closeModalBtn.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

// listen for the esacape key to be pressed and the modal does not contain the hidden class run the close modal function.
document.addEventListener('keydown', function (e) {
	if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
		closeModal()
	}
})

// ! FUNCTIONALITY
// be able to do something to all of the show modal buttons

for (let i = 0; i < showModalBtn.length; i++)
	showModalBtn[i].addEventListener('click', openModal)
