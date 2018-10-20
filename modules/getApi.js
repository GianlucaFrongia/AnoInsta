class GetApi{
	constructor(url){
		this.url = url;
	}

	getItems() {
		let options = {
			url: this.url,
		};
		return fetch(options.url)
		.then(response => response.json())
		.then(json => {return json});
	}
}

export default GetApi;


