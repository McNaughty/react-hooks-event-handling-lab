// Code EyesOnMe Component Here

import React from "react";
import { ReactDOM } from "react";
import { useState } from "react"; 

export default function EyesOnMe() {

    const [nameFocussed, setNameFocused] = useState(false)

  return (
    <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      <button
        text="Eyes on me"
        onFocus={e => setNameFocused (console.log("Good!"))}
        onBlur={e => setNameFocused (console.log("Hey! Eyes on me!"))}
      >
        Eyes on me
      </button>
    </div>
  );
}
