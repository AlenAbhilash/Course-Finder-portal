(function ($) {
    'use strict';

    $(document).ready(function(){
        $('#myTable').DataTable({
            responsive: true
        });
        $('#myTable_length select').addClass('form-select form-control');
        $('#myTable_filter input').addClass('form-control');
    });
}(jQuery));