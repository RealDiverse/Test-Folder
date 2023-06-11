fetch('https://github.com/RealDiverse/Test-Folder').then(function(response) {
    if (response.ok) {
        return response.json();
    }
    throw new Error('Network response was not OK'); 
})
.then(function(data)
{
    console.log(data);
})

.catch(function(error) {
    // Handle any errors
    console.log('Error:', error.message);
  });