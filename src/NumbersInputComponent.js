
const NumbersInputComponent = ({ elementData, title, color, handleInputChange, numbersValues }) => {

    return ( 
        <div>
        <div className="numbers-input-title">{title}</div>
            <ul className="list-group list-group-flush">
                {elementData.map((item) =>
                <li className={`list-group-item list-group-item-${color} numbers-list-element`} key={item.id}>{item.element}:
                <input type="number" className="numbers-input-element" name={item.hardValue} value={numbersValues[item.hardValue]} 
                onChange={handleInputChange}/></li>
                )}
            </ul>
        </div>
    
     );
}
 
export default NumbersInputComponent;