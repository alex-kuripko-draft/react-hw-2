import './App.css';
import Greeting from "./components/greeting";
import ShoppingList from "./components/shopping-list";
import OrderStatus from "./components/order-status";
import OrderStatusEnum from "./enums/order-status.enum";

function App() {
  const products = [
    { id: 1, name: 'Anything 1' },
    { id: 2, name: 'Anything 2' },
    { id: 3, name: 'Anything 3' },
    { id: 4, name: 'Anything 4' },
  ];

  const orders = [
    { id: 1, status: OrderStatusEnum.PAID },
    { id: 2, status: OrderStatusEnum.DISPATCHED },
    { id: 3, status: OrderStatusEnum.OUT_FOR_DELIVERY },
    { id: 4, status: OrderStatusEnum.DELIVERED },
  ];

  console.log({ orders })
  return (
    <div className="App">
      <Greeting name="Alex" />
      <ShoppingList items={products} />
      {orders.map((order) => <OrderStatus key={order.id} {...order} />)}
    </div>
  );
}

export default App;
