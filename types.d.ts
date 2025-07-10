/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

declare module 'react' {
  interface FormEvent<T = Element> extends SyntheticEvent<T> {
    preventDefault(): void;
  }
  
  interface SyntheticEvent<T = Element> {
    currentTarget: T;
    preventDefault(): void;
    stopPropagation(): void;
  }
}

// Declare global React types
declare global {
  namespace React {
    interface FormEvent<T = Element> extends SyntheticEvent<T> {
      preventDefault(): void;
    }
  }
}
