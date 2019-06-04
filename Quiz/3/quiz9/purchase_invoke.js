accountBobAddress = '3N51vFgomYjxSbiX9B95ExtxUzTui1FN616';
accountCooperSeed = 'spirit resist inflict guess brief federal rain party stomach sphere crash orbit';

it('dapp invoke purchase', async function(){
    let txObjectSignedCooper = invokeScript({
            dApp:accountBobAddress,
            call:{function:"purchase",args:[]},
            payment:[{amount:5000000, asset:null}]
        },
        accountCooperSeed
    );
    let tx = await broadcast(txObjectSignedCooper);
    await waitForTx(tx.id);
    console.log(JSON.stringify(tx));
});