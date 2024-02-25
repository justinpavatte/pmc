//Sample Result:
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
async function fetchBidPrice(metalType) {
    const url = 'https://api.metals.dev/v1/metal/spot?api_key=A9LHCEI3NN7SJJE3UI2I732E3UI2I&metal=' + metalType + 'gold&currency=USD';

    const response = await fetch(url, {
        headers: {
            'Accept': 'application/json',
        },
    });

    const jsonResult = await response.json();
    let result = 0;
    if (jsonResult.status = 'success') 
    {
        result = jsonResult.rate.bid;
    }
    return result;
}