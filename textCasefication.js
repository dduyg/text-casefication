function convertText(caseType) {
    let text = document.getElementById("inputText").value;
    let convertedText = "";

    switch (caseType) {
        case 'uppercase':
            convertedText = text.toUpperCase();
            break;
        case 'lowercase':
            convertedText = text.toLowerCase();
            break;
        case 'titlecase':
            convertedText = toTitleCase(text);
            break;
        case 'capitalizedcase':
            convertedText = toCapitalizedCase(text);
            break;
        case 'sentencecase':
            convertedText = toSentenceCase(text);
            break;
        case 'spacetohyphen':
            convertedText = text.replace(/\s/g, '-');
            break;
        case 'hyphtospace':
            convertedText = text.replace(/-/g, ' ');
            break;
        case 'spacetounderscore':
            convertedText = text.replace(/\s/g, '_');
            break;
        case 'underscoretospace':
            convertedText = text.replace(/_/g, ' ');
            break;
        case 'camelcase':
            convertedText = toCamelCase(text);
            break;
        case 'pascalcase':
            convertedText = toPascalCase(text);
            break;
    }

    document.getElementById("inputText").value = convertedText;
}

function toTitleCase(text) {
    return text.toLowerCase().split(' ').map(word => {
        if (word !== "" && !isMinorWord(word)) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        } else {
            return word;
        }
    }).join(' ');
}

function isMinorWord(word) {
    const minorWords = ['a', 'an', 'the', 'and', 'but', 'or', 'for', 'nor', 'on', 'at', 'to', 'by', 'of', 'up', 'with', 'as'];
    return minorWords.includes(word.toLowerCase());
}

function toCapitalizedCase(text) {
    return text.toLowerCase().replace(/^(.)|\s(.)/g, function($1) { return $1.toUpperCase(); });
}

function toSentenceCase(text) {
    return text.toLowerCase().replace(/(^\w{1})|(\.\s*\w{1})/g, function(char) {
        return char.toUpperCase();
    });
}

function toCamelCase(text) {
    text = text.toLowerCase(); // Convert the entire text to lowercase
    return text.replace(/\W+(.)/g, function(match, chr, index) {
        // Uppercase the first character of each word, except for the first word
        if (index === 0) {
            return chr;
        } else {
            return chr.toUpperCase();
        }
    });
}

function toPascalCase(text) {
    return text.toLowerCase().split(' ').map(word => {
        if (word !== "" && !isMinorWord(word)) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        } else {
            return word;
        }
    }).join('');
}

function copyText() {
    let copyText = document.getElementById("inputText");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    document.execCommand("copy");
    copyText.blur();

    // Change button appearance to indicate successful copy
    let copyButton = document.querySelector('.copy-btn');
    copyButton.innerText = 'Copied!';
    copyButton.classList.add('copied');

    // Reset button appearance after a short delay
    setTimeout(() => {
        copyButton.innerText = 'Copy to Clipboard';
        copyButton.classList.remove('copied');
    }, 1500); // Reset after 1.5 seconds
}

function clearText() {
    document.getElementById("inputText").value = ""; // Clear the input text area
}
