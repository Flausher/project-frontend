//Для проверки
document.getElementById('main-header').addEventListener('click', function() {
    console.log('Click event on H1 triggered');
}); 

studentPhoto.addEventListener('mouseover', function() {
    console.log('Mouse over event triggered');
    this.style.transform = 'scale(1.1)';
});

studentPhoto.addEventListener('click', function() {
    console.log('Click event triggered');
    this.src = 'logo.png';
    this.alt = 'Фото любимого преподавателя';
});

studentPhoto.addEventListener('dblclick', function() {
    console.log('Double click event triggered');
});


document.getElementById('change-practices').addEventListener('click', function() {
    console.log('Change practices button clicked');
    const practicesTableBody = document.querySelector('#practices-table tbody');
    const button = document.getElementById('change-practices');

    if (button.textContent === 'Посмотреть практики второго семестра') {
        console.log('Switching to second semester topics');
    } else {
        console.log('Switching to first semester topics');
    }
});
  