//Transpiled from main.js with presets: default, not ie11; 
"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
document.getElementById("rocket-button-color").addEventListener('click', function (e) {
  e.preventDefault();
  const rocket = document.getElementById("rocket-button-launch");
  rocket.style = 'visibility: visible';
  document.getElementById("pf-header").scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
  setTimeout(() => {
    const rocket = document.getElementById("rocket-button-launch");
    rocket.style = 'visibility: hidden';
  }, 1000);
});
particlesJS.load('particles-js', 'js/particlesjs-config.json', function () {
  console.log('callback - particles.js config loaded');
}); // ES6 Class

class TypeWriter {
  constructor(txtTitleElement, words, wait = 3000) {
    _defineProperty(this, "showTypingMessage", () => {
      // Current index of word
      const current = this.wordIndex % this.words.length; // Get full text of current word

      const fullTxt = this.words[current].title; // Check if deleting

      if (this.isDeleting) {
        // Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      } // Insert txt into element


      this.txtElement.textContent = this.txt; // Initial Type Speed

      let typeSpeed = 30;

      if (this.isDeleting) {
        typeSpeed /= 2;
      } // If word is complete


      if (!this.isDeleting && this.txt === fullTxt && this.wordIndex + 1 !== this.words.length) {
        // Make pause at end
        typeSpeed = this.wait; // Set delete to true

        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false; // Move to next word

        this.wordIndex++; // Pause before start typing

        typeSpeed = 200;
      }

      if (this.wordIndex !== this.words.length) {
        setTimeout(() => this.showTypingMessage(), typeSpeed);
      } else {
        console.log("executing scroll");
        console.log(document.querySelector('#education'));
        document.querySelector('#education').scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }

      return true;
    });

    _defineProperty(this, "type", (element, word, typeSpeed) => {
      let txt = '';
      const isDeleting = false; // Check if deleting

      if (this.isDeleting) {
        // Remove char
        txt = fullTxt.substring(0, txt.length - 1);
      } else {
        // Add char
        txt = fullTxt.substring(0, txt.length + 1);
      } // If word is complete


      if (!isDeleting && txt === fullTxt && this.wordIndex + 1 !== this.words.length) {
        // Make pause at end
        typeSpeed = this.wait; // Set delete to true

        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        // Move to next word
        this.wordIndex++;
      }
    });

    this.txtElement = txtTitleElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.isDeleting = false;
  }

} // Init On DOM Load


document.addEventListener('DOMContentLoaded', init); // Init App

function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = [{
    title: 'Hello, traveler',
    message: 'Welcome to my dimension'
  }, {
    title: 'My name is Bailin Huang'
  }, {
    title: `I'm a software developer`
  }, {
    title: `I'm a visual enthusiast`
  }, {
    title: `Check out more information below`
  }];
  const wait = 2000; // Init TypeWriter

  const typewriter = new TypeWriter(txtElement, words, wait);
  setTimeout(typewriter.showTypingMessage, 2000);
}