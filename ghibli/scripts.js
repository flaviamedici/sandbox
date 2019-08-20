var request = new XMLHttpRequest();
request.open('GET', 'https://activationstage.seagullscientific.com/boasapi/api/v2/License/GetProductVersions?productVersionID=28', true);
request.onload = function () {

  // Begin accessing JSON data here
// Begin accessing JSON data here
var data = JSON.parse(this.response)

data.forEach(release => {
  // Log each release version
  console.log(release.Name)
})
  }
}  
request.send()
