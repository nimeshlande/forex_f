
import React, { useState } from 'react';
import axios from 'axios';

const TransferCurreny = () => {
    const [accountID, setAccountID] = useState('');
    const [destinationID, setDestinationID] = useState('');
    const [currencyId, setCurrency] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(
                `http://localhost:2000/api/bank/account/transfer/currency/${accountID}/${destinationID}/${currencyId}`
            );
            const data = response.data;
            console.log('Transfer success');
            console.log(data);
            // Perform any necessary actions with the data
        } catch (error) {
            console.log('Transfer failure');
            console.log(error.message);
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
                            <label className="side">CurrencyID: </label>
                            <input
                                type="number"
                                value={currencyId}
                                onChange={(event) => setCurrency(event.target.value)}
                            />
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

export default TransferCurreny;