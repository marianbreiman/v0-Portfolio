export interface Brand {
  id: string
  name: string
  abbr: string
  category: "client" | "project" | "education"
}

// Para agregar una marca real: añadí un objeto con id, name, abbr (2-3 letras), category.
// category "client" = empresa donde trabajé, "project" = proyecto diseñado, "education" = formación.
export const BRANDS: Brand[] = [
  { id: "multitravel",      name: "Multitravel.com",    abbr: "MT",  category: "client" },
  { id: "tutenlabs",        name: "Tutenlabs",           abbr: "TL",  category: "client" },
  { id: "orbit",            name: "Orbit",               abbr: "OR",  category: "client" },
  { id: "coderhouse",       name: "Coderhouse",          abbr: "CH",  category: "education" },
  { id: "uala",             name: "Ualá",                abbr: "UL",  category: "project" },
  { id: "alleata",          name: "Alleata",             abbr: "AL",  category: "project" },
  { id: "future",           name: "Future App",          abbr: "FU",  category: "project" },
  { id: "consorcio",        name: "Consorcio Madrid",    abbr: "CM",  category: "project" },
]
