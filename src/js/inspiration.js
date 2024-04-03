let index = 0;
let quotes = [];
let quoteAuthors = [];
let quoteLength = [];
let results = null;

//! ////////////////////////////////////////////////
//! ////////////////////////////////////////////////

// THIS IS A PROXY (SEE VITE CONFIG)
const api_proxy_url = "/api";

async function getQuote(url)
{
  const response = await fetch(url);
  var data = await response.json();
  return await data[0];
}

function renderQuote(quote) {
    console.log(quote)
    document.querySelector("#quote").textContent = quote.q;
    document.querySelector("#quote-author").textContent = `Author: ${quote.a}`;
}

renderQuote(await getQuote(api_proxy_url));

//! ////////////////////////////////////////////////
//! ////////////////////////////////////////////////
