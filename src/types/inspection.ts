type InstallationType = 'Pipeline';
type InspectionType = 'Bending Strain' | 'River crossing' | 'Mapping';
type MaterialType = 'Steel' | 'Cast Iron';
type CoatingType = 'Poly Ethylene' | 'Epoxy';

export interface IInspection {
  id?: number;
  name: string;
  installationType: InstallationType;
  constructionYear: number;
  company: string;
  type: InspectionType;
  diameter: string;
  material: MaterialType;
  coating: CoatingType;
}

export interface IInspections {
  inspections: IInspection[];
}
