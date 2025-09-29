const verseChoose = document.querySelector('select');
const poemDisplay = document.querySelector('pre');

verseChoose.addEventListener('change', () => {
    const verse = verseChoose.value;
    updateDisplay(verse)
})

function updateDisplay(verse) {
    verse = verse.replace(" ", "").toLowerCase();
    const url = `./Texts/${verse}.txt`;
    fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP Error : ${res.status}`)
            }

            return res.text()
        })
        .then(text => {
            poemDisplay.textContent = text
        })
        .catch(err => {
            poemDisplay.textContent = `Could not fetch : ${err}`
        })
}

updateDisplay('verse1')