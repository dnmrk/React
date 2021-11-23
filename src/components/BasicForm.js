import useInput from "../hooks/use-input";

const BasicForm = (props) => {
    const {
        value: enteredFname,
        hasError: fnameInputHasError,
        isValid: enteredFnameIsValid,
        valueChangeHandler: fnameChangeHandler,
        inputBlurHandler: fnameBlurHandler,
        reset: resetFnameInput
    } = useInput(value => value.trim() !== '');

    let formIsValid = false;

    if (enteredFnameIsValid) {
        formIsValid = true;
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();

        if (!enteredFnameIsValid) {
            return;
        }

        console.log(enteredFname);

        resetFnameInput();
    };

    const fnameInputClasses = !fnameInputHasError ?
        'form-control' :
        'form-control invalid';

    return (
        <form onSubmit={formSubmitHandler}>
            <div className='control-group'>
                <div className={fnameInputClasses}>
                    <label htmlFor='name'>First Name</label>
                    <input
                        type='text'
                        id='name'
                        onChange={fnameChangeHandler}
                        value={enteredFname}
                        onBlur={fnameBlurHandler}
                    />
                    {fnameInputHasError && <p className='error-text'>First Name must not be empty</p>}
                </div>
                <div className='form-control'>
                    <label htmlFor='name'>Last Name</label>
                    <input type='text' id='name' />
                </div>
            </div>
            <div className='form-control'>
                <label htmlFor='name'>E-Mail Address</label>
                <input type='text' id='name' />
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
