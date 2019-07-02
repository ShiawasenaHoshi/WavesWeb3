const DAPP_ORACLE_ADDR = "3Mv5uC6eKtu17WtbnuJsiA9zoSBaB9qVgz9"
const DAPP_ORACLE_SEED = "note answer slot situate gallery impact warfare wife reveal brand sweet summer"

const DAPP_ADDR_BAZAAR = "3MutMSV4VWEfxe92WB7oV4Qq6covBjSCb1n"

const VERIFIED_SEED = "task exact assault north general skull void siren scale fan cinnamon purchase"
const VERIFIED_ADDR = "3MtF8XohnsUwhg2uaJXczRGWyJ8aMYYGHFk"

let datajson = {
    "title": "Waves t-Shirt with love, vote 2",
    "coupon_price": 10000000,
    "old_price": 1000000000,
    "new_price": 100000000,
    "address": "Universe",
    "description": "In theory there is no difference between theory and practice. In practice there is. (Yogi Berra)",
    "image": "http://bit.ly/2WSUODH"
};

it('verify by oracle', async function () {
    let ts = invokeScript({
        dApp: DAPP_ORACLE_ADDR,
        call: {
            function: "setStatus",
            args: [
                {type: "string", value: VERIFIED_ADDR},
                {type: "string", value: "verified"}
            ]
        },
        payment: []
    }, DAPP_ORACLE_SEED)
    let tx = await broadcast(ts)
    await waitForTx(tx.id)
})

it('blacklist by oracle', async function () {
    let ts = invokeScript({
        dApp: DAPP_ORACLE_ADDR,
        call: {
            function: "setStatus",
            args: [
                {type: "string", value: ""},//BLACKLISTED_ADDR
                {type: "string", value: "blacklist"}
            ]
        },
        payment: []
    }, DAPP_ORACLE_SEED)
    let tx = await broadcast(ts)
    await waitForTx(tx.id)
})

it('add item', async function () {
    let ts = invokeScript({
        dApp: DAPP_ADDR_BAZAAR,
        call: {
            function: "addItem",
            args: [
                {type: "string", value: datajson.title},
                {type: "integer", value: datajson.coupon_price},
                {type: "string", value: JSON.stringify(datajson)}
            ]
        },
        payment: []
    }, VERIFIED_SEED)
    let tx = await broadcast(ts)
    await waitForTx(tx.id)
})