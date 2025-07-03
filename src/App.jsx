import Cart from "./components/Cart";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { MealsContextProvider } from "./store/meals-context";
import { UserProgressProvider } from "./store/user-progress-context";

function App() {
  return (
    <>
    <UserProgressProvider>
        <MealsContextProvider>
          <Header />
          <Meals />
        </MealsContextProvider>
    </UserProgressProvider>
    </>
  );
}

export default App;
