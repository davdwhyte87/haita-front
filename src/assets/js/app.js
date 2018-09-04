$(document).ready(function(){

    $('.hfimg').hide();
    // $('.img-open').click(function(){
    //     $('.hfimg').click();
    // });
});

$(document).on('click', '.img-open', function() { 
    $('.hfimg').click();
    function readURL(input) {

      if (input.files && input.files[0]) {
        var reader = new FileReader();
    
        reader.onload = function(e) {
          $('.p-img').attr('src', e.target.result);
        }
    
        reader.readAsDataURL(input.files[0]);
      }
    }
    
    $(".hfimg").change(function() {
      readURL(this);
    });
 });

 $(document).on('click','.post-img-open',function(){
    $('.hfimg').click();
    function readURL(input) {

        if (input.files && input.files[0]) {
          var reader = new FileReader();
      
          reader.onload = function(e) {
            $('.postc-img').attr('src', e.target.result);
          }
      
          reader.readAsDataURL(input.files[0]);
        }
      }
      
      $(".hfimg").change(function() {
        readURL(this);
      });
 });