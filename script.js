fetch('https://demo.communitycad.app/')
  .then(response => response.text())
  .then(data => {
    document.getElementById('content').innerHTML = data;
  })
  .catch(error => console.error('Error fetching content:', error));
