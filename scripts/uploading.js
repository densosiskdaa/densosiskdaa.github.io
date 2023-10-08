const doc = document.getElementsByClassName("data-block")[0];
let ip = '172.20.10.8:8888';
let url = `http://${ip}/get`;

fetch(url).then(function (response) {
	console.log(response);
	if (response.ok) {
	    response.json().then(function (jsonObj) {
	        Object.entries(jsonObj.data).forEach(([key, value]) => {
	        	let elem = `<div class="block data-decoration"><img class="data data-icon" src="icons/${key}.png"><p class="data">${key[0].toUpperCase() + key.slice(1)}: ${value}</p>`;
	        	doc.insertAdjacentHTML("beforeend", elem);
	            console.log(key, value);
	        });
	    });
	 } else {
	    console.log(
	      "Network request for products.json failed with response " +
	        response.status +
	        ": " +
	        response.statusText,
	    );
  	}
});