const ItemsList = ({ items }) => {

    console.log(items)
    return (
        <div>
        {items.map((items) =>
                <div className="item-list">
                    {items.card.info.name}
                </div>
            )}
        </div>
    )
}

export default ItemsList; 