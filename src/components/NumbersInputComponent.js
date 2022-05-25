const NumbersInputComponent = ({ elementData, elementData2, title, color, handleInputChange, numbersInputValuesState }) => {

    return ( 
        <div className="numbers-input-component">
        <div className="numbers-input-title">{title}</div>
            <ul className="list-group list-group-flush">
                {elementData.map((item) =>
                <li className={`list-group-item list-group-item-${color} numbers-list-element`} key={item.id}>{item.element}:
                <input type="number" className="numbers-input-element" name={item.hardValue} value={numbersInputValuesState[item.hardValue]} 
                onChange={handleInputChange}/></li>
                )}
                 {elementData2 !== null ? elementData2.map((item) =>
                <li className={`list-group-item list-group-item-${color} numbers-list-element`} key={item.id}>{item.element}:
                <input type="number" className="numbers-input-element" name={item.hardValue} value={numbersInputValuesState[item.hardValue]} 
                onChange={handleInputChange}/></li>
                ) : null}
            </ul>
        </div>
    
     );
}
 
export default NumbersInputComponent;