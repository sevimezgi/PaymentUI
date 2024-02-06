export const availableCurrencies = ['USDT'];

export const currencies = {
    USDT: {
        name: 'Tether (USDT)',
        priceUrl: 'https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=usd',
        contractAddress: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
        networkName: 'Polygon PoS Mainnet',
    }
};
