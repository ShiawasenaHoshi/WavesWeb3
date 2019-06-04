accountBobSeed = 'garment milk riot champion glad forum unable close transfer waste enforce high';

it("data transaction", async function () {
    let txObjectSignedBob = data({
        data: [{key: "item_B_coupon_price", value: 9000000}],
        fee: 500000
    }, accountBobSeed);

    let tx = await broadcast(txObjectSignedBob);

    await waitForTx(tx.id);
    console.log(JSON.stringify(tx));
});