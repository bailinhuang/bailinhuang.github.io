//Transpiled from main.js with presets: default, not ie11; 
"use strict";

const newYearParticlesConfig = {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "image",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 3
        },
        "image": {
          "src": "https://media0.giphy.com/media/3o751YDShwDYsaEcXC/giphy.webp",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 74.97020920634164,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }

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

particlesJS.load('particles-js', 'js/newYearParticleConfig.json', function () {
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
    title: 'Hellooo, what\'s up?',
  },{
    title: `...`
  },{
    title: 'The ceiling!',
    message: 'Lol, such a bad joke. '
  },{
    title: 'Lol, such a bad joke. '
  }, {
    title: 'A classic nonetheless. (Dad jokes ftw)',
    message: '(Dad jokes ftw)'
  }, {
    title: 'Btw, dont mind the space llamas, they don\'t bite',
    message: '(What was I trying to say...?)'
  },{
    title: 'Anyways, back to the point',
    message: '(What was I trying to say...?)'
  }, {
    title: 'What was I trying to say...?'
  }, {
    title: 'Oh yeah, I just remembered'
  }, {
    title: 'Happy New Year!'
  }];
  const wait = 2000; // Init TypeWriter

  const typewriter = new TypeWriter(txtElement, words, wait);
  setTimeout(typewriter.showTypingMessage, 2000);
}
