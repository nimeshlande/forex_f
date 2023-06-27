import axios from "axios";

const addCurrency = (userData) => {
    console.log(userData);

    const rate = parseFloat(userData.rate[0]);
    console.log(rate);
    let currencyData = {
        name: userData.name.toString(),
        code: userData.code.toString(),
        exchangeRate: rate

    };




    const customConfig = {

        headers: {

            "Content-Type": "application/json",

        },

    };




    axios.post("http://localhost:2000/currency/add", currencyData, customConfig)

        .then(

            function (response) {

                console.log(response.data);
                // return response.data;

            },

            (error) => {

                console.log(error);

            }

        );

};




export default addCurrency;