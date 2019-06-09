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

const accountCustomerSeed = "insect volcano baby upon fitness bonus quote dignity square struggle child rotate";

it('purchase item', async function () {
    let item = "item_AcMb5ko3RSieqCBK5DF9UmzRqHfnHvz3FXxPdssQ65Cb";
    let ts = invokeScript({
            dApp: dappAddress,
            call: {
                function: "purchase",
                args: [
                    {type: "string", value: item}
                ]
            },
            payment: [{amount: datajson.coupon_price, asset: null}]
        }, accountCustomerSeed
    );
    let tx = await broadcast(ts);
    await waitForTx(tx.id)
});

it('withdraw funds', async function () {
    let ts = invokeScript({
        dApp: dappAddress,
        call: {
            function: "withdraw",
            args: []
        },
        payment: []
    }, accountSupplierSeed);
    let tx = await broadcast(ts);
    await waitForTx(tx.id)
});

let commits = ["G8ZMEiXEGefpEdgEFN5mYr6oEEABJrtcBBLkZf6Ujmcq",
    "Bf2yysmAoroXAzVidK1wxuVYpRGLy1nWe6cNAGXBf5Hi",
    "ACHSFMGY7bp3aHryCLYc499XvojeGrgBp59zSvwgLnkQ"];
let reveals = ["delisted", "featured", "featured"];
let salts = ["random1", "random2", "random3"];
let accountDappSeed = accountSupplierSeed;
let seeds = [accountDappSeed, accountCustomerSeed, accountSupplierSeed];
it('vote commit', async function () {
    let item = "item_4RvHbQ1fSGxPyrDkjHzok6rUoUTJAEeoJQUbs84BWJ3R";
    let user = 2;
    let ts = invokeScript({
        dApp: dappAddress,
        call: {
            function: "voteCommit",
            args: [
                {type: "string", value: "item"},
                {type: "string", value: commits[user]}
            ]
        },
        payment: []
    }, accountSupplierSeed);
    let tx = await broadcast(ts);
    await waitForTx(tx.id)
});