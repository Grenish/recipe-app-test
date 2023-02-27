const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a3e5f9a15dmshd07a532e0f00d6cp18edc5jsnbb93cb6724b7',
		'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=Chicken%20Biryani', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));