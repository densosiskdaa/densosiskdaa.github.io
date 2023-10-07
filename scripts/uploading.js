const doc = document.getElementsByClassName("data-block")[0]
let ip = ''
let url = 'http://${ip}/get_data'
let json = {
	"a": 12,
	"b": 13
}

Object.entries(json).forEach(([key, value]) => {
    console.log(key, value);
});
/*fetch(url).then(function (response) {
  if (response.ok) {
    response.json().then(function (jsonObj) {
        Object.entries(jsonObj).forEach(([key, value]) => {
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
*/
let elem = '<div class="block data-decoration"><img class="data data-icon" src="icons/temperature.png"><p class="data">Humidity: 1 C</p>'
document.insertAdjacentHTML