$(document).ready(function(){
 getfraseIntera().then(() => {
    getFrase();
});
$('#new-quote').on('click', getFrase);
});


let fraseIntera;
var frase='';
var autore='';
var colori = [
  '#EE82EE',
  '#6A5ACD',
  '#FF0000',
  '#FFA500',
  '#BDB76B',
  '#90EE90',
  '#20B2AA',
  '#1E90FF',
  '#708090',
  '#F4A460'
];

function getfraseIntera() {
return $.ajax ({
  headers: {
      Accept: 'application/json'
    },
  url: 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
  success: function(jsonQuotes) {
    if (typeof jsonQuotes == 'string'){
      fraseIntera=JSON.parse(jsonQuotes);
    }
  }
});
};

function getRandomFrase() {
  return fraseIntera.quotes[Math.floor(Math.random() * fraseIntera.quotes.length)];
}

function getFrase() {
  let random = getRandomFrase();
  frase=random.quote;
  autore=random.author;
  $('#comboText').text(frase);
  $('#comboAut').text('-'+autore+'-');
}

$('#new-quote').on('click', function() {
let colore = Math.floor(Math.random() * colori.length);
$('html body').animate(
    {
      backgroundColor: colori[colore],
      color: colori[colore]
    },
    1000
  );
$('.button').animate(
    {
      backgroundColor: colori[colore]
    },
    1000
  );
});

