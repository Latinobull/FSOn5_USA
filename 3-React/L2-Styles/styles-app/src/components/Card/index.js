import styled from 'styled-components';
export default function Card(props) {
  const Container = styled.div`
    width: 300px;
    border: 2px solid green;
    color: black;
  `;
  const Button = styled.button`
    width: 150px;
    padding: 20px;
    background-color: white;
    color: black;
  `;
  return (
    <Container>
      {props.children}
      <Button>Welcome</Button>
    </Container>
  );
}
