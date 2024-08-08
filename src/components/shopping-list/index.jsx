const ShoppingList = ({ items = [] }) => {
    if (!items.length) {
        return 'Список покупок пуст';
    }

    return (
        <ul>
            {items.map(({ id, name }) => <li key={id}>{name}</li>)}
        </ul>
    );
};

export default ShoppingList;
