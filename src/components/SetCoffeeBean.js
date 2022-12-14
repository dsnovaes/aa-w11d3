import { useCoffeeContext } from "../context/CoffeeContext";

const SetCoffeeBean = ({ coffeeBeans }) => {
  const {setCoffeeBeanId} = useCoffeeContext()
  const handleChange = e => {
    console.log(e.target.value)
    // setCoffeeBeanId(e.target.value)
  }
  return (
    <div className="set-coffee-bean">
      <h2>Select a Coffee Bean</h2>
      <select name="coffee-bean" onChange={handleChange}>
        {coffeeBeans.map(bean => (
          <option
            key={bean.id}
            value={bean.id}
          >
            {bean.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SetCoffeeBean;