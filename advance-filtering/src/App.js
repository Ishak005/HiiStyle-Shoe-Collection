import Navigation from "./Navigation/Nav";
import Product from "./Products/Product";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar"
function App() {
  return (
    <>
    <Sidebar/>
    <Navigation/>
    <Recommended/>
    <Product/>
    </>
  );
}

export default App;
