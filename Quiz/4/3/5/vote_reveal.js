/**
 * Created by vasily on 10.06.19.
 */
let reveals = ["delisted", "featured", "featured"];
let salts = ["random1", "random2", "random3"];
let c1 = "snow saddle fantasy enact captain trash believe explain right satoshi action bullet";
let c2 = "note answer slot situate gallery impact warfare wife reveal brand sweet summer";
let c3 = "task exact assault north general skull void siren scale fan cinnamon purchase";
let anotherThreeSeeds = [c1, c2, c3];

it('vote reveal mass', async function () {
    let item = "item_4RvHbQ1fSGxPyrDkjHzok6rUoUTJAEeoJQUbs84BWJ3R";
    for (let i = 0; i <= 2; i++){
        try{
            let ts = invokeScript({
                dApp: dappAddress,
                call: {
                    function: "voteReveal",
                    args: [
                        {type: "string", value: "item"},
                        {type: "string", value: reveals[i]},
                        {type: "string", value: salts[i]}
                    ]
                },
                payment: []
            }, anotherThreeSeeds[i]);
            let tx = await broadcast(ts);
            await waitForTx(tx.id);
            console.log("c" + i + " revealed");
        } catch(e) {
            console.log(e.message);
        }
    }
});