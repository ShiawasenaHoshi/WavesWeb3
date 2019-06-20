/**
 * Created by vasily on 20.06.19.
 */
const seed = 'snow saddle fantasy enact captain trash believe explain right satoshi action bullet';
const seedDApp = 'note answer slot situate gallery impact warfare wife reveal brand sweet summer';
console.log("issuer address:" + address(seed));

// ------------------MODULE 5.2----------------------
it('custom currency token', async function () {
    const tokenParamsCustomCurrency = {
        name: "wEUR ex1",
        quantity: 1000000,
        decimals: 2,
        reissuable: false,
        description: "Custom currency token example"
    };

    const signedIssueTx = issue(tokenParamsCustomCurrency, seed);
    let tx = await broadcast(signedIssueTx);
    await waitForTx(tx.id);

    console.log("tx / token id:" + tx.id)
});

it('custom indivisible token', async function () {
    const tokenParamsCustomIndivisible = {
        name: "ice cream coupon",
        quantity: 100,
        decimals: 0,
        reissuable: true,
        description: "One token = 50% discount for ice cream"
    };

    const signedIssueTx = issue(tokenParamsCustomIndivisible, seed);
    let tx = await broadcast(signedIssueTx);
    await waitForTx(tx.id);

    console.log("tx / token id:" + tx.id)
});

it('re-issue coupon token', async function () {
    const tokenParams = {
        quantity: 10,
        assetId: '9DPy7KeA7Ca5gfxcUunNwAdRaMH6VYXFf3KTfkzPka7B',
        reissuable: true
    };

    const signedIssueTx = reissue(tokenParams, seed);
    let tx = await broadcast(signedIssueTx);
    await waitForTx(tx.id);

    console.log("tx / token id:" + tx.id)
});

it('burn custom token', async function () {
    const burnCustomTokenParams = {
        assetId: '9DPy7KeA7Ca5gfxcUunNwAdRaMH6VYXFf3KTfkzPka7B',
        quantity: 10
    };

    const signedIssueTx = burn(burnCustomTokenParams, seed);
    let tx = await broadcast(signedIssueTx);
    await waitForTx(tx.id);

    console.log("burn tx id:" + tx.id)
});
// ----------------------MODULE 5.3----------------------

it('deposit', async function () {
    let ts = invokeScript({
        dApp: address(seedDApp),
        call: {
            function: "deposit",
            args: []
        },
        payment: [{amount: 300, assetId: "5tZBFrazBj2QtsPPRvx7FbPfPQqoqQ1y1jrnD9A1xux3"}]
    }, seed);
    let itx = await broadcast(ts);
    await waitForTx(itx.id)
});

it('withdraw', async function () {
    invokeScript({
        dApp: address(seedDApp),
        call: {
            function: "withdraw",
            args: [{type: "integer", value: 200}]
        },
        payment: []
    }, seed);
    let itx = await broadcast(ts);
    await waitForTx(itx.id)
});

it('NFT', async function () {
    const tokenParamsCustomIndivisible = {
        name: "special gift",
        quantity: 1,
        decimals: 0,
        reissuable: false,
        description: "300 waves certificate"
    };

    const signedIssueTx = issue(tokenParamsCustomIndivisible, seed);
    let tx = await broadcast(signedIssueTx);
    await waitForTx(tx.id);

    console.log("tx / token id:" + tx.id)
});

// ----------------------MODULE 5.4----------------------
it('issue smart asset', async function () {
    const assetParams = {
        name: "VeSA",
        quantity: 1000,
        decimals: 0,
        reissuable: false,
        description: "VeSA - very smart asset",
        script: "base64:AwQAAAAHJG1hdGNoMAUAAAACdHgDCQAAAQAAAAIFAAAAByRtYXRjaDACAAAAE0V4Y2hhbmdlVHJhbnNhY3Rpb24EAAAAAmV4BQAAAAckbWF0Y2gwBge96txI",
    };

    const signedIssueTx = issue(assetParams, seed);
    let tx = await broadcast(signedIssueTx);
    await waitForTx(tx.id);
    console.log("tx / token id:" + tx.id)
});

// ----------------------MODULE 5.5----------------------
it('issue coupon smart token', async function () {
    const assetParams = {
        name: "bazaar coupon",
        quantity: 1000,
        decimals: 0,
        reissuable: false,
        description: "discount",
        script: compile(file("coupon-token.ride")),
    };

    const signedIssueTx = issue(assetParams, seed);
    let tx = await broadcast(signedIssueTx);
    await waitForTx(tx.id);
    console.log("tx / token id:" + tx.id)
});