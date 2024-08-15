var quoteArr = [
    {
        quote: `“Be yourself; everyone else is already taken.”`,
        author: `― Oscar Wilde`,
    },
    {
        quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
        author: `― Albert Einstein`,
    },
    {
        quote: `“A room without books is like a body without a soul.”`,
        author: `― Marcus Tullius Cicero`,
    },
    {
        quote: `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.” `,
        author: `― Dr. Seuss`,
    },
    {
        quote: `“You only live once, but if you do it right, once is enough.” `,
        author: `― Mae West`,
    },
    {
        quote: `“Be the change that you wish to see in the world.”`,
        author: `― Mahatma Gandhi`,
    },
    {
        quote: `“In three words I can sum up everything I've learned about life: it goes on.” `,
        author: `― Robert Frost`,
    },
    {
        quote: `“If you tell the truth, you don't have to remember anything.”`,
        author: `― Mark Twain`,
    },
    {
        quote: `“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”`,
        author: `― C.S. Lewis, The Four Loves`,
    },
    {
        quote: `“Always forgive your enemies; nothing annoys them so much.”`,
        author: `- Oscar Wilde`,
    },
    {
        quote: `“A friend is someone who knows all about you and still loves you.”`,
        author: `― Elbert Hubbard`,
    },
];
var currentRandom;
function getQuotes() {
    var randomNumber = Math.floor(Math.random() * quoteArr.length);
    while (randomNumber === currentRandom) {
        randomNumber = Math.floor(Math.random() * quoteArr.length);
    }
    currentRandom = randomNumber;
    console.log(currentRandom);
  document.getElementById("quote").innerHTML = quoteArr[currentRandom].quote;
  document.getElementById("author").innerHTML =
    quoteArr[currentRandom].author;
}





