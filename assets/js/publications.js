
var request = new XMLHttpRequest();

// The user variable used below is in a liquid tag in _includes/scripts that gets the username from _config
var url = "https://ci.lib.ncsu.edu/api/v1/authors/" + user;
request.open('GET', url , true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response)[0];

  if (request.status >= 200 && request.status < 400) {
    data.citations.forEach(citations => {
      console.log(citations.id)
        var link = citations.source.handle || citations.source.doi;

        var div = document.createElement("div");
        div.setAttribute("id", "item")

        div.innerHTML = "<div class='upper-row'><h3 class='presentation-title'><a href='https://ci.lib.ncsu.edu/citation/" + citations.id + "'target='blank'>" + citations.title + "</a></h3>" + "<div class='pub-time'>" + citations.year + "</div></div>" + "<p class='presentation-summary'>" + citations.author + "</p>"

        document.getElementById('container').appendChild(div)

    });

  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.innerHTML = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();
