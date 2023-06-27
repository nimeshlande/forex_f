import React, { useState } from 'react';
import axios from 'axios';

const AddAccount = () => {
    const [account, setAccount] = useState({
        balance: 0,
        customerID: ''
    });
    const [errors, setErrors] = useState({});
    const [msg, setMsg] = useState('');

    const changeHandler = (event) => {
        setAccount({
            ...account,
            [event.target.name]: event.target.value
        });
    };

    const handleValidation = () => {
        let tempErrors = {};
        let formValid = true;

        if (account.balance !== 0) {
            formValid = false;
            tempErrors['balance'] = 'Balance cannot be empty';
        }
        if (!account.customerID) {
            formValid = false;
            tempErrors['customerID'] = 'Customer ID cannot be empty';
        }

        setErrors(tempErrors);
        return formValid;
    };

    const postAccount = async () => {
        let newAccount = {
            balance: account.balance
        };

        try {
            const response = await axios.post(
                `http://localhost:2000/api/bank/account/add/${account.customerID}`,
                newAccount
            );
            const data = response.data;
            console.log('API success');
            console.log(data);
            if (data === 'Account already exists') {
                setMsg('Already have an account');
            } else {
                setMsg('Account Created');
            }
            // Perform any necessary actions with the data
        } catch (error) {
            console.log('API error');
            setMsg('Account already exists');
        }
    };

    const onAdd = () => {
        if (handleValidation()) {
            console.log(account);
            postAccount();
        } else {
            console.log('Validation not passed');
        }
    };

    return (
        <div className="account">
            <div className="card">
                <h5 className="card-header">Add Account</h5>
                <div className="card-body">
                    <h5 className="card-title">Enter Account Info:</h5>
                    {msg && (
                        <div
                            className={`alert ${msg === 'Api error' ? 'alert-danger' : msg === 'Account Created' ? 'alert-success' : 'alert-danger'}`}
                            role="alert"
                        >
                            {msg}
                        </div>
                    )}
                    <p className="card-text">
                        <label className="side">Account Balance: </label>
                        <input
                            type="number"
                            name="balance"
                            value={account.balance}
                            onChange={changeHandler}
                            disabled
                        />
                        <span style={{ color: 'red' }}>{errors['balance']}</span>
                        <br />
                        <br />
                        <label className="side">CustomerID: </label>
                        <input
                            type="text"
                            name="customerID"
                            value={account.customerID}
                            onChange={changeHandler}
                        />
                        <span style={{ color: 'red' }}>{errors['customerID']}</span>
                        <br />
                        <br />
                        <button onClick={onAdd} className="btn">
                            Add Account
                        </button>
                    </p>
                </div>
            </div>
        </div >
    );
};

export default AddAccount;