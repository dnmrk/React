import { useState } from 'react';

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

    const enteredNameIsValid = enteredName.trim() !== '';
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

    const enteredEmailIsValid = enteredEmail.trim() !== '';
    const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
 
    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    const nameInputChangeHandler = event => {
        setEnteredName(event.target.value);
    }

    const nameInputBlurHandler = () => {
        setEnteredNameTouched(true);
    };

    const emailInputChangeHandler = event => {
        setEnteredEmail(event.target.value);
    }

    const emailInputBlurHandler = () => {
        setEnteredEmailTouched(true);
    };

    const formSubmissionHandler = event => {
        event.preventDefault();

        setEnteredNameTouched(true);
        setEnteredEmailTouched(true);

        if (!enteredNameIsValid || !enteredEmailIsValid) {
            return;
        }

        console.log(enteredName, enteredEmail);

        setEnteredName('');
        setEnteredNameTouched(false);

        setEnteredEmail('');
        setEnteredEmailTouched(false);
    };

    const nameInputClasses = !nameInputIsInvalid ?
        'form-control' :
        'form-control invalid';

    const emailInputClasses = !emailInputIsInvalid ?
        'form-control' :
        'form-control invalid';
    
    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input
                    type='text'
                    id='name'
                    onChange={nameInputChangeHandler}
                    value={enteredName}
                    onBlur={nameInputBlurHandler}
                />
                {nameInputIsInvalid && 
                    <p className='error-text'>Name must not be empty</p>}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor='name'>Email</label>
                <input
                    type='email' 
                    id='email'
                    onChange={emailInputChangeHandler}
                    value={enteredEmail}
                    onBlur={emailInputBlurHandler}
                />
                {emailInputIsInvalid && 
                    <p className='error-text'>Email must not be empty</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
