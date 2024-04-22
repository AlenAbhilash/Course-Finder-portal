(function ($) {
    'use strict';

    $(document).ready(function(){

        tinymce.init({
            selector: '#mytextarea',
            height: 500,
            plugins: 'autoresize',
            plugins: [
              "advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste emoticons"
            ],
            toolbar:
              "styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image emoticons",
            skin: "small",
            icons: "",
        });


        
        var editor = CodeMirror.fromTextArea(document.getElementById('HTMLContainer'), {
            lineNumbers: true,
            theme: "ayu-mirage",
            mode: 'htmlmixed',
        });
        editor.save()
        
    });
}(jQuery));