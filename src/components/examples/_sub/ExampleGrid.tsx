import { forwardRef } from "react";
import { VirtuosoGrid } from "react-virtuoso";
import { ExampleCard } from "./ExampleCard";
import type { ExampleItem } from "~/lib";

interface Props {
  items: ExampleItem[];
}

const gridComponents = {
  List: forwardRef<HTMLDivElement>(function GList(
    { style, children, ...props }: any,
    ref,
  ) {
    return (
      <div
        ref={ref}
        {...props}
        style={{
          display: "flex",
          flexWrap: "wrap",
          ...style,
        }}
      >
        {children}
      </div>
    );
  }),
  Item: ({ children, ...props }: any) => (
    <div
      {...props}
      style={{
        padding: "0.5rem",
        width: "33%",
        display: "flex",
        flex: "none",
        alignContent: "stretch",
        boxSizing: "border-box",
      }}
    >
      {children}
    </div>
  ),
};

export function ExampleGrid({ items }: Props) {
  return (
    <VirtuosoGrid
      style={{ height: "100%" }}
      data={items}
      components={gridComponents}
      itemContent={(i, item) => <ExampleCard item={item} />}
    />
  );
}
