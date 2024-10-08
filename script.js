window.onload = function() {
    setTimeout(function() {
        document.getElementById('loading').style.display = 'none';
    }, 2000);
};
document.getElementById('Foto').addEventListener('click', function() {
    showLoading();
    setTimeout(function() {
        hideLoading();
        alert('Загружаем фото танцев!');
    }, 3000);
});

document.getElementById('Video').addEventListener('click', function() {
    showLoading();
    setTimeout(function() {
        hideLoading();
        alert('Загружаем видео танцев!');
    }, 3000);
});

function showLoading() {
    document.getElementById('loading').classList.remove('hidden');
};

function hideLoading() {
    document.getElementById('loading').classList.remove('hidden');
};  

// document.getElementById('Foto').addEventListener('click', function() {
//     document.getElementById('Tan').style.display = 'none';
//     document.querySelector('div').style.display = 'none';

//     document.getElementById('newContent').style.display = 'block';
// });

// document.getElementById('Video').addEventListener('click', function() {
//     document.getElementById('Tan').style.display = 'none';
//     document.querySelector('div').style.display = 'none';

//     // document.getElementById('newContent').style.display = 'block';
// });

// // window.addEventListener('popstate', function(event) {
// //     if (event.state && event.state.page === 'new') {
// //     document.getElementById('Tan').style.display = 'none';
// //     document.getElementById('mainContent').style.display = 'none';
// //     document.getElementById('newContent').style.display = 'block';
// //     } else {
// //      document.getElementById('Tan').style.display = 'none';
// //      document.getElementById('mainContent').style.display = 'none';
// //      document.getElementById('newContent').style.display = 'block';
// //     }
// // });