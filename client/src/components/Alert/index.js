import { notification } from 'antd';
//input
  // function () {
  // const showWarning = () => {
  //   notify(
  //     "Warning",
  //     "This is a warning notice about copywriting.",
  //     "warning"
  //   );
  // };

  // return (
  //   <>
  //     <button onClick={showWarning}>Show Warning</button>
  //   </>
  // );
 


const notify = (message, description, type = 'info') => {
  notification[type]({
    message,
    description,
    placement: 'topRight', // Vị trí hiển thị
    duration: 3, // Thời gian tồn tại (giây)
  });
};

export default notify;
