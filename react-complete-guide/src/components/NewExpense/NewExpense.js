import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => { // can now accept 'props' argument since it was added to App.js
    const saveExpenseDataHandler = (enteredExpenseData) => { // new function that adds 'id' to object
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData); // use props from child, pass new argument
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> {/* passes prop from child to parent*/}
        </div>
    )
};

export default NewExpense;