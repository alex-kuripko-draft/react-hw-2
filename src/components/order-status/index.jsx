import {OrderStatusLabels} from "../../enums/order-status.enum";

const OrderStatus = ({ id, status }) => <p>Заказ #{id}: {OrderStatusLabels[status]}</p>;

export default OrderStatus;
