import Dialogs from './Dialogs';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';

const DialogsContainer = (props) => {

  let state = props.store.getState().dialogsPage;

  const onSendMessageClick = () => {
    const action = sendMessageCreator();
    props.store.dispatch(action)
  }

  const onNewMessageChange = (body) => {
    const action = updateNewMessageBodyCreator(body);
    props.store.dispatch(action)
  }

  return (
    <Dialogs updateNewMessageBody={onNewMessageChange} sendMessageCreator={onSendMessageClick} dialogsPage={state} />
  )
}

export default DialogsContainer;