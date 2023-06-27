import axios from "axios";

const deleteCurrencyByCode = (userData) => {
    console.log(userData.currency_code[0]);
   
  const code = userData.currency_code[0];



    const customConfig = {

        headers: {

            "Content-Type": "application/json",

        },

    };




    axios.delete(`http://localhost:2000/currency/delete/${code}`)

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




export default deleteCurrencyByCode;