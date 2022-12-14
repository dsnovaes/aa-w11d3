import {useCoffeeContext} from '../context/CoffeeContext'

const SelectedCoffeeBean = () => {

  const { coffeeBean, setCoffeeBeanId } = useCoffeeContext();

  return (
    <div className="selected-coffee">
      {coffeeBean && (
        <h2>{coffeeBean.name}</h2>
      )}
    </div>
  );
}

export default SelectedCoffeeBean;