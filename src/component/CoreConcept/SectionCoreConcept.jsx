import { CORE_CONCEPTS } from "../../data";
import { CoreConcept } from "./CoreConcept";

export function SectionCoreConcept() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcept key={concept.title} concept={concept} />
        ))}
      </ul>
    </section>
  );
}
