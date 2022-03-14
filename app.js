const card = document.getElementById("card-advice");


async function adviceAPI() {
  const p = document.createElement("p")
  const h1 = document.createElement("h1");
  const advice = "https://api.adviceslip.com/advice";
  try {
    const fetching = await fetch(advice);
    const response = await fetching.json();
    console.log("HOW MANY Q", response);
    const adviced = await ' " '+ response.slip.advice + ' " ';
    const quoteNum = await "ADVICE #" + response.slip.id;
    card.appendChild(p)
    card.appendChild(h1);
    p.innerHTML = quoteNum;
    h1.innerHTML = adviced;
  } catch (error) {
    console.log(`THERE WAS AN ERROR, ${error}`);
  }
}

adviceAPI();
