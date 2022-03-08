const card = document.getElementById("card-container");
const adviceHeader = document.getElementsByClassName("advice-header")

const fetchedData = fetch("	https://api.adviceslip.com/advice");
console.log("DATA FROM ADVICE", fetchedData.then(res => {
    return res.json()
}).then(
    advice => {
        console.log("LOOKING FOR ADVICE", advice);
    }
))
