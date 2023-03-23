function Reset({ handleInputReset, inputHouse, inputStatus, inputName }) {
  const handleReset = () => {
    inputHouse == handleInputReset();
  };
  return (
    <input
      onInput={handleReset}
      value="reset"
      type="button"
      name="reset"
      id="reset"
    />
  );
}
export default Reset;
