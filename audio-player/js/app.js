document.addEventListener('DOMContentLoaded', function() {


  PLAYER.init();
});

var PLAYER = {
    openPlaylist: openPlaylist,
    playbackFunctions: {},

    init: function () {
        this.openPlaylist();
        this.playbackFunctions.init();

    }
};

function openPlaylist() {
    var burgerMenu = document.querySelector('#burgerMenu');
    var backBtn = document.querySelector('#backBtn');
    var playbackView = document.querySelector('#playback');
    var playlistView = document.querySelector('#playlist');
    burgerMenu.addEventListener("click", function () {
        playbackView.classList.toggle('hidden');
        playlistView.classList.toggle('hidden');
    });
    backBtn.addEventListener("click", function () {
        playbackView.classList.toggle('hidden');
        playlistView.classList.toggle('hidden');
    })
}

PLAYER.playbackFunctions = {
    artistPlaceholder: document.querySelector('.js-artist'),
    songPlaceholder: document.querySelector('.js-title'),
    imageBox: document.querySelector('.box-image'),
    playStop: playStop,
    next: next,
    prev: prev,
    open: open,
    init: function () {
        this.playStop();
        this.next();
        this.open();
        this.prev();
    }
};

function playStop() {
    var playBtn = document.querySelector('#playBtn');
    var pauseBtn = document.querySelector('#pauseBtn');
    playBtn.addEventListener("click", function (e) {
        e.preventDefault();
        this.classList.toggle("hidden");
        pauseBtn.classList.toggle("hidden");
    });
    pauseBtn.addEventListener("click", function (e) {
        e.preventDefault();
        this.classList.toggle("hidden");
        playBtn.classList.toggle("hidden");
    })
}

function open() {
    var playbackView = document.querySelector('#playback');
    var playlistView = document.querySelector('#playlist');

    document.querySelectorAll('.playlist__item').forEach(function (el) {
        var artist = el.querySelector('.playlist__artist').innerText;
        var song = el.querySelector('.playlist__song').innerText;
        var image = el.dataset.image;
        var id = el.id;


        el.addEventListener("click", function () {
            PLAYER.playbackFunctions.artistPlaceholder.innerText = artist;
            PLAYER.playbackFunctions.songPlaceholder.innerText = song;
            PLAYER.playbackFunctions.imageBox.style.backgroundImage = "url(" + image + ")";
            playbackView.classList.toggle('hidden');
            playlistView.classList.toggle('hidden');
            PLAYER.playbackFunctions.imageBox.dataset.id = id;

        })
    })
}

function next() {
    document.querySelector('.js-next').addEventListener("click", function () {
        var id = '#' + PLAYER.playbackFunctions.imageBox.dataset.id;
        var nextSong = document.querySelector(id).nextElementSibling;
        if (nextSong) {
            PLAYER.playbackFunctions.artistPlaceholder.innerText = nextSong.querySelector('.playlist__artist').innerText;
            PLAYER.playbackFunctions.songPlaceholder.innerText = nextSong.querySelector('.playlist__song').innerText;
            PLAYER.playbackFunctions.imageBox.style.backgroundImage = "url(" + nextSong.dataset.image + ")";
            PLAYER.playbackFunctions.imageBox.dataset.id = nextSong.id;
        }
    })
}
function prev() {
    document.querySelector('.js-prev').addEventListener("click", function () {
        var id = '#' + PLAYER.playbackFunctions.imageBox.dataset.id;
        var prevSong = document.querySelector(id).previousElementSibling;

        if (prevSong) {
            PLAYER.playbackFunctions.artistPlaceholder.innerText = prevSong.querySelector('.playlist__artist').innerText;
            PLAYER.playbackFunctions.songPlaceholder.innerText = prevSong.querySelector('.playlist__song').innerText;
            PLAYER.playbackFunctions.imageBox.style.backgroundImage = "url(" + prevSong.dataset.image + ")";
            PLAYER.playbackFunctions.imageBox.dataset.id = prevSong.id;
        }
    })
}