// my solution

var game = {};

game.characters = [];
game.rooms = [];
game.confidential = [];

game.characters[0] = "Mrs. White";
game.characters[1] = "Mr. Green";
game.characters[2] = "Ms. Peacock";
game.characters[3] = "Ms. Scarlet";
game.characters[4] = "Col Mustard";
game.characters[5] = "Prof Plum";

game.weapons[0] = "rope"
game.weapons[1] = "lead pipe"
game.weapons[2] = "revolver"
game.weapons[3] = "candlestick"
game.weapons[4] = "knife";

game.rooms[0] = "Billiard Room";
game.rooms[1] = "Conservatory";
game.rooms[2] = "Kitchen";
game.rooms[3] = "Study";
game.rooms[4] = "Dining Room";
game.rooms[5] = "Library";

console.log(game);

// video solution with student assistance

var game = {};

game.murderer = "??";

game[weapons] = [
  {type: 'lasers', location: 'lab'},
  {type: 'angry cats', location: 'kennel'}, //this line in video has ... instead of location and kennel.  I added to appease eslint
  'dish soap'
];

game.name = [];
game.name[0] = 'Miss Scarlet';
game.name.push('Mr. Green');


