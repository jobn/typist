import React from "react";

const smilies = ["😃", "👍", "😜", "😎", "🤩", "😅", "🧐", "😺", "🤟"];
const shouts = [
  "Flot",
  "Sejt",
  "Sådan",
  "Godt klaret",
  "Super",
  "Juhuu",
  "Du kan bare det dér",
  "Nice",
  "Sygt nice"
];

function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function Modal({ dispatch }) {
  return (
    <div className="absolute bg-white h-64 px-40 border flex flex-col justify-center rounded items-center shadow-lg">
      <h1 className="text-6xl">
        {randomItem(shouts) + " " + randomItem(smilies)}
      </h1>

      <button
        onClick={() => dispatch({ type: "reset" })}
        autoFocus
        className="border rounded text-lg py-1 px-4"
      >
        Prøv igen?
      </button>
    </div>
  );
}

export default Modal;
