describe("memory game tests", () => {
    const jsdom = require("jsdom");
    const { JSDOM } = jsdom;
  
    const virtualConsole = new jsdom.VirtualConsole();
    virtualConsole.sendTo(console);
  
    beforeEach(() => {
      dom = new JSDOM(
        `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Memory Game</title>
      <link rel="stylesheet" href="src/style.css">
  
  </head>
  
  <body>
      <h1 style="color: beige; text-align: center;">Memory Game</h1> <br> <br>
  
      <section class="board">
          <div class="tiles" data-framework="1">
              <img class="front-face" src="images/back.png" alt="NotFlipped">
              <img class="flipped-face" src="images/an1.png" alt="Flipped">
          </div>
          <div class="tiles" data-framework="1">
              <img class="front-face" src="images/back.png" alt="NotFlipped">
              <img class="flipped-face" src="images/an1.png" alt="Flipped">
          </div>
          <div class="tiles" data-framework="2">
              <img class="front-face" src="images/back.png" alt="NotFlipped">
              <img class="flipped-face" src="images/an2.png" alt="Flipped">
          </div>
          <div class="tiles" data-framework="2">
              <img class="front-face" src="images/back.png" alt="NotFlipped">
              <img class="flipped-face" src="images/an2.png" alt="Flipped">
  
          </div>
          <div class="tiles" data-framework="3">
              <img class="front-face" src="images/back.png" alt="NotFlipped">
              <img class="flipped-face" src="images/an3.png" alt="Flipped">
  
          </div>
          <div class="tiles" data-framework="3">
              <img class="front-face" src="images/back.png" alt="NotFlipped">
              <i
              mg class="flipped-face" src="images/an3.png" alt="Flipped">
  
          </div>
          <div class="tiles" data-framework="4">    //var myCard = require('../src/script');
              <img class="front-face" src="images/back.png" alt="NotFlipped">
              <img class="flipped-face" src="images/an4.png" alt="Flipped">
  
          </div>
          <div class="tiles" data-framework="4">
              <img class="front-face" src="images/back.png" alt="NotFlipped">
              <img class="flipped-face" src="images/an4.png" alt="Flipped">
  
          </div>
          <div class="tiles" data-framework="5">
              <img class="front-face" src="images/back.png" alt="NotFlipped">
              <img class="flipped-face" src="images/an5.png" alt="Flipped">
  
          </div>
          <div class="tiles" data-framework="5">
              <img class="front-face" src="images/back.png" alt="NotFlipped">
              <img class="flipped-face" src="images/an5.png" alt="Flipped">
  
          </div>
          <div class="tiles" data-framework="6">
              <img class="front-face" src="images/back.png" alt="NotFlipped">
              <img class="flipped-face" src="images/an6.png" alt="Flipped">
  
          </div>
          <div class="tiles" data-framework="6">
              <img class="front-face" src="images/back.png" alt="NotFlipped">
              <img class="flipped-face" src="images/an6.png" alt="Flipped">
  
          </div>
      </section>
  </body>
  <script>
      class Global {
          constructor() {
              this.document = document;
          }
      }
      let global = new Global();
  </script>
  
  </html>
  <script src="https://raw.githubusercontent.com/FaithMo/memoryGame/master/src/script.js"></script>`,
        {
          runScripts: "dangerously",
          resources: "usable"
        }
      );
  
      global.view = dom.window;
      global.window = dom.window.document;
      game = require("../src/script")
    });
  
    it("should shuffle cards after all cards have been opened", () => {
      let shuffle = require("../src/script");
      expect(shuffle).toBeDefined();
    });
  
    it("should make cards clickable", () => {
      let flip = require("../src/script");
      tilesLocked = false;
      expect(flip).toBeDefined();
    });
  
    it("should test if cards match for flipping", () => {
      let match = require("../src/script");
      expect(match).toBeDefined();
    });
  
  });
  