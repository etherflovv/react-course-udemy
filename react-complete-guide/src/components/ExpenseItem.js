import './ExpenseItem.css';

function ExpenseItem() {
        const expenseDate = new Date(2022, 5, 22);
        const expenseTitle = 'Car Insurance';
        const expensePrice = 123.45;

    return (
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">${expensePrice}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;

// return statement can only have ONE root element. e.g. if the outside <div> is removed it will not work!