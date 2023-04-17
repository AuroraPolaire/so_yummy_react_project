import { Title, Green1, Green2, Black1 } from './MainTitle.styled';
import { Wrapper } from '../theme/GlobalContainer';

const MainTitle = ({ text }) => {
  return (
    <Wrapper>
    <Title>
      {text}
      <Green1></Green1>
      <Green2></Green2>
      <Black1></Black1>
      </Title>
      </Wrapper>
  );
};
export default MainTitle;