 $('#dengio').timepicker({
     uiLibrary: 'bootstrap4',
     iconsLibrary: 'fontawesome',
 });


 $('#tugio').timepicker({
     uiLibrary: 'bootstrap4',
     iconsLibrary: 'fontawesome',
 });

  $(document).ready(function() {
                $("#myInput").on("keyup", function() {
                    var value = $(this).val().toLowerCase();
                    $("#myTable tr").filter(function() {
                        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                    });
                });
            });