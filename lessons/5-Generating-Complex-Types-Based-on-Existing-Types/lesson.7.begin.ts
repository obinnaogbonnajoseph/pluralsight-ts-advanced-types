import { render } from "./render";
import { TextLayer, LayerType, Project } from "./types";

const textLayer: TextLayer = {
  type: LayerType.Text,
  maxWidth: 1000,
  position: { x: 128, y: 208 },
  color: "#e8166d",
  id: "10",
  rotation: 0,
  text: "Advanced TypeScript",
  fontSize: "20px"
};

function setText(layer: TextLayer, text: string) {
  layer.text = text;
}

function setColor(layer: TextLayer, color: string) {
  layer.color = color;
}

function projectAction<U extends (object | string)[]>(
  name: string,
  func: (...args: U) => void
) {
  return function wrapper(project: Project, ...args: U) {
    func(...args);
    project.lastAction = name;
    project.lastUpdated = Date.now();
  }
} 

const wrappedSetText = projectAction("setText", setText);

const wrappedSetColor = projectAction("setColor", setColor);

const project: Project = {
  layers: [textLayer],
  size: {height: 500, width: 500}
}

wrappedSetText(project, textLayer, "this is the new text!!!");
wrappedSetColor(project, textLayer, "red")

render(project);
