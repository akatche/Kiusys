import styled from 'vue-styled-components';

export const ShowContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  
  @media (min-width: 770px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  
  gap: 0.5rem;
`;

export const ShowCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.0625rem solid #55296a;
  border-radius: 0.25rem;
`;

export const ShowInnerContainer = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 1rem; 
  padding: 1rem;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  & > h1{
    padding: 0;
    margin: 0;
  }
`;

export const ShowFooter = styled.a`
  background-color: #000000;
  color: #FFFFFF;
  padding: 0.5rem;
  text-decoration: none;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & > img{
    max-width: 100%;
    height: auto;
  }
`;

export const ShowTitle = styled.div`
  font-size: 2rem;
`;
export const ShowType = styled.div`
  font-size: 1rem;
  color: grey;
`;
export const ShowNetwork = styled.div`
  font-size: 1rem;
`;
