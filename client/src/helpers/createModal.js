import Swal from 'sweetalert2';

// export const createModal = (params) => {
//   return new Promise((resolve, reject) => {
//     Swal.fire({
//       ...params,
//       showCancelButton: true,
//       reverseButtons: true,
//     }).then((result) => {
//       if (result.isConfirmed) {
//         resolve();
//       } else if (result.dismiss === Swal.DismissReason.cancel) {
//         reject();
//       }
//     });
//   });
// }

export const createModal = (params) => {
  return new Promise((resolve, reject) => {
    Swal.fire({
      ...params,
      showCancelButton: true,
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        resolve();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        reject();
      }
    });
  });
}

export const showSuccessMessage = () => {

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger',
    },
    buttonsStyling: true
  })

  swalWithBootstrapButtons.fire(
    'Thank goodness you stayed for snacks!',
    'Your snacks are safe for eating!',
    'success'
  );
}
