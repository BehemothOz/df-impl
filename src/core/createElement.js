import types from "../constants";

const createTextElement = text => {
  return {
    type: types.TEXT_ELEMENT,
    props: {
      nodeValue: text
    }
  };
};

const createElement = (type, props, ...children) => {
  const _props = {
    ...props,
    children: children.flat().map(child =>
      // TODO: Filter falsy values?
      child instanceof Object ? child : createTextElement(child)
    )
  };

  if (typeof type === "function") {
    /*
      TODO: Implement when there will be a component as class (next step)
      if (type.isClass) {}
    */

    return type(_props);
  }

  return {
    type,
    props: _props
  };
};

export default createElement;
