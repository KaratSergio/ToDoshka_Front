declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module '*.png' {
  const value: string;
  export default value;
}

interface ImportMetaEnv {
  VITE_URL_RENDER: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
