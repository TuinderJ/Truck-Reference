import { CategoriesContainer, CategoryContainer, CategoryList, Contents, Label, LabelValueContainer, NewCategoryButton, NewItemButton, Title, TitleContainer, TrashIcon, Value } from './style';
import { Categoryprops, CategoriesOnChange } from '../types';
import { FaTrash } from 'react-icons/fa';

export default function Categories({ editable = false, vehicleInformationState, setVehicleInformationState }: Categoryprops) {
  const onFormChange = ({ e, type, categoryIndex, itemIndex }: CategoriesOnChange) => {
    const newVehicleInformationState = { ...vehicleInformationState };
    switch (type) {
      case 'UNIT NUMBER':
        newVehicleInformationState.unitNumber = e?.currentTarget.value.toUpperCase() || '';
        break;
      case 'CUSTOMER UNIT NUMBER':
        newVehicleInformationState.customerUnitNumber = e?.currentTarget.value.toUpperCase() || '';
        break;
      case 'CUSTOMER':
        newVehicleInformationState.customer = e?.currentTarget.value.toUpperCase() || '';
        break;
      case 'VIN':
        newVehicleInformationState.vin = e?.currentTarget.value.toUpperCase() || '';
        break;
      case 'TITLE':
        newVehicleInformationState.categories[categoryIndex || 0].title = e?.currentTarget.value || '';
        break;
      case 'LABEL':
        newVehicleInformationState.categories[categoryIndex || 0].items[itemIndex || 0].label = e?.currentTarget.value || '';
        break;
      case 'VALUE':
        newVehicleInformationState.categories[categoryIndex || 0].items[itemIndex || 0].value = e?.currentTarget.value || '';
        break;
      case 'ADD CATEGORY':
        newVehicleInformationState.categories.push({ title: '', items: [{ label: '', value: '' }] });
        break;
      case 'REMOVE CATEGORY':
        newVehicleInformationState.categories.splice(categoryIndex || 0, 1);
        break;
      case 'ADD ITEM':
        newVehicleInformationState.categories[categoryIndex || 0].items.push({ label: '', value: '' });
        break;
      case 'REMOVE ITEM':
        newVehicleInformationState.categories[categoryIndex || 0].items.splice(itemIndex || 0, 1);
        break;
    }
    if (setVehicleInformationState) setVehicleInformationState(newVehicleInformationState);
  };

  return (
    <>
      <CategoriesContainer>
        <CategoryList>
          <CategoryContainer>
            <TitleContainer>
              <Title value='Details' readOnly tabIndex={-1} className='not-editable' />
            </TitleContainer>
            <Contents>
              <LabelValueContainer>
                <Label readOnly tabIndex={-1} className='not-editable' value='Unit Number' />
                <Value
                  value={vehicleInformationState.unitNumber}
                  readOnly={!editable}
                  onChange={(e) => onFormChange({ e, type: 'UNIT NUMBER' })}
                  className={editable ? 'editable' : 'not-editable'}
                  placeholder={editable ? 'Unit Number' : ''}
                />
              </LabelValueContainer>
              <LabelValueContainer>
                <Label readOnly tabIndex={-1} className='not-editable' value='Customer Unit Number' />
                <Value
                  value={vehicleInformationState.customerUnitNumber}
                  readOnly={!editable}
                  onChange={(e) => onFormChange({ e, type: 'CUSTOMER UNIT NUMBER' })}
                  className={editable ? 'editable' : 'not-editable'}
                  placeholder={editable ? 'Customer Unit Number' : ''}
                />
              </LabelValueContainer>
              <LabelValueContainer>
                <Label readOnly tabIndex={-1} className='not-editable' value='Customer' />
                <Value
                  value={vehicleInformationState.customer}
                  readOnly={!editable}
                  onChange={(e) => onFormChange({ e, type: 'CUSTOMER' })}
                  className={editable ? 'editable' : 'not-editable'}
                  placeholder={editable ? 'Customer' : ''}
                />
              </LabelValueContainer>
              <LabelValueContainer>
                <Label readOnly tabIndex={-1} className='not-editable' value='VIN' />
                <Value
                  value={vehicleInformationState.vin}
                  readOnly={!editable}
                  onChange={(e) => onFormChange({ e, type: 'VIN' })}
                  className={editable ? 'editable' : 'not-editable'}
                  placeholder={editable ? 'VIN' : ''}
                  maxLength={16}
                />
              </LabelValueContainer>
              <LabelValueContainer>
                <Label readOnly tabIndex={-1} className='not-editable' value='Last 8' />
                <Value value={vehicleInformationState.vin.substring(8)} readOnly tabIndex={-1} className='not-editable' />
              </LabelValueContainer>
            </Contents>
          </CategoryContainer>
          {vehicleInformationState.categories.map((category, categoryIndex) => (
            <CategoryContainer key={categoryIndex}>
              <TitleContainer>
                <Title
                  value={category.title}
                  readOnly={!editable}
                  onChange={(e) => onFormChange({ e, type: 'TITLE', categoryIndex })}
                  className={editable ? 'editable' : 'not-editable'}
                  placeholder={editable ? 'Category Title' : ''}
                />
                {editable ? (
                  <TrashIcon type='button' onClick={() => onFormChange({ type: 'REMOVE CATEGORY', categoryIndex })}>
                    <FaTrash />
                  </TrashIcon>
                ) : (
                  <></>
                )}
              </TitleContainer>
              <Contents>
                {category.items.map((item, itemIndex) => (
                  <LabelValueContainer key={itemIndex}>
                    <Label
                      value={item.label}
                      readOnly={!editable}
                      onChange={(e) => onFormChange({ e, type: 'LABEL', categoryIndex, itemIndex })}
                      className={editable ? 'editable' : 'not-editable'}
                      placeholder={editable ? 'Label' : ''}
                    />
                    <Value
                      value={item.value}
                      readOnly={!editable}
                      onChange={(e) => onFormChange({ e, type: 'VALUE', categoryIndex, itemIndex })}
                      className={editable ? 'editable' : 'not-editable'}
                      placeholder={editable ? 'Value' : ''}
                    />
                    {editable ? (
                      <TrashIcon type='button' onClick={() => onFormChange({ type: 'REMOVE ITEM', categoryIndex, itemIndex })}>
                        <FaTrash />
                      </TrashIcon>
                    ) : (
                      <></>
                    )}
                  </LabelValueContainer>
                ))}
              </Contents>
              {editable ? (
                <NewItemButton type='button' onClick={() => onFormChange({ type: 'ADD ITEM', categoryIndex })}>
                  Add An Item
                </NewItemButton>
              ) : (
                <></>
              )}
            </CategoryContainer>
          ))}
        </CategoryList>
        {editable ? (
          <NewCategoryButton type='button' onClick={() => onFormChange({ type: 'ADD CATEGORY' })}>
            Add a Category
          </NewCategoryButton>
        ) : (
          <></>
        )}
      </CategoriesContainer>
    </>
  );
}
