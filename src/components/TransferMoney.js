import React, { useState } from 'react';
import axios from 'axios';

const TransferMoney = () => {
    const [accountID, setAccountID] = useState('');
    const [destinationID, setDestinationID] = useState('');
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
                `http://localhost:2000/api/bank/account/transfer/${accountID}/${destinationID}/${amount}`
            );
            const data = response.data;
            console.log('Transfer success');
            console.log(data);
            setError('');
            setSuccess('Payment successful');
            // Perform any necessary actions with the data
        } catch (error) {
            console.log('Transfer failure');
            console.log(error.message);
            setError('Payment failed');
            setSuccess('');
        }
    };

    return (
        <div className="account">
            <form onSubmit={handleSubmit}>
                <div className="card">
                    <h5 className="card-header">Send Amount</h5>
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
                            <label className="side">Destination ID: </label>
                            <input
                                type="number"
                                value={destinationID}
                                onChange={(event) => setDestinationID(event.target.value)}
                            />
                            <br />
                            <br />
                            <label className="side">Amount: </label>
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
                                Send
                            </button>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default TransferMoney;
