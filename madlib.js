alert('Welcome to my Mad-Libs game! Please fill in the blanks.');

var adjective1 = prompt('Please provide an adjective');
console.log(adjective1);
var language = prompt('Please provide a programming language');
console.log(language);
var verb = prompt('Please provide a verb');
console.log(verb);
var noun = prompt('Please provide a noun');
console.log(noun);
var adjective2 = prompt('Please provide another adjective');
console.log(adjective2);
var noun2 = prompt('Please provide another noun');
console.log(noun2);

alert('Thank you, your story is being processed.');

var story = '<h3>There once was a ';
story += adjective1;
story += ' junior programmer learning to write ';
story += language;
story += '. He was having a lot of fun. He decided that one day he would ';
story += verb;
story += ' with his ';
story += noun;
story += ' to live in another country since he could work from home once he became a programmer. He felt like this idea was ';
story += adjective2;
story += ' and couldn\'t wait to finish his studies. He might even take his ';
story += noun2;
story += ' with him!</h3>';

document.write(story);
