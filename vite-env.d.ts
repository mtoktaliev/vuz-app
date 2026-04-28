/// <reference types="vite/client" />

// CSS
declare module "*.css";
declare module "*.scss";
declare module "*.sass";

// CSS Modules
declare module "*.module.css" {
  const classes: Record<string, string>;
  export default classes;
}
declare module "*.module.scss" {
  const classes: Record<string, string>;
  export default classes;
}

// Assets
declare module "*.svg" {
  const src: string;
  export default src;
}
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.webp";

// (опционально) SVG как React компонент
declare module "*.svg?react" {
  import * as React from "react";
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
