declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

interface ImportMetaEnv {
  VITE_URL_RENDER: string;
  // додайте інші змінні середовища, які ви використовуєте
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
