const card = document.getElementById("card-container");


async function adviceAPI() {
  const h1 = document.createElement("h1");
  const advice = "https://api.adviceslip.com/advice";
  try {
    const fetching = await fetch(advice);
    const response = await fetching.json();
    const adviced = await response.slip.advice;
    card.appendChild(h1);
    h1.innerHTML = adviced;
  } catch (error) {
    console.log(`THERE WAS AN ERROR, ${error}`);
  }
}

adviceAPI();
