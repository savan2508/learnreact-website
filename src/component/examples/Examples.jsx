import { TabButton } from "../TabButton/TabButton";
import { useState } from "react";
import { EXAMPLES } from "../../data";

export function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          onSelect={() => handleSelect("Components")}
          isSelected={selectedTopic === "Components"}
        >
          Components
        </TabButton>
        <TabButton
          onSelect={() => handleSelect("JSX")}
          isSelected={selectedTopic === "JSX"}
        >
          JSX
        </TabButton>
        <TabButton
          onSelect={() => handleSelect("Props")}
          isSelected={selectedTopic === "Props"}
        >
          Props
        </TabButton>
        <TabButton
          onSelect={() => handleSelect("State")}
          isSelected={selectedTopic === "State"}
        >
          State
        </TabButton>
      </menu>
      {!selectedTopic ? (
        <p>Please select a topic</p>
      ) : (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      )}
    </section>
  );
}
