import React, { useEffect, useState } from "react";
import "./calculator.css"
import axios from "axios";
import Navbar from "./Navbar";

const SendMoney = () => {

    const [totalAmount, setTotalAmount] = useState("");




    const [data, setData] = useState({

        amount: "",

        from: "",

        to: "",

    });




    const { amount, from, to } = data;




    const changeHandaler = (e) => {

        setData({

            ...data,

            [e.target.name]: [e.target.value],

        });

    };




    const getAmount = async (amount, from, to) => {

        const res = await axios.get(

            `http://localhost:2000/currency/convert/rate?fromCurrency=${from}&toCurrency=${to}&amount=${amount}`

        );

        console.log(res.data.convertedAmount);

        setTotalAmount(res.data.convertedAmount);

    };




    const submitHandaler = (e) => {

        e.preventDefault();

        getAmount(amount, from, to);

    };




    return (

        <>
            <Navbar />
            <div id="app" className="ar-container">

                <form onSubmit={submitHandaler}>

                    <section>

                        <h1 id="output-converted">

                            <i className="fas fa-balance-scale" /> Currency

                            <strong>Converter</strong>

                        </h1>

                    </section>

                    <section className="toggle-this">

                        <legend className="ar-legend">Amount:</legend>

                        <input

                            id="input-amount"

                            type="number"

                            name="amount"

                            value={amount}

                            placeholder="Amount to convert"

                            onChange={changeHandaler}

                        />

                    </section>

                    <section className="toggle-this">

                        <legend className="ar-legend">From:</legend>

                        <input

                            type="text"

                            name="from"

                            value={from}

                            id="input-from"

                            onChange={changeHandaler}

                            list="array-countries"

                        />

                    </section>

                    <section className="toggle-this">

                        <legend className="ar-legend">To:</legend>

                        <input

                            value={to}

                            type="text"

                            name="to"

                            id="input-to"

                            onChange={changeHandaler}

                            list="array-countries"

                        />

                    </section>

                    <section className="toggle-this">

                        <button id="btn-convert" className="ar-button">

                            Send Money

                        </button>

                    </section>

                    {totalAmount === "" ? "" : <p>Converted Amount: {totalAmount}</p>}


                </form>
                {/* <p>Total Converted Amount: {totalAmount}</p> */}
            </div>

            <datalist id="array-countries" />

        </>

    );

};




export default SendMoney;