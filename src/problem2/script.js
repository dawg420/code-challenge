
const fetchPrices = async () => {
    try {
        const response = await fetch('https://interview.switcheo.com/prices.json'); 
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data; // This should be an array of prices
    } catch (error) {
        console.error("Failed to fetch prices:", error);
        return [];
    }
};

const getCurrencyPrice = (currency, prices) => {
    const currencyData = prices.find(p => p.currency === currency);
    return currencyData ? currencyData.price : null;
};

async function swapCurrencies() {
    let fromCurrency = document.getElementById('fromCurrency').value;
    let toCurrency = document.getElementById('toCurrency').value;
    let amount = document.getElementById('amount').value;

    if (!amount || amount <= 0) {
        alert('Please enter a valid amount');
        return;
    }

    const prices = await fetchPrices();

    let fromPrice = getCurrencyPrice(fromCurrency, prices);
    let toPrice = getCurrencyPrice(toCurrency, prices);

    if (fromPrice && toPrice) {
        let convertedAmount = (amount * fromPrice) / toPrice;
        displayConversionResult(convertedAmount);
        // Display the result
    } else {
        displayConversionResult('Currency conversion rates not found.');
    }
}

function displayConversionResult(conversionResult) {

    // Update the conversionResult div with the conversion result
    document.getElementById('conversionResult').innerHTML = `You receive: ${conversionResult}`;
}