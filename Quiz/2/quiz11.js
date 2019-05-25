const accASeed = "repair remember oil voice dinosaur fabric large civil deer hamster peanut acquire";
let accBSeed = "print surprise mouse decline fiber scare merit you clever atom chat pet";
it("B2A transfer", async function () {
    let tx = await broadcast(transfer({amount: 10000000, recipient: address(accASeed)}, accBSeed));
    await waitForTx(tx.id);
    console.log(JSON.stringify(tx))
});