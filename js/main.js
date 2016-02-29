var story = alert ('Let’s make a story together!');
var colour = prompt('A colour (orange, indigo, etc.)');
var creature = prompt('A creature (dragon, moth, etc.)');
var adjective = prompt('An adjective (beautiful, super, etc.)');

var group = prompt('Which story would you like?\na) Snacking\nb) Escaping\nc) Winning\nEnter the letter below');
var abc = [ 'a, b, c' ];

if (group == 'A') {
    // Story A
    document.write(abc + 'After snacking on ' + adjective + ' treats, the ' + colour + ' bellied ' + creature + verbed + ' for hours.');
  else if (group == 'B') {
    // Story B
    document.write(abc + 'Ameilia' + verbed + ' through the ' + adjective + colour + ' nebula escaping the space ' + creature '.') };
  }
  else if (group == 'C') {
    // Story C
    document.write(abc + 'Jackson chose his ' + adjective+ ', ' + colour + creature + 'card and ' + verbed + 'it to the table knowing he won.') };
  }
}
