import React from "react";
import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";
import Section from "./Section";

const CoreConcepts = () => {
  return (
    <Section title="Core Concepts" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
        {/* <CoreConcept {...CORE_CONCEPTS[0]} />
      <CoreConcept {...CORE_CONCEPTS[1]} />
      <CoreConcept {...CORE_CONCEPTS[2]} />
      <CoreConcept {...CORE_CONCEPTS[3]} /> */}
      </ul>
    </Section>
  );
};

export default CoreConcepts;
