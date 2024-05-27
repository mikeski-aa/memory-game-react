import { useState } from "react";
import { NewButton } from "./ButtonComp";
import { toggleSettingsModal } from "./ToggleSettingsModal";
import "../styles/ModalStyles.css";

// settings lets you pick how many carsd you want to be playing with
// slider + 2 buttons -> save & cancel

function UpdateRangeValue(e, setState) {
  setState(e.target.value);
}

function GameSettings({
  rangeValue,
  displayModal,
  currentValue,
  setCardValue,
  setModal,
  currModal,
}) {
  return (
    <div className={`settingsModal ${displayModal}`}>
      <div className="sliderSelector">
        <input
          type="range"
          min="4"
          max="20"
          defaultValue="8"
          step="1"
          className="slider"
          onChange={(e) => UpdateRangeValue(e, setCardValue)}
        />
      </div>
      <div className="currentValueShow">{currentValue}</div>
      <div className="settingButtons">
        <NewButton
          btnClass="settingSave"
          btnText="Save"
          btnAction={() => toggleSettingsModal(currModal, setModal)}
        />
      </div>
    </div>
  );
}

export { GameSettings };
