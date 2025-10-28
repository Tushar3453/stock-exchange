class OrderBook{
    constructor(symbol="BTCUSD"){
        this.symbol=symbol,
        this.bids=[],
        this.ask=[],
        this._nextId=1,
        this.lastTradedPrice=null
    }
    //helper
    _genorderId(){
        return this._nextId++
    }
    _sort(sides){
        if(sides==="BUY"){
            this.bids.sort((a,b)=>{
                if(a.price==b.price){
                    return b.price-a.price;
                }
                return a.timestamp-b.timestamp;
            })
        }
        else{
            this.ask.sort((a,b)=>{
                if(a.price==b.price){
                    return b.price-a.price;
                }
                return a.timestamp-b.timestamp;
            })
        }
    }
    placeOrder(){

    }
    _marketMatch(){
        
    }
    _limitMatch(){

    }
}
let BTCUSDOrderBook=new OrderBook();
BTCUSDOrderBook.bids.push({orderId:2,side:"BUY",type:"MARKET",price:100,
quantity:10,timestamp:Date.now(),user:"Tushar"})

BTCUSDOrderBook.bids.push({orderId:2,side:"BUY",type:"MARKET",price:100,
quantity:10,timestamp:Date.now(),user:"Ritik"})

BTCUSDOrderBook.bids.push({orderId:2,side:"BUY",type:"MARKET",price:100,
quantity:10,timestamp:Date.now(),user:"Smiley"})
console.log(BTCUSDOrderBook.bids)

