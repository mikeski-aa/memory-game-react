// reusable button component

function NewButton({ btnText, btnClass, btnAction }) {
  return (
    <>
      <button className={btnClass} onClick={btnAction}>
        {btnText}
      </button>
    </>
  );
}

export { NewButton };
