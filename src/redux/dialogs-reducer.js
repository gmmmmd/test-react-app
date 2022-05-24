const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How is your it-kamasutra?' },
    { id: 3, message: 'Yo' },
    { id: 4, message: 'Yo' },
    { id: 5, message: 'Yo' },
  ],

  dialogs: [
    { id: 1, name: 'Dima' },
    { id: 2, name: 'Andrey' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Victor' },
    { id: 6, name: 'Valera' },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  // state = dialogsPage

  switch (action.type) {
  case SEND_MESSAGE:
    const body = action.newMessageBody;
    return {
      ...state,
      messages: [...state.messages, { id: 6, message: body }],
    };

  default:
    return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;