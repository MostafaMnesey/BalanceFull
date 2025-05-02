import Swal from 'sweetalert2';
import { useEffect } from 'react';

const Toast = ({ icon = 'success', title = 'Success', show = false }) => {
  useEffect(() => {
    if (show) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });

      Toast.fire({
        icon,
        title
      });
    }
  }, [show, icon, title]);

  return null; // This component doesn't render anything directly
};

export default Toast;