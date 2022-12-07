const mongoose = require("mongoose")

const blockChainSchema = new mongoose.Schema ({
          symbol: {
                    type: String,
                    unique: true
                },
                name: {
                    type: String,
                    unique: true
                },
                marketCapUsd: String,
                priceUsd: String
})
module.export =  mongoose.model("block-Chain", blockChainSchema)
