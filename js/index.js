var quotes=["“Be yourself; everyone else is already taken.”",
    "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle.”", 
    "“So many books, so little time.”",
    "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    "“A room without books is like a body without a soul.”"
];

var quoteButton = document.getElementById("newquote");

var quoteElement = document.getElementById("quote");

quoteButton.addEventListener("click", generateRandomQuote);

function generateRandomQuote() {

    var randomIndex = Math.floor(Math.random() * quotes.length);

    quoteElement.textContent = quotes[randomIndex];

}