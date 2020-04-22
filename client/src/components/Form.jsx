import React from 'react'
import FormContainer from './styles/FormContainerStyle'

const Form = props => {

    return (
        <FormContainer>
            <form>
                <input className='input' type='text' name='name' placeholder='Name'/>
                <input className='input' type='text' name='email' placeholder='Email'/>
                <input className='input' type='text' name='password' placeholder='Password'/>
                <div>
                    <input className='check' type="checkbox" name="tos" id="tos"/>
                    <label for="tos">Terms of Service</label>
                </div>
                <button className='submit'>Submit</button>
            </form>
        </FormContainer>
    )
}

export default Form