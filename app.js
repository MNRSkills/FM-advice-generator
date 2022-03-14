const card = document.getElementById("card-advice");


async function adviceAPI() {
  const p = document.createElement("p")
  const h1 = document.createElement("h1");
  const advice = "https://api.adviceslip.com/advice";
  try {
    card.appendChild(p)
    card.appendChild(h1);
    const fetching = await fetch(advice);
    const response = await fetching.json();
    console.log("HOW MANY Q", response);
    const adviced = await ' " '+ response.slip.advice + ' " ';
    const quoteNum = await "ADVICE #" + response.slip.id;
    p.innerHTML = quoteNum;
    h1.innerHTML = adviced;
  } catch (error) {
    console.log(`THERE WAS AN ERROR, ${error}`);
  }
}

adviceAPI();
