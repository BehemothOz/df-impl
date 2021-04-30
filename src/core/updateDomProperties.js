const isProperty = key => key !== "children";
const isNotExist = props => key => !(key in props);
const isNotEqual = (prevProps, nextProps) => key =>
  prevProps[key] !== nextProps[key];

/*
  TODO: next step (third task)
   - add event listener
   - remove event listener
*/

const updateDomProperties = (dom, prevProps, nextProps) => {
  Object.keys(prevProps)
    .filter(isProperty)
    .filter(isNotExist(nextProps))
    .forEach(property => {
      dom[property] = null; // eslint-disable-line no-param-reassign
    });

  Object.keys(nextProps)
    .filter(isProperty)
    .filter(isNotEqual(prevProps, nextProps))
    .forEach(property => {
      dom[property] = nextProps[property]; // eslint-disable-line no-param-reassign
    });
};

export default updateDomProperties;
