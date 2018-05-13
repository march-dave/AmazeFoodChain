import chp from 'chainpoint-client/dist/bundle.web.js';

const apiHost = 'https://fast-woodland-70297.herokuapp.com/nextBlock';

export default {
        async fetchInitialDeals() {
                try {
                        let response = await fetch(apiHost,  { method: 'POST', headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                          } } );
                        // let responseJson = await response.json();
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}

// export default {
//     async fetchInitialDeals () {
//         // A few sample SHA-256 proofs to anchor
//         let hashes = ['2d2a9e92b561440e8d27a21eed114f7018105db00262af7d7087f7dea9986b0a','3d2a9e92b561440e8d27a21eed114f7018105db00262af7d7087f7dea9986b0a']
        
//         // Submit each hash to three randomly selected Nodes
//         // let proofHandles = await chp.submitHashes(hashes)
//         console.log("Submitted Proof Objects: Expand objects below to inspect.")
//         // console.log(proofHandles);
        
//         // // Wait for Calendar proofs to be available
//         // console.log("Sleeping 12 seconds to wait for proofs to generate...")
//         // await new Promise(resolve => setTimeout(resolve, 12000))
        
//         // // Retrieve a Calendar proof for each hash that was submitted
//         // let proofs = await chp.getProofs(proofHandles)
//         // console.log("Proof Objects: Expand objects below to inspect.")
//         // console.log(proofs)
        
//         // // Verify every anchor in every Calendar proof
//         // let verifiedProofs = await chp.verifyProofs(proofs)
//         // console.log("Verified Proof Objects: Expand objects below to inspect.")
//         // console.log(verifiedProofs)
        
//         return proofs;
//     }
// }

// const apiHost = 'https://bakesaleforgood.com/api/deals';

// export default {
    //     async fetchInitialDeals() {
        //         try {
            //             let response = await fetch(apiHost);
            //             let responseJson = await response.json();
//             return responseJson;
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }