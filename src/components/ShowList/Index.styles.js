import styled from 'vue-styled-components';

export const IndexContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.2);
  margin: auto;
  text-align: center;
  font-family: arial,serif;
  background-color: white;
  padding: 1rem;

  @media (min-width: 770px) {
    max-width: 60%; 
  }
`;
