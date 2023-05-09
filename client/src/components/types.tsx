export type VehicleInformation = {
  categories: Array<{
    title: string;
    items: Array<{
      label: string;
      value: string;
    }>;
  }>;
};

export type Categoryprops = {
  editable: boolean;
  vehicleInformationState: VehicleInformation;
  setVehicleInformationState: React.Dispatch<React.SetStateAction<VehicleInformation>>;
};

export type CategoriesOnChange = {
  e?: React.FormEvent<HTMLInputElement>;
  type: CategoryChangeType;
  categoryIndex?: number;
  itemIndex?: number;
};

export type CategoryChangeType = 'TITLE' | 'LABEL' | 'VALUE' | 'ADD CATEGORY' | 'REMOVE CATEGORY' | 'ADD ITEM' | 'REMOVE ITEM';
