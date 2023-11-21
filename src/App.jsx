import { Header } from "./component/header/Header";
import { CORE_CONCEPTS } from "./data";
import { CoreConcept } from "./component/CoreConcept/CoreConcept";
import { TabButton } from "./component/TabButton/TabButton";
import { SectionCoreConcept } from "./component/CoreConcept/SectionCoreConcept";

function App() {
  function handleSelect(selectedButton) {
    console.log(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <SectionCoreConcept />
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("Components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("JSX")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("Props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("State")}>State</TabButton>
          </menu>
          Dynamic content goes here!
        </section>
      </main>
    </div>
  );
}

export default App;
