declare namespace JSX {
    interface IntrinsicElements {
      'box-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        name?: string;
        type?: string;
        color?: string;
        size?: string;
        rotate?: string;
        flip?: string;
        border?: string;
        animation?: string;
        pull?: string;
      };
    }
  }
  