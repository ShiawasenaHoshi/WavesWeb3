accountBobAddress = '3N51vFgomYjxSbiX9B95ExtxUzTui1FN616';
accountJimSeed = 'web general acid eager pig anchor saddle talent cruel frost weekend unlock';
accountCooperSeed = 'spirit resist inflict guess brief federal rain party stomach sphere crash orbit'

it("multisig transfer free order", async function () {
    let txObjectSignedJim = transfer({amount: 100000, recipient: accountBobAddress, fee: 500000}, accountJimSeed);
    let txObjectSignedJimCooper = transfer(txObjectSignedJim, accountCooperSeed);

    let tx = await broadcast(txObjectSignedJimCooper);
    await waitForTx(tx.id);

    console.log(JSON.stringify(tx));
});

it("multisig transfer strict order", async function () {
    let txObjectSignedJim = transfer({amount: 100000, recipient: accountBobAddress, fee: 500000}, accountJimSeed);
    let txObjectSignedJimCooper = transfer(txObjectSignedJim, accountCooperSeed);
    let txObjectSignedJimCooperCooper = transfer(txObjectSignedJimCooper, accountCooperSeed);

    let tx = await broadcast(txObjectSignedJimCooperCooper);
    await waitForTx(tx.id);

    console.log(JSON.stringify(tx));
});