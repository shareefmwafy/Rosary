const button = document.querySelectorAll("button");
const zero = document.querySelectorAll(".zero");
const end = document.querySelectorAll(".end");
const spanAll =document.querySelectorAll("span");

let count =0;
for(let i =0 ;i <button.length; i++){
    button[i].onclick = function(event) {
        event.preventDefault();
        let span = button[i].previousElementSibling;
        // console.log(span);
         count = parseInt(span.innerHTML) + 1;
         span.innerHTML = count;

    }
}
for (let i=0; i<zero.length; i++) {
    zero[i].onclick = function(event) {
        event.preventDefault();
        let span = zero[i].previousElementSibling;
        let span1 =span.previousElementSibling;
        span1.innerHTML =0;

    }

}

end.onclick = function(event) {
    event.preventDefault();
    console.log(spanAll);
    // for (let i=0; i<spanAll.length; i++) {
    //     spanAll[i].innerHTML = 0;
    // }

}