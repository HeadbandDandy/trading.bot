const Alpaca = require('@alpacahq/alpaca-trade-api')
const API_KEY = "PKVTPATP4VGGB3XCPWWS";
const API_SECRET = "o854Bq8cM8fJPC31hQxs9WUxyH1MFftMbwAz3pc3";

class DataStream {
    constructor ({apiKey, secretKey, feed}) {
        this.alpaca = new Alpaca ({
            keyId: apiKey,
            secretKey,
            feed,
        })
    }
}

const socket = this.alpac.data_stream_v2;

socket.onConnect(function (){
    console.log("Connected");
    socket.subscribeForQuotes(['AAPL'])
})

