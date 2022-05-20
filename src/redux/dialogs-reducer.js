const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

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
  newMessageBody: '',
};

const dialogsReducer = (state = initialState, action) => {
  // state = dialogsPage

  switch (action.type) {
  case UPDATE_NEW_MESSAGE_BODY:
    return  {
      ...state,
      newMessageBody: action.newMessage,
    };

  case SEND_MESSAGE:
    const body = state.newMessageBody;
    return {
      ...state,
      newMessageBody: '',
      messages: [...state.messages, { id: 6, message: body }],
    };

  default:
    return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (text) =>
  ({ type: UPDATE_NEW_MESSAGE_BODY, newMessage: text });

export default dialogsReducer;