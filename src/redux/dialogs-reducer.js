const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

const dialogsReducer = (state, action) => {
  // state = dialogsPage
  switch (action.type) {
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = '';
      state.messages.push({ id: 6, message: body });
      return state;

    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.newMessage;
      return state;

    default:
      return state;  
  }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (text) =>
  ({ type: UPDATE_NEW_MESSAGE_BODY, newMessage: text });

export default dialogsReducer;