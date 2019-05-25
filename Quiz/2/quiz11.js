const accASeed = "repair remember oil voice dinosaur fabric large civil deer hamster peanut acquire";
const accBAddr = "3N9qiqmE8CehB3V4W8BCus8mG7at8aBLEv9";

console.log("address with waves: " + address(accASeed));

it("transfer", async function () {
    let tx = await broadcast(transfer({amount: 500000000, recipient: accBAddr}, accASeed));
    await waitForTx(tx.id);
    console.log(JSON.stringify(tx))
});

it("data transaction", async function () {
    let aboutObject = {
        "name": "Pupkin",
        "occupation": "BlockchainDev"
    };
    let aboutString = JSON.stringify(aboutObject);
    let tx = await broadcast(data({data: [{key: "web3-online-course-user-data", value: aboutString}]}, accASeed));
    await waitForTx(tx.id);
});