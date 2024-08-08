const OrderStatusEnum = {
    PAID: 1,
    DISPATCHED: 2,
    OUT_FOR_DELIVERY: 3,
    DELIVERED: 4,
};

export const OrderStatusLabels = {
    [OrderStatusEnum.PAID]: 'Оплачено',
    [OrderStatusEnum.DISPATCHED]: 'Отправлено',
    [OrderStatusEnum.OUT_FOR_DELIVERY]: 'В пути',
    [OrderStatusEnum.DELIVERED]: 'Доставлено',
};

export default OrderStatusEnum;
