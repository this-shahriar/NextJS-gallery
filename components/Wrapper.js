import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 5rem;
  height: 100vh;
  width: 100vw;
  overflow-x : hidden;
  overflow-y : auto; 
  margin: 0;
  background-color: #fafafa;
  position : relative;

  @media (max-width : 480px) {
    padding : 0 1rem;
  }

  .pad {
    padding : 1rem;
  }
`;

export const GalleryWrapper = styled.div`
  display : grid;
  grid-template-columns : auto auto auto auto auto;
  grid-column-gap : 2rem;
  grid-row-gap : 2rem;

  div {
    padding : 0;
    background-color : #8a8a8a;
    border-radius : 5px;
    overflow : hidden;
    height : 20rem;
    width : auto;

    img {
      width : inherit;
      height: inherit;
      object-fit : cover;

      :hover {
        transform : scale(1.2);
        transition : all linear 0.3s;
      } 
    }
  }

  @media (max-width : 480px) {
    grid-template-columns : auto auto;
  } 

  @media (max-width : 480px) {
    grid-template-columns : auto;
  }
`

export const FooterWrapper = styled.div`
  /* position  : fixed; */
  bottom : 0;
  height : 5rem;
  margin : auto;
  text-align : center;
  /* background-color : #bcbcbc; */
`
 
export const NavWrapper = styled.div`
  height: 6rem;

  img {  
    width : 10rem;
  }

  @media (max-width : 480px) {
    img {  
    width : 7rem;
  }
  }

  .right-text {
    text-align: right;
  }

  .flex-row {
    display: flex;
    flex-direction: row;
    height: 100%;
  }

  .flex-col {
    display: flex;
    flex-direction: column;
  }

  .align-center {
    align-items: center;
    justify-content: center;
  }
`;
