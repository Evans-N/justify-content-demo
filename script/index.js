const flexStart = document.querySelector('[data-flex-start]');
const flexStartDiv = document.querySelector('[data-flex-start-div]');

flexStart.addEventListener('click', () => {
    flexStartDiv.classList.toggle('hidden');
});

const flexEnd = document.querySelector('[data-flex-end]');
const flexEndDiv = document.querySelector('[data-flex-end-div]');

flexEnd.addEventListener('click', () => {
    flexEndDiv.classList.toggle('hidden');
});

const flexCenter = document.querySelector('[data-flex-center]');
const flexCenterDiv = document.querySelector('[data-flex-center-div]');

flexCenter.addEventListener('click', () => {
    flexCenterDiv.classList.toggle('hidden');
});
const flexSpaceBetween = document.querySelector('[data-flex-space-between]');
const flexSpaceBetweenDiv = document.querySelector('[data-flex-space-between-div]');

flexSpaceBetween.addEventListener('click', () => {
    flexSpaceBetweenDiv.classList.toggle('hidden');
});
const flexSpaceAround = document.querySelector('[data-flex-space-around]');
const flexSpaceAroundDiv = document.querySelector('[data-flex-space-around-div]');

flexSpaceAround.addEventListener('click', () => {
    flexSpaceAroundDiv.classList.toggle('hidden');
});
const flexSpaceEvenly = document.querySelector('[data-flex-space-evenly]');
const flexSpaceEvenlyDiv = document.querySelector('[data-flex-space-evenly-div]');

flexSpaceEvenly.addEventListener('click', () => {
    flexSpaceEvenlyDiv.classList.toggle('hidden');
});