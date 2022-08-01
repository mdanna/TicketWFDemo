const globals = {
  step: 0, // this is the current step
  role: 'resp', // this is the current role selected
  roleForStep: ['resp', 'resp', 'resp', 'coord', 'dev', 'resp', 'dev', 'coord'],
  users: {
    resp: {
      name: 'Henry Boyle',
      role: 'Assignment Manager',
      image: 'photo.png'
    },
    coord: {
      name: 'John McCloskey',
      role: 'Project Coordinator',
      image: 'photo_2.png'
    },
    dev: {
      name: 'Sally Atlas',
      role: 'Developer',
      image: 'photo_1.png'
    }
  },
  EVT_SELECT_MENU_ITEM: 'selectMenuItem',
  EVT_SET_STEP: 'setStep',
  EVT_SET_ROLE: 'setRole',
  EVT_SHOW_USER_SELECTOR: 'showUserSelector'
};