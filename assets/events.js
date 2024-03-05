const btn = document.querySelector('.btn');

 btn.onclick = () => alert('Hello world!');

 const btnTwo = document.querySelector('.btnTwo');

 btnTwo.addEventListener('click', () => {
    alert("I said don't click me!");
 });