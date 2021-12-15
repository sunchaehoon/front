const quotes = [
    {
        quote: "I had never go to the first base for walking.",
        author: "JunHyuk Yang",
    },
    {
        quote: "Ordeal can be the chance.",
        author: "Jungil Ryu",
    },
    {
        quote: "The life isn't speed, but direction.",
        author: "ChangYong Lim",
    },
    {
        quote: "There is no development if you lose and no furious",
        author: "JongHun Park",
    },
    {
        quote: "Trick can't win the skill.",
        author: "HyunSeong Lee",
    },
    {
        quote: "Because there was a DongWon Choi, trying to overcome him made me who I am today.",
        author: "DongYeol Sun",
    },
    {
        quote: "Say what the other person wants to hear rather than what I want to say.",
        author: "JaeSuk Yoo",
    },
    {
        quote: "The 30 seconds of the lips are 30 years of the mind.",
        author: "JaeSuk Yoo",
    },
    {
        quote: "Compliments have feet, while gossip has wings.",
        author: "JaeSuk Yoo",
    },
    {
        quote: "Don't say what you can't say in front of you.",
        author: "JaeSuk Yoo",
    }
]


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;


//Math.round(0.1);    // Math.round(x) --> x를 반올림해줌
//Math.ceil(1.01);    // Math.ceil(x) --> x를 올림해줌(x=1.001 -> x=2)
//Math.floor(1.99);   // Math.floor(X) --> x를 내림해줌 Math.ceil()과 반대  
