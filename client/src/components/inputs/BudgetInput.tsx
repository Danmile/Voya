interface BudgetInputProps {
  budget: number | null;
  onChange: (value: number) => void;
}

const BudgetInput = ({ budget, onChange }: BudgetInputProps) => (
  <div className="flex flex-col w-full p-3">
    <h1 className="hidden lg:block mb-1">Price</h1>
    <input
      type="number"
      value={budget !== null ? budget : ""}
      onChange={(e) => onChange(Number(e.target.value))}
      className="text-sm rounded w-full focus:outline-none focus:ring-0"
      placeholder="Your budget"
    />
  </div>
);

export default BudgetInput;
