import { CategoriesContainer, CategoryContainer, Contents, Label, NewCategoryButton, NewItemButton, Title, TrashIcon, Value } from './style';
import { Categoryprops, CategoriesOnChange } from '../types';
import { FaTrash } from 'react-icons/fa';

export default function Categories({ editable, vehicleInformationState, setVehicleInformationState }: Categoryprops) {
  const onFormChange = ({ e, type, categoryIndex, itemIndex }: CategoriesOnChange) => {
    console.log('hi');
    const newVehicleInformationState = { ...vehicleInformationState };
    switch (type) {
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
      default:
        break;
    }
    setVehicleInformationState(newVehicleInformationState);
  };

  return (
    <>
      <CategoriesContainer>
        {vehicleInformationState.categories.map((category, categoryIndex) => (
          <CategoryContainer key={categoryIndex}>
            <Title value={category.title} readOnly={!editable} onChange={e => onFormChange({ e, type: 'TITLE', categoryIndex })} className={editable ? 'editable' : 'not editable'} />
            {editable ? (
              <TrashIcon onClick={() => onFormChange({ type: 'REMOVE CATEGORY', categoryIndex })}>
                <FaTrash />
              </TrashIcon>
            ) : (
              <></>
            )}
            <Contents>
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex}>
                  <Label value={item.label} readOnly={!editable} onChange={e => onFormChange({ e, type: 'LABEL', categoryIndex, itemIndex })} className={editable ? 'editable' : 'not editable'} />
                  <Value value={item.value} readOnly={!editable} onChange={e => onFormChange({ e, type: 'VALUE', categoryIndex, itemIndex })} className={editable ? 'editable' : 'not editable'} />
                  {editable ? (
                    <TrashIcon onClick={() => onFormChange({ type: 'REMOVE ITEM', categoryIndex, itemIndex })}>
                      <FaTrash />
                    </TrashIcon>
                  ) : (
                    <></>
                  )}
                </div>
              ))}
            </Contents>
            {editable ? (
              <NewItemButton type='button' onClick={() => onFormChange({ type: 'ADD ITEM', categoryIndex })}>
                Add An Item
              </NewItemButton>
            ) : (
              <></>
            )}
            {editable ? (
              <NewCategoryButton type='button' onClick={() => onFormChange({ type: 'ADD CATEGORY' })}>
                Add a Category
              </NewCategoryButton>
            ) : (
              <></>
            )}
          </CategoryContainer>
        ))}
      </CategoriesContainer>
    </>
  );
}
