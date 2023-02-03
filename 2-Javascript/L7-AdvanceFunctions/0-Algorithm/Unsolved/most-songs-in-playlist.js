// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
//? Return the maximum number of songs from the list that can fit in a 60 minute playlist

var mostSongsInPlaylist = function (arr) {
  // add your code here...
  let totalMins = 0;
  let totalSongs = 0;
  // TODO loop over the arr parameter, what should happen during each iteration
  // * [3,6,1,5,2]
  for (let song of arr.sort()) {
    //* totalMins = 59
    //* song = 5
    if (totalMins + song <= 60) {
      //
      totalMins += song;
      totalSongs++;
    } else {
      return totalSongs;
    }
  }
  return totalSongs;
};

/*
Each position represents 1 song
Each number represents the length of the song in minutes
Your job, is to return how many songs can be played within a 60min window
*/
