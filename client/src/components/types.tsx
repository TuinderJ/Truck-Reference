export type VehicleInformation = {
  unitNumber: string;
  customerUnitNumber: string;
  vin: string;
  customer: string;
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

export type CategoryChangeType = 'UNIT NUMBER' | 'CUSTOMER UNIT NUMBER' | 'VIN' | 'CUSTOMER' | 'TITLE' | 'LABEL' | 'VALUE' | 'ADD CATEGORY' | 'REMOVE CATEGORY' | 'ADD ITEM' | 'REMOVE ITEM';
