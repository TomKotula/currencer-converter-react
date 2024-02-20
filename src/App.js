import Header from "./Header";
import Options from "./Options";
import Inputs from "./Inputs";
import Button from "./Button";
import Container from "./Container";
import Form from "./Form";

function App() {
  return (
    <Container >
      <Header />
      <Form>
        <Options />
        <Inputs />
        <Button />
      </Form>
    </Container>
  );
}

export default App;
