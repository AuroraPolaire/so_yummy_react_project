import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 14px;
  justify-content: space-evenly;
  padding-bottom: 50px;

  & .card {
    width: 300px;
    height: 323px;
    position: relative;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & .title {
    position: absolute;

    bottom: 10px;
    left: 0px;
    background: #ffffff;
    border-radius: 8px;
    padding: 16px;
    text-align: left;
  }
`;
