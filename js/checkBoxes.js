 $(function(){
    var er = false;
  	$('input').on('click',function(event)
  	{
  		if(($('input:checked').length == 6) && ($('#select_all').prop('checked') == false))
  		{
  			$('#select_all').trigger('click');
  		}

  		else if($('#select_all').prop('checked') == true)
  		{
  			$('#select_all').trigger('click');
  		}
  	});

  	$('#form1').submit(function(event) {
  		
  		if(($('input:checked').length ==1) && ($('#language').prop('checked') == true))
  		{
        if(er == false)
  			{
          $('#div2').append($('<p id="err"> Please choose more items! </p>'));
  			  $('#err').css('color','red');
          er = true;
          return false;
        }
  			
  		}

  		else
  		{
        
          $('this').serialize();
  			//$('#form1').attr('action','results.html');
        //$('#form1').attr('action','#results');
  		}
  	}); 
  });
