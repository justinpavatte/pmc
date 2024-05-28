//Sample Call:
// async function updateGoldPrice() {
//     const bobInput = document.getElementById("bob");
//     bobInput.value = await fetchBidPrice("gold");
// }
// window.onload = updateGoldPrice;
async function fetchBidPrice(mType) {
    let result = 0;
    let aKey = "A9LHCEI3NN7SJJE3UI2I732E3UI2I";
    let bUrl = "https://api.metals.dev/v1/metal/spot";
    let url = `${bUrl}?api_key=${aKey}&metal=${mType}&currency=USD`;
    const response = await fetch(url);

    //Sample Return json:
    // {
    //     "status": "success",
    //     "timestamp": "2024-02-23T05:45:07.691Z",
    //     "currency": "USD",
    //     "unit": "toz",
    //     "metal": "silver",
    //     "rate": {
    //         "price": 22.6235,
    //         "ask": 22.632,
    //         "bid": 22.614,
    //         "high": 22.8448,
    //         "low": 22.617,
    //         "change": -0.129,
    //         "change_percent": -0.57
    //     }
    // }
    const jsonResult = await response.json();
    if (jsonResult.rate && jsonResult.rate.bid > 0) 
    {
        result = jsonResult.rate.bid;
    }
    return result;
}