import Header from "./components/Header";
import Meals from "./components/Meals";
import { MealsContextProvider } from "./store/meals-context";

function App() {
  return (
    <>
      <Header />
      <main>
        <MealsContextProvider>
          <Meals />
        </MealsContextProvider>
      </main>
    </>
  );
}

export default App;
