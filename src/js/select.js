/* select */
export function select() {
  const selectors = document.querySelectorAll('.selecter')
  if (selectors) {
    for (let i = 0; i < selectors.length; i++) {
      const selecter = selectors[i];

      const choices = new Choices(selecter, {
        searchEnabled: false,
        maxItemCount: 3,
        position: 'down',

        classNames: {
          containerOuter: 'select',
          containerInner: 'select__inner',
          input: 'select__input',
          inputCloned: 'select__input_cloned',
          list: 'select__list',
          listItems: 'select__list_multiple',
          listSingle: 'select__list_single',
          listDropdown: 'select__list_dropdown',
          item: 'select__item',
          itemSelectable: 'select__item_selectable',
          itemDisabled: 'select__item_disabled',
          itemOption: 'select__item_choice',
          group: 'select__group',
          groupHeading: 'select__heading',
          button: 'select__button',
          placeholder: 'select__placeholder',
          activeState: 'is-active',
          focusState: 'is-focused',
          openState: 'is-open',
          disabledState: 'is-disabled',
          highlightedState: 'is-highlighted',
          selectedState: 'is-selected',
          flippedState: 'is-flipped',
          selectedState: 'is-highlighted',
        }
      })
    }
  }
}