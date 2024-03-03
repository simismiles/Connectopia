// Dictionary of words and their connections
const wordConnections = {
    "happy": ["happiness", "happier", "happiest"],
    "big": ["bigger", "biggest"],
    "fast": ["faster", "fastest"],
    // Add more words and their connections here
};

function mergeWord() {
    var inputWord = document.getElementById("word").value.toLowerCase();
    var result = document.getElementById("result");

    // Check if the input word exists in the dictionary
    if (wordConnections.hasOwnProperty(inputWord)) {
        var connections = wordConnections[inputWord];

        // Display the connections
        result.innerHTML = "<strong>Connections:</strong><br>" + connections.join(", ");
    } else {
        // If the word is not found in the dictionary
        result.innerHTML = "Word not found. Please try another word.";
    }
}
