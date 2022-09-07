import { useSolutionsContext } from '../../contexts/solutions/solutions';
import EmptyList from '../EmptyList';
import SolutionCard from '../SolutionCard';
import { ContainerSolutions } from '../SolutionCard/style';
import { Container,SecondContainer } from './style';

const SolutionList = () => {
  const { filteredSolutions, isFound, OpenSolution } = useSolutionsContext();
  // console.log(isFound);

  return (
    <ContainerSolutions>
      {isFound === false ? (
        <div>Não há resultado disponível</div>
      ) : filteredSolutions.length ? (
        filteredSolutions.map((item) => (
         <SecondContainer onClick={() => OpenSolution(item.id)}>
          <SolutionCard 
          key={item.id} 
          item={item}/>
         </SecondContainer> 
        ))
      ) : (
        <Container>
          <p>Carregando...</p>
          <EmptyList />
        </Container>
      )}
    </ContainerSolutions>
  );
};

export default SolutionList;
