class GetApi{
	constructor(url){
		this.url = url;
	}

	/* 
	* Nimmt die APi entgengen und decode sie als JSON und gibt wieder eine Promise zurück
	*/
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


