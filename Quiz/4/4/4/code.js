/**
 * Created by vasily on 10.06.19.
 */
nodeInteraction.currentHeight("https://nodes.wavesplatform.com").then((v) => {
    console.log("currentHeight: " + v);
});