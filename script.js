

function textGenerator(noOfwords)
{
    let word = {
        1: "lorem",
        2: "ipsum",
        3: "protect",
        4: "sndit",
        5: "callet"
    };
    let s = "";
    for (let i = 0; i < noOfwords; i++) {
        let n = Math.floor(Math.random() * 5) + 1;
        s = s + word[n] + " ";
    }
    s = s[0].toUpperCase() + s.slice(1);
    
    s = s + '.'

    document.querySelector('.txtGenerated').innerHTML = s;
    

}
async function calculate()
{
    const value = document.getElementById('noOfwords').value;
    textGenerator(value);
}





// const input = document.getElementById('noOfwords');
// input.addEventListener('change', textGenerator(value) {
//     const value = input.value;

    
// });


// let userInput = prompt("Enter number of words:");
// console.log("User input:", userInput);

