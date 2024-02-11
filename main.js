const button = document.querySelectorAll("button");


let count =0;
for(let i =0 ;i <button.length; i++){
    button[i].onclick = function(event) {
        event.preventDefault();
        let span = button[i].previousElementSibling;
        console.log(span);
         count = parseInt(span.innerHTML) + 1;
         span.innerHTML = count;

    }
    

}


