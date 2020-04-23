import React, { useState, useEffect } from 'react';
import './App.css';
import Form from '../src/components/Form'
import * as yup from 'yup'
import Errors from '../src/components/styles/Errors'
import axios from 'axios'

const url = 'https://reqres.in/api/users'

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  tos: false,
}
const initialErrors = {
  name: '',
  email: '',
  password: '',
  tos: false
}


const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Your name must contain at least 3 characters!')
    .required(),
  email: yup
    .string()
    .email('A valid email is required!')
    .required(),
  password: yup 
    .string()
    .min(6, 'Your password must be at least 6 characters long!')
    .required(),
  tos: yup
    .boolean()
    .oneOf([true], 'You must accept the Terms of Service')
    .required()
})

function App() {

  const [ formValues , setFormValues ] = useState(initialFormValues)
  const [ errors, setErrors ] = useState(initialErrors)
  const [ submitDisabled, setSubmitDisabled ] = useState(true)
  const [ errorsActive, setErrorsActive ] = useState(false)
  const [ showError, setShowError ] = useState()
  const [ members, setMembers ] = useState([])

  useEffect(() => {
    formSchema.isValid(formValues)
      .then( valid => {
        setSubmitDisabled(!valid)
      })
  })
  
  useEffect(() => {
      if (errorsActive === true){
        setShowError(<div className='error'>{errors}</div>)
      }
      else {
        setShowError('')
      }
    
  }, [errorsActive])

  const onInputChange = e =>{
    const name = e.target.name
    const value = e.target.value

    yup
      .reach(formSchema, name)
      .validate(value)
      .then( valid => {
        setErrors({
          ...errors,
          [name]: ''
        })
        setErrorsActive(false)
      })
      .catch( err => {
        setErrors(`⚠️ ${err.message}`);
        setErrorsActive(true)
      })

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const onCheckBoxChange = e => {
    const name = e.target.name
    const isChecked = e.target.checked

    yup
      .reach(formSchema, name)
      .validate(isChecked)
      .then( valid => {
        setErrors({
          ...errors,
          [name]: ''
        })
        setErrorsActive(false)

      })
      .catch( err => {
        setErrors(`⚠️ ${err.message}`);
        setErrorsActive(true)

      })

    setFormValues({
      ...formValues,
      [name]: isChecked
    })
  }

  useEffect(() => {
    axios.get(url)
      .then( res => {
        setMembers(res.data.data)
        
      })
  }, [])

  const postMember = member => {
    axios.post(url, member)
      .then( response => {
        setMembers([
          ...members,
          response.data
        ])
      })
      .catch( err => {
        console.log(err);
        
      })
  }

  const submit = e => {

    e.preventDefault()

    const newMember = {
      name: formValues.name,
      email: formValues.email,
      password: formValues.password
    }

    postMember(newMember)
    setFormValues(initialFormValues)
  }

 

  return (
    <div className="App">
      {showError}
    <div className='wrapper'>
      <Form 
          onInputChange={onInputChange}
          submitDisabled={submitDisabled}
          onCheckBoxChange={onCheckBoxChange} 
          submit={submit}
          formValues={formValues}
          showError={showError}        
        />
        <div className='members'>
          <h1>Members</h1>
          {
            members.map( m => {
              return (
                <div className='mListContainer' key={m.id}>
                  Name: <h4> {m.name || m.first_name}</h4>
                  Email: <h5> {m.email}</h5>
                </div>
              )
            })
          }

        </div>

    </div>
    </div>
  );
}

export default App;
