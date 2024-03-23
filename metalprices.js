//Sample Call:
// async function updateGoldPrice() {
//     const bobInput = document.getElementById("bob");
//     bobInput.value = await fetchBidPrice("gold");
// }
// window.onload = updateGoldPrice;
async function fetchBidPrice(metalType) {
    let result = 0;
    try 
    {
        const url = 'https://api.metals.dev/v1/metal/spot?api_key=A9LHCEI3NN7SJJE3UI2I732E3UI2I&metal=' + metalType + '&currency=USD';

        const response = await fetch(url, {
            headers: {
                'Accept': 'application/json',
            },
        });

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
        if (jsonResult.rate.bid > 0) 
        {
            result = jsonResult.rate.bid;
        }
    } catch (error) {
    console.error("fetchBidPrice:", error.message); 
    }
    return result;
}