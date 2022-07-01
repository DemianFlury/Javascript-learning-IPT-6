"use strict";

const exchangeRates = new Map();

exchangeRates.set("EUR",1.02);
exchangeRates.set("USD",0.96);
exchangeRates.set("GBP",1.16);

let currency = "EUR";


function convertTo(symbol, chf) {

    if(exchangeRates.has(symbol) && chf>0)
    {
        let cours = exchangeRates.get(symbol);
        return chf*cours;
    }

    else
    {
        console.log("Keine ankerkannte Währung");
    }

}
console.log(convertTo(currency, 69));