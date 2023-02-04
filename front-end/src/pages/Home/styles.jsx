import styled from 'styled-components';

export const HomePageMainContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`;

export const HomePageFilterContainer = styled.div`
  max-width:25rem;
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  border-radius: 10px;
  margin: 0px 0px 10px 0px;
  margin-top:20px;
  border: 1px solid #d2d2ff;
  padding: 20px;
  background: #f5f4ff;
  box-shadow: inset 0px 0px 15px #e5e6ff;
`;

export const HomePagePropriedadeContainer = styled.div`
`;
// <label for="field1"><span>Name <span class="required">*</span></span><input type="text" class="input-field" name="field1" value="" /></label>
export const HomePageRemoveFiltrosButton = styled.button`
  background: #215a96;
  border: 1px solid #554ac9;
  padding: 5px 15px 5px 15px;
  color: #d0cbff;
  box-shadow: inset -1px -1px 3px #215a96;
  border-radius: 3px;
  border-radius: 3px;
  font-weight: bold;
`;

export const CardContainer = styled.div`
max-width:60vw;
display:flex;
flex-wrap: wrap;
`;

export const HomePageFormContaTipoLabel = styled.label`
  display:block;
  margin-bottom: 10px;
  & > span{
  margin-top:4px;
  float: left;
  width: 100px;
  color: #215a96;
  font-weight: bold;
  font-size: 13px;
  text-shadow: 1px 1px 1px #fff;
  }
  & > select {
    border-radius: 3px;
    border: 1px solid #c2c5ff;
    outline: none;
    color: #215a96;
    padding: 5px 8px 5px 8px;
    box-shadow: inset 1px 1px 4px #dad5ff;
    background: #f1efff;
    width:50%;
    }
`;

export const HomePageFormPropriedadesLabel = styled.label`
  display:block;
  margin-bottom: 10px;
  & > span {
    margin-top:4px;
    float: left;
    width: 100px;
    color: #215a96;
    font-weight: bold;
    font-size: 13px;
    text-shadow: 1px 1px 1px #fff;
  }
  & > input {
    border-radius: 3px;
    border: 1px solid #c2c5ff;
    outline: none;
    color: #215a96;
    padding: 5px 8px 5px 8px;
    box-shadow: inset 1px 1px 4px #dad5ff;
    background: #f1efff;
    width:50%;
    ::placeholder{
      color: #215a96;
    }
  }
  & > button {
    margin-left:1.8px;
    background: #215a96;
    border: 1px solid #215a96;
    padding: 5px 15px 5px 15px;
    color: #d0cbff;
    border-radius: 3px;
    border-radius: 3px;
    font-weight: bold;
  }
`;

export const HomePageFormVencimento = styled.label`
  display:block;
  margin-bottom: 10px;
  & > span {
    margin-top:4px;
    float: left;
    width: 100px;
    color: #215a96;
    font-weight: bold;
    font-size: 13px;
    text-shadow: 1px 1px 1px #fff;
  }
  & > select {
    border-radius: 3px;
    border: 1px solid #c2c5ff;
    outline: none;
    color: #215a96;
    padding: 5px 8px 5px 8px;
    box-shadow: inset 1px 1px 4px #dad5ff;
    background: #f1efff;
    width:50%;
    }
    & > button {
    margin-left:1.8px;
    background: #215a96;
    border: 1px solid #554ac9;
    padding: 5px 15px 5px 15px;
    color: #d0cbff;
    border-radius: 3px;
    border-radius: 3px;
    font-weight: bold;
  }
  `;

export const HomePageFormRemoveFiltroContainer = styled.div`
  display:block;
  margin-left:30%;
  & > button {
    margin-left:1.8px;
    background: #215a96;
    border: 0.5px solid #554ac9;
    padding: 5px 15px 5px 15px;
    color: #d0cbff;
    border-radius: 3px;
    border-radius: 3px;
    font-weight: bold;
  }
`;
