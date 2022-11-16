import { AiOutlineCheckCircle, AiOutlineWarning } from "react-icons/ai";

import { MagnifyingGlass, ThreeDots } from "react-loader-spinner";
import React, { useState, useEffect } from "react";
import axios from "axios";

const baseURL = "https://ml-spam-filter-fr-app.herokuapp.com/check_email";

const defaultText = `Bonjour,

Le dernier paiement de votre abonnement a été rejeté, à mettre à jour impérativement.
Rendez-vous sur : abonnement-espace-fr.com/fr

Cordialement`;

function SpamFilterDemo() {
  const [state, setState] = useState({
    strength: 5.0,
    text: defaultText,
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
    <div>
      <div className="live-test item shadow">
        <div className="live-test-header">LIVE TEST</div>
        <div className="live-test-header-2">INPUT</div>
        <form onSubmit={handleSubmit}>
          <div className="live-test-section">
            <label>text</label>
            <textarea
              name="text"
              placeholder="Type the content of an email ..."
              value={state.text}
              onChange={handleChange}
            />
          </div>
          <div className="live-test-section">
            <label>strength</label>
            <input
              name="strength"
              type="number"
              step="0.1"
              min="0"
              max="10"
              value={state.strength}
              onChange={handleChange}
            ></input>
          </div>

          {!state.isLoading && <button type="submit">Go ! 🚀</button>}
          {state.isLoading && (
            <ThreeDots
              visible={true}
              height="0.7em"
              ariaLabel="MagnifyingGlass-loading"
              wrapperClass="loader"
              color="var(--ifm-color-primary)"
            />
          )}

          {state.resp && (
            <>
              <div className="live-test-header-2">RESULT</div>
              <div className="live-test-section">
                This seems to be{" "}
                {state.resp.is_spam && (
                  <span style={{ color: "red", fontWeight: "bold" }}>spam</span>
                )}
                {!state.resp.is_spam && (
                  <span style={{ color: "green", fontWeight: "bold" }}>
                    legit
                  </span>
                )}{" "}
                !
              </div>
              <div className="live-test-section">
                <pre>{JSON.stringify(state.resp, null, 4)}</pre>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default SpamFilterDemo;
