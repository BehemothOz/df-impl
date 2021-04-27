if (module.hot) {
  module.hot.accept();
}

class OwnReact {
  static createElement(...args) {
    return [...args];
  }
}

export default OwnReact;
