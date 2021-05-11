import updateDomProperties from "./updateDomProperties";
import types from "../constants";

const isTextElement = type => type === types.TEXT_ELEMENT;

const instantiate = element => {
  const { type, props } = element;

  const dom = isTextElement(type)
    ? document.createTextNode("")
    : document.createElement(type);

  updateDomProperties(dom, {}, props);

  const { children = [] } = props;

  const childInstances = children.map(instantiate);
  const childDoms = childInstances.map(childInstance => childInstance.dom);

  childDoms.forEach(childDom => dom.append(childDom));

  const instance = { dom, element, childInstances };

  return instance;
};

export default instantiate;
