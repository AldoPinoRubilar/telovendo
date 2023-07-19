$(document).ready(function () {
    var darkModeEnabled = false;
    $('#dark-mode-toggle').click(function() {
      if (!darkModeEnabled) {
        document.body.style = "background-color: #343a40";
        $('html').addClass('dark-mode');
        $('#example_wrapper').addClass('table-dark');
        $('.dataTables_length label, .dataTables_filter label, .dataTables_filter input').css('color', '#fff');
        $('.dataTables_length select, .dataTables_filter input').css('background-color', '#fff').css('color', '#000');
        document.querySelector('.jittery-button').style = "background-color: #007bff;";
        darkModeEnabled = true;
      } else {
        document.body.style = "background-color: none";
        $('html').removeClass('dark-mode');
        $('#example_wrapper').removeClass('table-dark');
        $('.dataTables_length label, .dataTables_filter label, .dataTables_filter input').css('color', '');
        $('.dataTables_length select, .dataTables_filter input').css('background-color', '#fff').css('color', '');
        darkModeEnabled = false;
      }
    });
    
    $('#example').DataTable({
      "lengthMenu": [[15, 30, 60, -1], [15, 35, 60, "Mostrar todo"]],
      "language": {
        "lengthMenu": "Mostrar _MENU_ entradas",
        "info": "Mostrando _START_ a _END_ de _TOTAL_ entradas",
        "paginate": {
          "previous": "Anterior",
          "next": "Siguiente"
        },
        "aria": {
          "paginate": {
            "previous": "Anterior",
            "next": "Siguiente"
          }
        },
        "search": "Buscar:",
        "searchPlaceholder": "Pablo López"
      }
    });
  });

  /*Estilo del boton Jittery*/
  const button = document.querySelector('.jittery-button');

button.addEventListener('click', () => {
  button.classList.add('clicked');
  setTimeout(() => {
    button.classList.remove('clicked');
  }, 500);
});
