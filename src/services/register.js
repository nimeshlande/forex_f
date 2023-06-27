
import axios from "axios";

const SaveUserData = (userData, gender) => {
    console.log(userData, gender);
    const phoneNumber = parseInt(userData.phone[0], 10);
    console.log( phoneNumber);
    let sendUserData = {
        name: userData.name.toString(),
        gender: gender,
        address: userData.address.toString(),
        number: phoneNumber,
        country: userData.country.toString(),
        emailId: userData.email.toString(),

        user: {
            username: userData.username.toString(),

            password: userData.password.toString(),
        }



    };




    const customConfig = {

        headers: {

            "Content-Type": "application/json",

        },

    };




    axios.post("http://localhost:2000/api/bank/customers/add", sendUserData, customConfig)

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




export default SaveUserData;