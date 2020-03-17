import React from "react";
import useLocalStorage from "./useLocalStorage";

function Welcome() {
  const [dismissed, setDismissed] = useLocalStorage("welcome_dismissed", false);

  if (dismissed) {
    return (
      <button className="p-3 self-start" onClick={() => setDismissed(false)}>
        Vis vejledning
      </button>
    );
  }

  return (
    <>
      <div className="absolute top-0 left-0 bg-white border rounded shadow-lg p-20 ">
        <h1 className="text-2xl">Velkommen til 10-finger træning.</h1>

        <p className="py-8">
          Læg dine hænder på tastaturet, så du har pegefingrene på f og j.
          <br />
          Pegefingrene skal trykke på de{" "}
          <span className="text-red-600">røde</span> taster, langefingrene på de{" "}
          <span className="text-yellow-600">gule</span>, ringefingrene på de{" "}
          <span className="text-blue-600">blå</span>, lillefingrene på de{" "}
          <span className="text-green-600">grønne</span> og tommelfingrene på
          den <span className="text-purple-600">lilla</span>.
          <br />
          Træn det samme niveau indtil du kan det. Skift så til næste niveau i
          hjørnet.
        </p>

        <button
          onClick={() => setDismissed(true)}
          className="border rounded text-lg py-1 px-4"
        >
          Start
        </button>
      </div>

      <div style={{ height: "48px" }} />
    </>
  );
}

export default Welcome;
