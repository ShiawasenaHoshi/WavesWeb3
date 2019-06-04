accountBobAddress = '3N51vFgomYjxSbiX9B95ExtxUzTui1FN616';
accountAliceSeed = 'cloud dice number frequent state impulse fragile peace wait mask door bid';
accountBobSeed = 'garment milk riot champion glad forum unable close transfer waste enforce high';

it("multisig transfer", async function () {
    let txObjectSignedAlice = transfer({amount: 100000, recipient: accountBobAddress, fee: 500000}, accountAliceSeed);
    let txObjectSignedAliceBob = transfer(txObjectSignedAlice, accountBobSeed);

    let tx = await broadcast(txObjectSignedAliceBob);
    await waitForTx(tx.id);

    console.log(JSON.stringify(tx));
});