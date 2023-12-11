
// !declaration variables
var quotecontant=document.getElementById("quote");
var auterName=document.getElementById("name");
var arrayOfQuotes=[ 
    {'author': 'Marcus Tullius Cicero', 
'quote': 'A room without books is like a body without a soul.'
},

{'author': 'Frank Zappa', 
'quote': 'So many books, so little time.'
},
{'author': 'Mae West', 
'quote': 'You only live once, but if you do it right, once is enough.'
},
{'author': 'Mahatma Gandhi', 
'quote': 'Be the change that you wish to see in the world.'
},

{'author': 'Mark Twain', 
'quote': "If you tell the truth, you don't have to remember anything."
},
{'author': 'Maya Angelou', 
'quote': "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."
},
{'author': ' Oscar Wilde', 
'quote': 'Always forgive your enemies; nothing annoys them so much.'
},
{'author': 'Martin Luther King Jr', 
'quote': 'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.'
},
{'author': 'Mahatma Gandhi', 
'quote': 'Live as if you were to die tomorrow. Learn as if you were to live forever.'
},

{'author': 'Stephen Chbosky', 
'quote': "We accept the love we think we deserve."
}

];


// &&&&&&&&&&&&&&&&&random value
function generateQuote(){
    var randomValue;

    var newRandom=-1;
    do
    {
       
    
        randomValue=Math.trunc(Math.random()*(arrayOfQuotes.length));
 
    }while(randomValue==newRandom);

newRandom=randomValue;
quotecontant.innerHTML= `<q>${arrayOfQuotes[randomValue].quote}</q> `;
auterName.innerHTML= `--${arrayOfQuotes[randomValue].author} `;
}