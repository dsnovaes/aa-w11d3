import { useEffect } from 'react';
import {useCoffeeContext} from '../context/CoffeeContext'

const SelectedCoffeeBean = () => {

  const { coffeeBean, setCoffeeBeanId } = useCoffeeContext();
  useEffect(()=>{},[coffeeBean])

  return (
    <div className="selected-coffee">
      {coffeeBean && (
        <h2>{coffeeBean.name}</h2>
      )}
    </div>
  );
}

export default SelectedCoffeeBean;