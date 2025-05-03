// just need to implement the playlistManager function
// return the final playlist only
function playlistManager(actions) {
  const playlist = []; // current list of songs
  
  for (const action of actions) {
    if (action.startsWith("addSong(")) {
      // Extract the song name 
    
      const match = action.match(/'([^']+)'/);
      if (match && match[1]) {
        playlist.push(match[1]);
      }
    } else if (action === "undo()") {
      playlist.pop();
    }
  }

  return playlist;
}


const actions = [
  "addSong('Song 1')",
  "addSong('Song 2')",
  "undo()",
  "addSong('Song 3')"
];

console.log(playlistManager(actions));  // Output: ["Song 1", "Song 3"]


const actions2 = [
  "addSong('Blue')",
  "addSong('Perfect')",
  "undo()",
  "addSong('Lonely')"
];

console.log(playlistManager(actions2)); // Output: ["Blue", "Lonely"]


