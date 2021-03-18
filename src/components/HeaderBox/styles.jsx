import styled from 'styled-components'

export const StyledHeader = styled.header`
  height: 150px;
  width: 100%;
  padding: 10px;

  & img {
    height: 100px;
    width: 500px;
  }
  
  .buttons {
    display: flex;
    justify-content: space-between;

    .buttons-buy {
      display: flex;
    }
  }
`