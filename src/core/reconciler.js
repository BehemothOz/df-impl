import instantiate from "./instantiate";
import updateDomProperties from "./updateDomProperties";

function reconcile(parentDom, instance, element) {
  if (instance === null) {
    const newInstantiate = instantiate(element);
    parentDom.append(newInstantiate.dom);

    return newInstantiate;
  }

  if (element === null) {
    parentDom.remove(instance.dom);
    return null;
  }

  if (instance.element.type === element.type) {
    updateDomProperties(instance.dom, instance.element.props, element.props);

    /*
      * Why mutate instance (prevInstance) ?

      instance.childInstances = reconcileChildren(instance, element);
      instance.element = element;
    */
    const childInstances = reconcileChildren(instance, element); // eslint-disable-line no-use-before-define

    return {
      dom: instance.dom,
      element,
      childInstances
    };
  }

  const newInstance = instantiate(element);
  parentDom.replaceChild(newInstance.dom, instance.dom);

  return newInstance;
}

function reconcileChildren(instance, element) {
  const { dom, childInstances } = instance;

  const { children: nextChildElements = [] } = element.props;
  const newChildInstances = [];

  const count = Math.max(childInstances.length, nextChildElements.length);

  for (let i = 0; i < count; i += 1) {
    const childInstance = childInstances[i];
    const childElement = nextChildElements[i];
    const newChildInstance = reconcile(dom, childInstance, childElement);

    newChildInstances.push(newChildInstance);
  }

  return newChildInstances;
}

export default reconcile;
