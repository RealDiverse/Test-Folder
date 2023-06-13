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


let button;
 
    document.querySelector("#test").addEventListener("click", function(){

       button = document.querySelector("#test").innerHTML;
       button.innerHTML = "hello world";
    })



let timeLeft = 30;
let elementId = document.querySelector("#test");
let timeAmount = setInterval(timer, 1000);


function timer(){
    if (timeLeft == 0) 
    {
        setTimeout(timeLeft);
        console.log(elementId.innerHTML = timeLeft + " time has eneded");
    }
    else 
    {
        elementId.innerHTML = timeLeft + " seconds remaining";
        timeLeft--; 
        console.log(elementId.innerHTML = timeLeft +  " seconds remaining");

    }
}
  