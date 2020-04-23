import styled from 'styled-components'

const FormContainer = styled.div`
   display: flex;
   justify-content: center;
   
   width: 100%;


   form {
        padding: 10% 0 1%;       
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;        
        

        .input {
            padding: 1%;
            margin: 1%;
            width: 30%;
            
        }
        div {
            font-size: .8rem;
            display: flex;
            justify-content: center;          
            width: 15%;
            align-items: center;
            margin-top: 1%;
            color: #cacbd3;
                .check {
                    margin-right: 5%;
                    
                }
        }

        .submit{
            color: #474747;
            margin: 3%;
            padding: 1% 3%;
            cursor: pointer;
            border-radius: 15px;
            background-color: #b7e0e1;
            
                &:hover {
                    background-color: white;
                    
                    
                }
                &:disabled {
                    background-color: rgb(179, 179, 179);
                    color: grey;
                    
                }
            
            
        }
   }
    
    

`

export default FormContainer