import { TabButton } from "../TabButton/TabButton";
import { useState } from "react";
import { EXAMPLES } from "../../data";

export function Examples() {
  const [selectedTopic, setSelectedTopic] = useState("Components");

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
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
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    </section>
  );
}
