function DessertsList(props) {
    const lowCaloriesDesserts = props.data
    .filter((dessert) => {
        return(dessert.calories < 500);
    })
    .sort((a, b) => {
        return (
            a.calories - b.calories
        );
    })
    .map((dessert => {
        const itemText = `${dessert.name} - ${dessert.calories} cal`;
        return (
            <li>{itemText}</li>
        );
    }));
    return (
        <ul>{lowCaloriesDesserts}</ul>
    );
}
export default DessertsList;
