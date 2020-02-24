axios.get('https://api.github.com/users/GabrielCC163')
	.then(response => {
		console.log(response);
	})
	.catch(error => {
		console.warn(error);
	});