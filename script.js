
function mapLetters(word) {
  // Check if the input is a valid string
  if (typeof word !== 'string' || word.length === 0) {
    // Return an empty object for invalid input
    return {};
  }

  // Create an object to store the indexes of each letter
  const letterMap = {};

  // Loop through each character in the word
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];

    // If the letter is not in the letterMap, initialize it with an empty array
    if (!letterMap[letter]) {
      letterMap[letter] = [];
    }

    // Push the current index to the array for the corresponding letter
    letterMap[letter].push(i);
  }

  return letterMap;
}