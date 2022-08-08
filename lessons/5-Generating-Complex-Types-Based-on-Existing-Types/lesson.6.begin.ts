import { TextLayer, ImageLayer } from "./types";


type LayerCombined = keyof TextLayer | keyof ImageLayer;
type IgnoredProperties = "id" | "maxBounds" | "position" | "meta";

type FieldDescriptions = {
  [key in Exclude<LayerCombined, IgnoredProperties>]: string;
};

const fieldDescriptions: FieldDescriptions = {
  text: "This is the default text",
  color: "The color of the text",
  fontSize: "The size of the font",
  maxWidth: "The max width of the text layer",
  rotation: "The rotation angle of the layer between 0 and 360",
  type: "The type of the layer",
  src: "The relative location to the image file",
  lastUpdated: "The Date of the last update",
};

Object.entries(fieldDescriptions).forEach(([field, description]) => {
  console.log(`${field}: ${description}`);
});
