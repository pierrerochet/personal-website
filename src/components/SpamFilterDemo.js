import { AiOutlineCheckCircle, AiOutlineWarning } from "react-icons/ai";
import { BiRightArrow } from "react-icons/bi";

import { Grid } from "react-loader-spinner";
import React, { useState, useEffect } from "react";
import axios from "axios";

const baseURL = "https://ml-spam-filter-fr-app.herokuapp.com/check_email";

function SpamFilterDemo() {
  const [state, setState] = useState({
    text: "On se retrouve à 14h pour la réunion avec nos partenaires",
    strength: 5.0,
  });

  function exempleChange(event) {
    const value = event.target.value;
    setState({
      ...state,
      text: value,
      isLoading: false,
    });
  }

  function handleChange(event) {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  }

  function handleSubmit(event) {
    run();
    event.preventDefault();
  }

  useEffect(() => {});

  function run() {
    setState({
      ...state,
      resp: null,
      isLoading: true,
    });
    axios
      .post(baseURL, {
        text: state.text,
        strength: state.strength,
      })
      .then((response) => {
        setState({
          ...state,
          resp: response.data,
          isLoading: false,
        });
      });
  }

  return (
    <div className="">
      <form className="mb-8" onSubmit={handleSubmit}>
        <div className="mb-4">
          <div className="flex justify-between">
            <label className="block">text</label>
            <select
              onChange={exempleChange}
              className="p-1 bg-transparent border-x-2 border-t-2 border-b-0 rounded-t-sm border-solid"
            >
              <option value="On se retrouve à 14h pour la réunion avec nos partenaires">
                Example legit
              </option>
              <option value="Vous avez gagné un cadeau, cliquez ici pour le recevoir !">
                Example spam
              </option>
            </select>
          </div>
          <textarea
            name="text"
            className="border-2 border-solid rounded-sm rounded-tr-none w-full h-32 px-1 resize-none font-sans m-0"
            placeholder="Type the content of an email ..."
            value={state.text}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="strength" className="block">
            strength
          </label>
          <input
            className="border-2 rounded-sm w-20 border-solid"
            name="strength"
            type="number"
            step="0.1"
            min="0"
            max="10"
            value={state.strength}
            onChange={handleChange}
          ></input>
        </div>
        {!state.isLoading && (
          <button
            type="submit"
            className="button button--outline button--active button--primary"
          >
            Run
          </button>
        )}
        {state.isLoading && (
          <Grid
            height="36"
            width="76"
            color="gray"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass="mb-4"
            visible={true}
          />
        )}
      </form>

      {state.resp && (
        <div>
          <div className="p-2">
            {!state.resp.is_spam && (
              <span className="mb-3 inline-flex items-center text-green-700">
                <AiOutlineCheckCircle size="20" className="" />
                <span className="ml-2">
                  This seems to be <span className="font-bold">legit</span> !
                </span>
              </span>
            )}
            {state.resp.is_spam && (
              <span className="mb-3 inline-flex items-center text-red-700">
                <AiOutlineWarning size="20" className="" />
                <span className="ml-2">
                  This seems to be <span className="font-bold">spam</span> !
                </span>
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default SpamFilterDemo;
