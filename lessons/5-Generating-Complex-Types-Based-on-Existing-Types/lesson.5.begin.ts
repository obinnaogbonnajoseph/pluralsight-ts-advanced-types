import { ImageLayer, TextLayer } from "./types";

type FieldDescriptions = {
  [key in (keyof TextLayer | keyof ImageLayer) as `${key}Description`]: string
};

const fieldDescriptions: FieldDescriptions = {
  textDescription: "This is the default text",
  colorDescription: "The color of the text",
  fontSizeDescription: "The size of the font",
  idDescription: "The unique identify of the layer",
  maxWidthDescription: "The max width of the text layer",
  positionDescription: "The position of the top left part of the layer",
  rotationDescription: "The rotation angle of the layer between 0 and 360",
  typeDescription: "The type of the layer",
  maxBoundsDescription: "The max bounds for the image layer",
  srcDescription: "The relative location to the image file",
  metaDescription: "this is metadata",
  lastUpdatedDescription: "The Date of teh  last update",
};

Object.entries(fieldDescriptions).forEach(([field, description]) => {
  console.log(`${field}: ${description}`);
});
