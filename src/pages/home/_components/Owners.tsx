import FlexInfo from "./FlexInfo";
import Sectiongrid from "./SectionGrid";

export default function Owners() {
  return (
    <div className="py-12">
      <Sectiongrid>
        <FlexInfo className="px-6">
          <img src="ownership.png" alt="" className="" />
        </FlexInfo>

        <FlexInfo>
          <h2 className="text-4xl font-black">What is Fractional Ownership?</h2>
          <p>
            Fractional ownership is a structure in which multiple individuals or
            entities can each purchase a portion of an asset. Each investor buys
            a fraction of the property, sharing both the cost and the potential
            profit.
          </p>
        </FlexInfo>
      </Sectiongrid>
    </div>
  );
}
