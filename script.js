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