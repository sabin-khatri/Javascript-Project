const quotes = [
    {
        quote: "Never give up because you never know if the next try is going to be the one that works.",
        author: "Mary Kay Ash"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "It always seems impossible until it’s done.",
        author: "Nelson Mandela"
    }
];
const quoteText = document.querySelector('.quote');
const authorText = document.querySelector('.name');
const newQuoteButton = document.querySelector('button');
const copyButton = document.querySelector('.copy');
const twitterButton = document.querySelector('.twitter');
const soundButton = document.querySelector('.sound');
newQuoteButton.addEventListener('click', ()=>{
    const randomIndex = Math.floor(Math.random()* quotes.length);
    const randomquote = quotes[randomIndex];
    quoteText.textContent=randomquote.quote;
    authorText.textContent=randomquote.author;

    twitterButton.parentElement.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${randomQuote.quote}" - ${randomQuote.author}`)}`;
});
copyButton.addEventListener('click',()=>{
    const textToCopy = `"${quoteText.textContent}" - ${authorText.textContent}`;
    navigator.clipboard.writeText(textToCopy).then(()=>{
        alert("quote copied to clipboard");
    });
});
soundButton.addEventListener('click', ()=>{
    const quoteToSpeak = `"${quoteText.textContent}" - ${authorText.textContent}`;
    const utterance = new SpeechSynthesisUtterance(quoteToSpeak);
    speechSynthesis.speak(utterance);
});
newQuoteButton.click();