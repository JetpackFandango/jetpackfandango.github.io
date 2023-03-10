fetch('https://activate.games/scores/Matt!/Lexington/scores', {
  headers: {
    'Content-Type': 'application/json',
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
  .then(data => console.log(data))
  .catch(error => console.error(error))