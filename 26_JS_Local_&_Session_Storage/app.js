/*
Storage
------------

-> Local Storage
which can be saved and accessed even after closing the browser

-> string -> JSON.stringify(), parse()

    => setItem('key', value); // create / update
    => getItem('key'); // read
    => removeItem('key'); // delete
    => clear();


-> Sesson Storage
which can be saved and accessed only when browser is running

-> string -> JSON.stringify(), parse()

    => setItem('key', value); // create / update
    => getItem('key'); // read
    => removeItem('key'); // delete
    => clear();

*/
// Local Storage *********************************
// Local Storage for simple string

let empName = 'John';

// set
localStorage.setItem('name', empName);

// get
console.log(localStorage.getItem('name'));

// delete the key
localStorage.removeItem('name');

// clear
// localStorage.clear();

// local storage with an array
let colors = ['white', 'black', 'silver', 'purple', 'yellow'];
localStorage.setItem('colors', colors);

let newColors = [   {id : 1, name : 'white'}, 
                    {id : 2, name : 'silver'},
                    {id : 3, name : 'yellow'},
                    {id : 4, name : 'purple'},
                ];

localStorage.setItem('newcolors', JSON.stringify(newColors));

let theNewColors = JSON.parse(localStorage.getItem('newColors'));
// console.log(theNewColors);

// localStorage.removeItem('newColors');


// Session Storage *********************************

// Session Storage with simple string
let studentName = 'Rajan';

// set
sessionStorage.setItem('name', studentName);

// get
console.log(sessionStorage.getItem('name'));

// delete
sessionStorage.removeItem('name');

// clear
sessionStorage.clear();

// session storage with an array
newColors = [       {id : 1, name : 'white'}, 
                    {id : 2, name : 'silver'},
                    {id : 3, name : 'yellow'},
                    {id : 4, name : 'purple'},
            ];

sessionStorage.setItem('newcolors', JSON.stringify(newColors));

theNewColors = JSON.parse(sessionStorage.getItem('newColors'));
// console.log(theNewColors);

sessionStorage.removeItem('newColors');