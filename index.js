//Import the library
const server = require('server');

//I know it's traditional to have something say "Hello World!", but I like making this "The Simpsons" reference.
//server(_ctx=> '<h1>Hello Joe!</h1>');
server(_ctx => '<h1>Hello Joe!</h1><iframe width="560" height="315" src="https://www.youtube.com/embed/c9rTdXX0emY" alt="More insteresting version of Hello World!" "title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br>');