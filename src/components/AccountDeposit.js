import React, { useState } from 'react';
import axios from 'axios';

const AccountDeposit = () => {
    const [accountID, setAccountID] = useState('');
    const [amount, setAmount] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (amount < 1000 || amount > 100000) {
            setError('Amount must be greater than 1000 and less than 100000');
            setSuccess('');
            return;
        }

        try {
            const response = await axios.put(
                `http://localhost:2000/api/bank/account/deposit/${accountID}/${amount}`
            );
            const data = response.data;
            console.log('Deposit success');
            console.log(data);
            setError('');
            setSuccess('Deposit successful');
            // Perform any necessary actions with the data
        } catch (error) {
            console.log('Deposit failure');
            console.log(error.message);
            setError('Deposit failed');
            setSuccess('');
        }
    };

    return (
        <div className="account">
            <form onSubmit={handleSubmit}>
                <div className="card">
                    <h5 className="card-header">Add Amount</h5>
                    <div className="card-body">
                        <p className="card-text">
                            <label className="side">Account ID: </label>
                            <input
                                type="number"
                                value={accountID}
                                onChange={(event) => setAccountID(event.target.value)}
                            />
                            <br />
                            <br />
                            <label className="side">Deposit Amount: </label>
                            <input
                                type="number"
                                value={amount}
                                onChange={(event) => setAmount(event.target.value)}
                            />
                            {error && <div className="alert alert-danger">{error}</div>}
                            {success && <div className="alert alert-success">{success}</div>}
                            <br />
                            <br />
                            <button type="submit" className="btn btn-primary">
                                Deposit Amount
                            </button>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AccountDeposit;