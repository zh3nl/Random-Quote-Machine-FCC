window.onload = reloadWindow; 

const quoteButton = document.getElementById("new-quote");

const quoteList = [
    {
        quote: "If you do what you’ve always done, you’ll get what you’ve always gotten.",
        author: "Tony Robbins"
    }, 
    {
        quote: "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
        author: "Michael Jordan"
    },
    {
        quote: "You miss 100% of the shots you don’t take.",
        author: "Wayne Gretzky"
    },
    {
        quote: "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.",
        author: "Helen Keller"
    },
    {
        quote: "A truly rich man is one whose children run into his arms when his hands are empty.",
        author: "Unknown"
    },
    {
        quote: "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.", 
        author: "Booker T. Washington"
    }
];

var colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];

function reloadWindow() {
    generateQuote(); 
}

function generateQuote() {
    let randomIndex = Math.floor(Math.random() * quoteList.length); 
    document.getElementById("text").innerText = quoteList[randomIndex].quote; 
    document.getElementById("author").innerText = quoteList[randomIndex].author; 
    
      var color = Math.floor(Math.random() * colors.length);
      $('html body').animate(
        {
          backgroundColor: colors[color],
          color: colors[color]
        },
        1000
      );
      $('.button').animate(
        {
          backgroundColor: colors[color]
        },
        1000
      );
}

quoteButton.onclick = () => {
    generateQuote(); 
}