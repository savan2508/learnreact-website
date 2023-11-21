import { Header } from "./component/header/Header";

import { SectionCoreConcept } from "./component/CoreConcept/SectionCoreConcept";
import { Examples } from "./component/examples/Examples";

function App() {
  return (
    <div>
      <Header />
      <main>
        <SectionCoreConcept />
        <Examples />
      </main>
    </div>
  );
}

export default App;
