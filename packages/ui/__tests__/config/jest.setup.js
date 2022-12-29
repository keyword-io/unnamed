// mock width & height
Object.defineProperties(window.HTMLElement.prototype, {
  offsetLeft: {
    get() {
      return parseFloat(this.style.marginLeft) || 0;
    },
  },
  offsetTop: {
    get() {
      return parseFloat(this.style.marginTop) || 0;
    },
  },
  offsetHeight: {
    get() {
      return parseFloat(this.style.height) || 0;
    },
  },
  offsetWidth: {
    get() {
      return parseFloat(this.style.width) || 0;
    },
  },
});

class ResizeObserver {
  observe() {
    // do nothing
  }
  unobserve() {
    // do nothing
  }
  disconnect() {
    // do nothing
  }
}
window.ResizeObserver = ResizeObserver;
window.HTMLElement.prototype.scrollIntoView = () => {};

// mock matchMedia api
// https://jestjs.io/docs/26.x/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => {
    let matches = false;
    if (/^\(min-width:\s?\d+px\)/.test(query)) {
      matches = true;
    } else if (/max-width/.test(query)) {
      // mock for ant-design v4 sidebar
      // https://github.com/ant-design/ant-design/blob/master/tests/setup.js#L15
      matches = true;
    }

    return {
      matches,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    };
  }),
});

// mock FileReader
Object.defineProperty(window, 'FileReader', {
  writable: true,
  value: jest.fn().mockImplementation(function callback() {
    return {
      readAsText: function(file) {
        setTimeout(() => {
          this.result = file.data;
          this.onload?.();
        }, 500);
      },
    };
  }),
});
