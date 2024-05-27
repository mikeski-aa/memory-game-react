// function for toggling modal visibility for settings

function toggleSettingsModal(currModal, setModal) {
  if (currModal === "hide") {
    setModal("");
  } else {
    setModal("hide");
  }
}

export { toggleSettingsModal };
