export interface IIconEntry {
  name: string;
  svg: string;
}

export interface IIconCategory {
  name: string;
  slug: string;
  icons: IIconEntry[];
}
