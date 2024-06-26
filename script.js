const results = document.getElementById("results");
const word = document.getElementById("word");
const addWord = document.getElementById("addWord");

let wordsArray = [];

addWord.addEventListener("click", () => {
    const newWord = word.value.trim();

    if (newWord) {
        wordsArray.push(newWord);
        wordsArray.sort((a, b) => a.localeCompare(b));
        results.innerHTML = "";

        wordsArray.forEach(word => {
            const wordList = document.createElement("p");
            wordList.textContent = word;
            results.appendChild(wordList);
        });
        
        word.value = "";
    }
});