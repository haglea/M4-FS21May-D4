import './App.css';
import { Container } from "react-bootstrap";
import MyNavBar from "./Components/MyNavBar";
import MyFooter from "./Components/MyFooter";
import MyWelcome from "./Components/MyWelcome";
import WarningSign from "./Components/WarningSign";
import fantasy from "./data/fantasy.json";
import BookList from "./Components/BookList";

function App() {
  return (
    <Container>
    <MyNavBar title="Home" />
    <MyWelcome />
    <WarningSign text={"I am an alert"} />

    <BookList books={fantasy} />
    <MyFooter />
  </Container>
  );
}

export default App;
