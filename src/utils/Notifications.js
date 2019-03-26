import { toast } from 'react-toastify';

export const Notification = {
  success: () => {
    toast.success('User added successfully!', {
      position: toast.POSITION.TOP_RIGHT,
    });
  },
  userAlreadyExists: () => {
    toast.error('User already exists in side menu!', {
      position: toast.POSITION.TOP_RIGHT,
    });
  },
  somethingWrong: () => {
    toast.error('Something wrong happened!', {
      position: toast.POSITION.TOP_RIGHT,
    });
  },
};
