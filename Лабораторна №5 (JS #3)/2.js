function checkForm(form){
	let text = form.text.value;
	let words = getWords(text);
	let count_of_words_with_ie_y_endings = countWordsWithSpecifiedEnding(words,"ie") + countWordsWithSpecifiedEnding(words, "y");

	form.result.value = count_of_words_with_ie_y_endings;
}

function getWords(text){
	return text.split(" ");
}

function countWordsWithSpecifiedEnding(words, ending){
	let count = 0;
	for(let i = 0; i < words.length; i++){
		let word_ending = words[i].substr(words[i].length - ending.length, ending.length);
		if(word_ending == ending)
			count++;
	}
	return count;
}