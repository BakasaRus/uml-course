// Inline PlantUML SVGs need the same wrapper used by starlight-image-zoom's Zoom component.
export const plantUmlZoomPlugin = {
  name: "uml-course-plantuml-zoom",
  element: {
    filter: ["svg"],
    visit(node, context) {
      const parent = context.parent(node);
      if (parent?.type !== "element" || parent.tagName !== "figure") return;
      const classes = String(parent.properties.className ?? "").split(/[\s,]+/);
      if (!classes.includes("plantuml-diagram")) return;

      const svgClasses = String(node.properties.className ?? "").split(/[\s,]+/).filter(Boolean);
      context.setProperty(node, "className", [...new Set([...svgClasses, "uml-plantuml-svg"])]);
      context.wrapNode(node, {
        type: "element",
        tagName: "starlight-image-zoom-zoomable",
        properties: { className: ["plantuml-zoom"] },
        children: [{
          type: "element",
          tagName: "button",
          properties: {
            type: "button",
            "aria-label": "Увеличить UML-диаграмму",
            className: ["starlight-image-zoom-control"],
          },
          children: [{
            type: "element",
            tagName: "svg",
            properties: { "aria-hidden": "true", fill: "currentColor", viewBox: "0 0 24 24" },
            children: [{
              type: "element",
              tagName: "use",
              properties: { href: "#starlight-image-zoom-icon-zoom" },
              children: [],
            }],
          }],
        }],
      });
    },
  },
};
