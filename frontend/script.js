fetch('http://localhost:5000/api/goals',{
    method: "POST",
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({text: ''})
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));