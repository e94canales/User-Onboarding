import React from 'react'
import FormContainer from './styles/FormContainerStyle'

const Form = props => {

    const { 
        onInputChange,
        onCheckBoxChange,
        submitDisabled,
        submit,
        formValues,
        showError,
    
    } = props

    return (
        <FormContainer>
            <form>
            <h1>Register</h1>

                <input
                    className='input' 
                    type='text' 
                    name='name' 
                    value={formValues.name}
                    placeholder='Name'
                    onChange={onInputChange}
                />

                <input 
                    className='input' 
                    type='text' 
                    name='email' 
                    value={formValues.email}
                    placeholder='Email'
                    onChange={onInputChange}
                    
                />

                <input 
                    className='input' 
                    type='password' 
                    name='password' 
                    value={formValues.password}
                    placeholder='Password'
                    onChange={onInputChange}
                    
                />
                <div>
                    <input 
                        className='check' 
                        type="checkbox" 
                        value={formValues.tos}
                        checked={formValues.tos}
                        name="tos" 
                        onChange={onCheckBoxChange}
                        
                    />

                    <label htmlFor="tos">Terms of Service</label>
                </div>

                <button onClick={submit} disabled={submitDisabled} className='submit'>Submit</button>
            </form>
        </FormContainer>
    )
}

export default Form