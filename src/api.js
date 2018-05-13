// import chp from 'chainpoint-client/dist/bundle.web.js';

// const apiHost = 'https://fast-woodland-70297.herokuapp.com/nextBlock';
const apiHost = 'https://lit-inlet-64107.herokuapp.com/nextBlock';

export default {
        async fetchInitialDeals() {
                try {
                        let response = await fetch(apiHost,  { method: 'POST', headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                          } } );
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}

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