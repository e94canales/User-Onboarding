import styled from 'styled-components'

const FormContainer = styled.div`
   

   form {
        padding: 5% 0;       
        display: flex;
        flex-direction: column;
        align-items: center;
        

        .input {
            padding: .8%;
            width: 15%;
            
        }
        div {
            font-size: .8rem;
            display: flex;
            justify-content: center;          
            width: 15%;
            align-items: center;
            margin-top: 1%;

                .check {
                    margin-right: 5%;
                    
                }
        }

        .submit{
            margin: 1%;
            padding: .4% 3%;
            cursor: pointer;
            
        }
   }
    
    

`

export default FormContainer