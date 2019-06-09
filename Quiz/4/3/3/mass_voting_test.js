/**
 * Created by vasily on 09.06.19.
 */
const dappAddress = "3MvWngGcbddUagYREyqeAKSFNw3H92w7LS4";

let commits = ["G8ZMEiXEGefpEdgEFN5mYr6oEEABJrtcBBLkZf6Ujmcq",
    "Bf2yysmAoroXAzVidK1wxuVYpRGLy1nWe6cNAGXBf5Hi",
    "ACHSFMGY7bp3aHryCLYc499XvojeGrgBp59zSvwgLnkQ"];

let c1 = "snow saddle fantasy enact captain trash believe explain right satoshi action bullet";
let c2 = "note answer slot situate gallery impact warfare wife reveal brand sweet summer";
let c3 = "task exact assault north general skull void siren scale fan cinnamon purchase";
let anotherThreeSeeds = [c1, c2, c3];
it('vote commit mass', async function () {
    let item = "item_4RvHbQ1fSGxPyrDkjHzok6rUoUTJAEeoJQUbs84BWJ3R";
    for (let i = 0; i <= 2; i++){
        try{
            let ts = invokeScript({
                dApp: dappAddress,
                call: {
                    function: "voteCommit",
                    args: [
                        {type: "string", value: "item"},
                        {type: "string", value: commits[i]}
                    ]
                },
                payment: []
            }, anotherThreeSeeds[i]);
            let tx = await broadcast(ts);
            await waitForTx(tx.id);
            console.log("c" + i + " voted");
        } catch(e) {
            console.log(e.message);
        }
    }
});