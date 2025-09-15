let tabs = ["#personal", "#projects", "#hobbies"];
const links = document.querySelectorAll(".tab-link");

function dynamicTabs(tabToDisplay) {
  for (let tab of tabs) {
    let element = document.querySelector(tab);
    if (element) {
      if (tab === tabToDisplay) {
        element.hidden = false;
      } else {
        element.hidden = true;
      }
    }
  }
}

function initSimpleCounter() {
  const counterBtn = document.getElementById('counter-btn');
  const counterDisplay = document.getElementById('experience-counter');
  let count = 0;
  
  if (counterBtn && counterDisplay) {
    counterBtn.addEventListener('click', () => {
      count++;
      counterDisplay.textContent = count;
    });
  }
}

function initColorCyclingButton() {
  const colorBtn = document.getElementById('color-cycle-btn');
  const colors = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6'];
  let colorIndex = 0;
  
  if (colorBtn) {
    colorBtn.addEventListener('click', () => {
      colorIndex = (colorIndex + 1) % colors.length;
      colorBtn.style.backgroundColor = colors[colorIndex];
    });
  }
}

function initTextRevealer() {
  const revealBtn = document.getElementById('reveal-btn');
  const secretText = document.getElementById('secret-text');
  const fullText = "I love coding and building amazing projects!";
  let isRevealed = false;
  
  if (revealBtn && secretText) {
    secretText.textContent = "";
    
    revealBtn.addEventListener('click', () => {
      if (!isRevealed) {
        revealBtn.textContent = "Revealing...";
        revealBtn.disabled = true;
        
        let currentIndex = 0;
        const revealInterval = setInterval(() => {
          secretText.textContent = fullText.substring(0, currentIndex + 1);
          currentIndex++;
          
          if (currentIndex >= fullText.length) {
            clearInterval(revealInterval);
            revealBtn.textContent = "Reset";
            revealBtn.disabled = false;
            isRevealed = true;
          }
        }, 50);
      } else {
        secretText.textContent = "";
        revealBtn.textContent = "Reveal Secret";
        isRevealed = false;
      }
    });
  }
}

function initProgressLoader() {
  const progressBtn = document.getElementById('progress-btn');
  const progressFill = document.getElementById('progress-fill');
  const progressText = document.getElementById('progress-text');
  
  if (progressBtn && progressFill && progressText) {
    progressBtn.addEventListener('click', () => {

      progressFill.style.width = '0%';
      progressText.textContent = '0%';
      
      progressBtn.disabled = true;
      progressBtn.textContent = 'Loading...';
      
      let progress = 0;
      const interval = setInterval(() => {
        progress += 2;
        progressFill.style.width = progress + '%';
        progressText.textContent = progress + '%';
        
        if (progress >= 100) {
          clearInterval(interval);
          progressBtn.disabled = false;
          progressBtn.textContent = 'Start Progress';
        }
      }, 30);
    });
  }
}

function initRandomQuote() {
  const quoteBtn = document.getElementById('quote-btn');
  const quoteDisplay = document.getElementById('quote-display');
  const quoteAuthor = document.getElementById('quote-author');
  
  const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
    { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
    { text: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
    { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
    { text: "Life is what happens to you while you're busy making other plans.", author: "John Lennon" }
  ];
  
  if (quoteBtn && quoteDisplay && quoteAuthor) {
    quoteBtn.addEventListener('click', () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const selectedQuote = quotes[randomIndex];
      
      quoteDisplay.style.opacity = '0';
      quoteAuthor.style.opacity = '0';
      
      setTimeout(() => {
        quoteDisplay.textContent = `"${selectedQuote.text}"`;
        quoteAuthor.textContent = `- ${selectedQuote.author}`;
        quoteDisplay.style.opacity = '1';
        quoteAuthor.style.opacity = '1';
      }, 300);
    });
  }
}

window.onload = () => {
  dynamicTabs("#personal");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      const tab = link.getAttribute("href");
      dynamicTabs(tab);
    });
  });
  
  initSimpleCounter();
  initColorCyclingButton();
  initTextRevealer();
  initProgressLoader();
  initRandomQuote();
};
