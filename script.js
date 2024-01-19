const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];

    if (str) {
        results = fruit.filter(f => f.toLowerCase().includes(str.toLowerCase()));
    }
	console.log(results);
	return results;
	
}

function searchHandler(e) {
	 // Get the current text from the input field
	 const searchText = e.target.value;

	 // Call the search function and get results
	 const results = search(searchText);
 
	 // Now, let's make those suggestions show up
	 showSuggestions(results, searchText);
}

function showSuggestions(results, inputVal) {

	 // Clear the current suggestions
	 suggestions.innerHTML = '';

	 // Add new suggestions
	 results.forEach(fruit => {
		 const li = document.createElement('li');
		 li.textContent = fruit;
		 suggestions.appendChild(li);
	 });
}

function useSuggestion(e) {
	// TODO
}


function highlightSuggestion(e) {
    if (e.target.tagName === 'LI') {
        e.target.style.backgroundColor = '#ffebcd'; // Light goldenrod yellow, because why not?
    }
}


input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
suggestions.addEventListener('mouseover', highlightSuggestion);
suggestions.addEventListener('mouseout', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.style.backgroundColor = ''; // Back to normal when you move away.
    }
});