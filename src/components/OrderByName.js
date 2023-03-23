function OrderByName({ handleInputOrder, inputOrder }) {
  const handleOrder = (ev) => {
    handleInputOrder(ev.target.value);
    console.log(ev.target.value);
  };

  return (
    <label htmlFor="order">
      Ordenar
      <select
        name="order"
        id="order"
        onChange={handleOrder}
        value={inputOrder}
        className="input"
      >
        <option value="random">Libre albedrío</option>
        <option value="abc">Alfabeticamente</option>
      </select>
    </label>
  );
}
export default OrderByName;
