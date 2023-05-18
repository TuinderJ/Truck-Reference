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

export type NavbarProps = {
  vehicleInformationState: VehicleInformation;
  vehicleIsInDatabase: boolean;
};

export type Categoryprops = {
  editable?: boolean;
  vehicleInformationState: VehicleInformation;
  setVehicleInformationState?: React.Dispatch<React.SetStateAction<VehicleInformation>>;
};

export type HomePageProps = {
  vehicleInformationState: VehicleInformation;
  setVehicleInformationState?: React.Dispatch<React.SetStateAction<VehicleInformation>>;
  vehicleIsInDatabase: boolean;
  setVehicleIsInDatabase: React.Dispatch<React.SetStateAction<boolean>>;
};

export type UpdateVehiclePageProps = {
  newVehicle: boolean;
  vehicleInformationState: VehicleInformation;
  setVehicleInformationState: React.Dispatch<React.SetStateAction<VehicleInformation>>;
  setVehicleIsInDatabase: React.Dispatch<React.SetStateAction<boolean>>;
};

export type CategoriesOnChange = {
  e?: React.FormEvent<HTMLInputElement>;
  type: CategoryChangeType;
  categoryIndex?: number;
  itemIndex?: number;
};

export type CategoryChangeType = 'UNIT NUMBER' | 'CUSTOMER UNIT NUMBER' | 'VIN' | 'CUSTOMER' | 'TITLE' | 'LABEL' | 'VALUE' | 'ADD CATEGORY' | 'REMOVE CATEGORY' | 'ADD ITEM' | 'REMOVE ITEM';

export type LoginStateChange = 'EMAIL' | 'PASSWORD';

type UserManagementChangeType = 'NAME' | 'EMAIL' | 'USER ACCESS LEVEL' | 'BRANCH';

export type UserManagementInputChange = {
  e: React.FormEvent<HTMLElement>;
  type: UserManagementChangeType;
  branchIndex: number;
  userIndex: number;
};

export type UserManagementPencilClick = {
  e: React.MouseEvent;
  type: UserManagementChangeType;
  branchIndex: number;
  userIndex: number;
};

export type userManagementSubmitChanges = {
  branchIndex: number;
  userIndex: number;
};

export type FetchData = {
  unitNumber?: string;
  customerUnitNumber?: string;
  vin?: string;
  last8?: string;
};
