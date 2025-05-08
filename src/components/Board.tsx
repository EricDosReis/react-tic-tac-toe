import { Square } from "./Square";

function Board() {
  return (
    <div className="mx-auto grid max-w-[26rem] grid-cols-3 gap-4">
      <Square />
      <Square />
      <Square />

      <Square />
      <Square />
      <Square />

      <Square />
      <Square />
      <Square />
    </div>
  );
}

export { Board };
