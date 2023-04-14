import { Title, Green1, Green2, Black1 } from './MainTitle.styled';



const MainTitle = ({ text }) => {
  return (
    <Title>
      {text}
      <Green1></Green1>
      <Green2></Green2>
      <Black1></Black1>
    </Title>
  );
};

export default MainTitle;