(function ($) {
    'use strict';

    $(document).ready(function(){


        //------------------------------------------------------------------------------------------------------------------
        // template sidebar
        //------------------------------------------------------------------------------------------------------------------
        $('.sidebar-collapse, .sidebar-collapse-mini').on('click', function(e){
            e.preventDefault();
            e.stopPropagation();
            if($(window).width() > 1199) {
                $('.fixed-sidebar').toggleClass('collapsed')
                $('.main-content').toggleClass('expanded')
            } else {
                $('.fixed-sidebar').toggleClass('sidebar-mini')
                $('.fixed-sidebar').removeClass('collapsed')
            }
        });

        //------------------------------------------------------------------------------------------------------------------
        // custom scroll plugin
        //------------------------------------------------------------------------------------------------------------------

        $(".custom-scroll").mCustomScrollbar({
            theme: "minimal-dark",
            mouseWheelPixels: 50,
            scrollInertia: 0
        });


        //------------------------------------------------------------------------------------------------------------------
        // template sidebar dropdown
        //------------------------------------------------------------------------------------------------------------------
        $('.sub-menu').hide(300);
        $('.has-sub').on('click', function() {
            $(this).toggleClass('active')
            $(this).children('.sub-menu').stop().slideToggle();
        });



        //------------------------------------------------------------------------------------------------------------------
        // bootstrap tooltip
        //------------------------------------------------------------------------------------------------------------------
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
        })



        //------------------------------------------------------------------------------------------------------------------
        // bootstrap alert
        //------------------------------------------------------------------------------------------------------------------
        var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
        var alertTrigger = document.getElementById('liveAlertBtn')

        function alert(message, type) {
            var wrapper = document.createElement('div')
            wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

            alertPlaceholder.append(wrapper)
        }
        if (alertTrigger) {
            alertTrigger.addEventListener('click', function () {
                alert('Nice, you triggered this alert message!', 'success')
            })
        };

        //------------------------------------------------------------------------------------------------------------------
        // bootstrap popover
        //------------------------------------------------------------------------------------------------------------------
        var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
        });

        //------------------------------------------------------------------------------------------------------------------
        // Sweet Alerts//
        //------------------------------------------------------------------------------------------------------------------
        $('.btn-demo-sweet-alert').each(function() {

             var $btn = $(this),
                 id = $btn.attr('id');

             if (id == 'undefined') return;

             switch(id) {

                 case 'demo-sweet-alert-basic':

                     $btn.on('click', function() {
                         swal("Here's a message!");
                     });

                     break;

                 case 'demo-sweet-alert-basic-title':

                     $btn.on('click', function() {
                         swal("Here's a message!", "It's pretty, isn't it?");
                     });

                     break;

                 case 'demo-sweet-alert-success':

                     $btn.on('click', function() {
                         swal("Good job!", "You clicked the button!", "success");
                     });

                     break;

                 case 'demo-sweet-alert-confirm':

                     $btn.on('click', function() {
                         swal({
                             title: 'Are you sure?',
                             text: 'You will not be able to recover this imaginary file!',
                             type: 'warning',
                             showCancelButton: true,
                             confirmButtonColor: '#DD6B55',
                             confirmButtonText: 'Yes, delete it!',
                             cancelButtonText: 'No, cancel plx!',
                             closeOnConfirm: false,
                             closeOnCancel: false

                         }, function(isConfirm){
                             if (isConfirm) swal('Deleted!', 'Your imaginary file has been deleted.', 'success');
                             else swal('Cancelled', 'Your imaginary file is safe :)', 'error');
                         });
                     });

                     break;


                 case 'demo-sweet-alert-custom-icon':

                     $btn.on('click', function() {

                         swal({
                             title: 'Sweet!',
                             text: 'Here\'s a custom image.',
                             imageUrl: 'assets/images/sweet-alert-thumbs-up.jpg'
                         });
                     });

                     break;

                 case 'demo-sweet-alert-html':

                     $btn.on('click', function() {

                         swal({
                             title: 'HTML <small>Title</small>!',
                             text: 'A custom <span style="color:#F8BB86">html<span> message.',
                             html: true
                         });

                     });

                     break;

                 case 'demo-sweet-alert-auto-close':

                     $btn.on('click', function() {

                         swal({
                             title: "Auto close alert!",
                             text: "I will close in 2 seconds.",
                             timer: 2000,
                             showConfirmButton: false
                         });
                     });

                     break;

                 case 'demo-sweet-alert-prompt':

                     $btn.on('click', function() {

                         swal({

                             title: 'An input!',
                             text: 'Write something interesting:',
                             type: 'input',
                             showCancelButton: true,
                             closeOnConfirm: false,
                             animation: 'slide-from-top',
                             inputPlaceholder: 'Write something'

                         }, function(inputValue){

                             if (inputValue === false) return false;

                             if (inputValue === '') {
                                 swal.showInputError('You need to write something!');
                                 return false
                             }

                             swal('Nice!', 'You wrote: ' + inputValue, 'success');
                         });
                     });

                     break;

                 case 'demo-sweet-alert-loader':

                     $btn.on('click', function() {
                         swal({

                             title: 'Ajax request example',
                             text: 'Submit to run ajax request',
                             type: 'info',
                             showCancelButton: true,
                             closeOnConfirm: false,
                             showLoaderOnConfirm: true

                         },  function(){
                             setTimeout(function(){
                                 swal('Ajax request finished!');
                             }, 2000);
                         });
                     });

                     break;


             }



        });


        //------------------------------------------------------------------------------------------------------------------
        // bootstrap form validation
        //------------------------------------------------------------------------------------------------------------------
        // Example starter JavaScript for disabling form submissions if there are invalid fields
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
    
            form.classList.add('was-validated')
            }, false)
        })
        
    });
}(jQuery));