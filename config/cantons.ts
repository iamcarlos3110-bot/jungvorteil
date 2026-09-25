// config/cantons.ts

export interface CantonConfig {
  code: string;
  name_de: string;
  name_fr: string;
  name_it: string;
}

export const CANTONS: CantonConfig[] = [
  { code: "AG", name_de: "Aargau", name_fr: "Argovie", name_it: "Argovia" },
  { code: "AI", name_de: "Appenzell Innerrhoden", name_fr: "Appenzell Rhodes-Intérieures", name_it: "Appenzello Interno" },
  { code: "AR", name_de: "Appenzell Ausserrhoden", name_fr: "Appenzell Rhodes-Extérieures", name_it: "Appenzello Esterno" },
  { code: "BE", name_de: "Bern", name_fr: "Berne", name_it: "Berna" },
  { code: "BL", name_de: "Basel-Landschaft", name_fr: "Bâle-Campagne", name_it: "Basilea Campagna" },
  { code: "BS", name_de: "Basel-Stadt", name_fr: "Bâle-Ville", name_it: "Basilea Città" },
  { code: "FR", name_de: "Fribourg", name_fr: "Fribourg", name_it: "Friburgo" },
  { code: "GE", name_de: "Genève", name_fr: "Genève", name_it: "Ginevra" },
  { code: "GL", name_de: "Glarus", name_fr: "Glaris", name_it: "Glarona" },
  { code: "GR", name_de: "Graubünden", name_fr: "Grisons", name_it: "Grigioni" },
  { code: "JU", name_de: "Jura", name_fr: "Jura", name_it: "Giura" },
  { code: "LU", name_de: "Luzern", name_fr: "Lucerne", name_it: "Lucerna" },
  { code: "NE", name_de: "Neuchâtel", name_fr: "Neuchâtel", name_it: "Neuchâtel" },
  { code: "NW", name_de: "Nidwalden", name_fr: "Nidwald", name_it: "Nidvaldo" },
  { code: "OW", name_de: "Obwalden", name_fr: "Obwald", name_it: "Obvaldo" },
  { code: "SG", name_de: "St. Gallen", name_fr: "Saint-Gall", name_it: "San Gallo" },
  { code: "SH", name_de: "Schaffhausen", name_fr: "Schaffhouse", name_it: "Sciaffusa" },
  { code: "SO", name_de: "Solothurn", name_fr: "Soleure", name_it: "Soletta" },
  { code: "SZ", name_de: "Schwyz", name_fr: "Schwytz", name_it: "Svitto" },
  { code: "TG", name_de: "Thurgau", name_fr: "Thurgovie", name_it: "Turgovia" },
  { code: "TI", name_de: "Ticino", name_fr: "Tessin", name_it: "Ticino" },
  { code: "UR", name_de: "Uri", name_fr: "Uri", name_it: "Uri" },
  { code: "VD", name_de: "Vaud", name_fr: "Vaud", name_it: "Vaud" },
  { code: "VS", name_de: "Valais", name_fr: "Valais", name_it: "Vallese" },
  { code: "ZG", name_de: "Zug", name_fr: "Zoug", name_it: "Zugo" },
  { code: "ZH", name_de: "Zürich", name_fr: "Zurich", name_it: "Zurigo" },
];
