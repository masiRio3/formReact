import styled from 'styled-components';



export const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items center;
    width: 900px;
    height: 660px;
    padding: 25px;
    border-radius 10px;
    margin-top:25px;
    margin-bottom:15px;
    
    margin-left: auto;
    margin-right: auto;
    background-color: rgba(128,128,128, 0.7)
    
    
`;
export const Title = styled.h2`
    font-family: Arial, Helvetica, sans-serif;
    color: #F2F2F4;
    margin-bottom:25px;
    margin-top:25px;
`;

export const Subtitle = styled.h4`
font-family: Arial, Helvetica, sans-serif;
`;

export const ContainerForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 600px;
    height 100%;   
    margin 20px;
    background: rgb(63,193,251);
    background: linear-gradient(90deg, rgba(63,193,251,1) 0%, rgba(70,95,252,1) 100%);
    border-radius 20px;
   
    
`;

export const ContainerInput = styled.div`
    width: 70%;
    height 70px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-betwwen;
   
`;

export const Input = styled.input`
    height: 65%; 
    border-radius 10px;
    :focus { 
            outline: 3px solid #8F3A8459; 
            background: rgb(151,163,238);
            background: linear-gradient(90deg, rgba(151,163,238,1) 0%, rgba(209,229,251,1) 98%);
         }
    background-color:#B7D1D2 ;
    border: 0;
    ::placeholder { color: blue; }
    ::over{
        height: 65%; 
        border-radius 10px;
        background-color:#B7D1D2 ;
        border: 0;

    }

`

export const pE=styled.p`
   
`

export const Imagen = styled.img`
    
    border-radius: 10px;
    width: 60px;
    height: 30px;
    justify-content: center;
    align-items center;
    justify-content: space-betwwen;
    

`

