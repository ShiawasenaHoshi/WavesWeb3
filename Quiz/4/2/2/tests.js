/**
 * Created by vasily on 09.06.19.
 */
let datajson = {
    "Title": "Waves t-Shirt with love, vote 1",
    "coupon_price": 10000000,
    "old_price": 1000000000,
    "new_price": 100000000,
    "address": "Universe",
    "description": "In theory there is no difference between theory and practice. In practice there is. (Yogi Berra)",
    "image": "http://bit.ly/2WSUODH"
};

const accountSupplierSeed = "fluid easily catalog few vacuum soldier bar milk rather alone prize trip";
const dappAddress = "3MvWngGcbddUagYREyqeAKSFNw3H92w7LS4";

it('add item', async function () {
    let ts = invokeScript({
            dApp: dappAddress,
            call: {
                function: "addItem",
                args: [
                    {type: "string", value: datajson.Title},
                    {type: "integer", value: datajson.coupon_price},
                    {type: "string", value: JSON.stringify(datajson)}
                ]
            },
            payment: []
        }, accountSupplierSeed
    );
    let tx = await broadcast(ts);
    await waitForTx(tx.id)
});