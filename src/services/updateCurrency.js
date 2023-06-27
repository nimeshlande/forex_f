import axios from "axios";

const updateCurrency = (data) => {
    // console.log(data);

    const code = data.c_code[0];
    const rate = data.ex_rate[0];

    console.log(code,rate);


    axios.put(`http://localhost:2000/currency/update?code=${code}&rate=${rate}`)

    .then(

        function (response) {

            console.log(response.data);
            // return response.data;

        },

        (error) => {

            console.log(error);

        }

    );

}

export default updateCurrency;