(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

document.addEventListener("DOMContentLoaded", function() {

    var playerEl = document.querySelector('[camera]');
    playerEl.addEventListener('collide', function (e) {
        console.log('Player has collided with body #' + e.detail.body.id);

        // e.detail.target.el;  // Original entity (playerEl).
        // e.detail.body.el;    // Other entity, which playerEl touched.
        // e.detail.contact;    // Stats about the collision (CANNON.ContactEquation).
        // e.detail.contact.ni; // Normal (direction) of the collision (CANNON.Vec3).
    });
});
},{}]},{},[1]);
