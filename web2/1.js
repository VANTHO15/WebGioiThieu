 $(function(){
   vitricuaedu=$('#khoiedu').offset().top -96;
   vitrisanpham=$('#khoisanpham').offset().top -96;
   vitrilienhe=$('#khoilh').offset().top-96;
   vitricmt=$('#khoicmt').offset().top;
   console.log(vitricuaedu);

 	$(".xuong,.kn").click(function()
 	{
 		$('body,html').animate({scrollTop:vitricuaedu},700);
 		return false;
 	})


 	$(".sp").click(function()
 	{
 		$('body,html').animate({scrollTop:vitrisanpham},700);
 		return false;
 	})

 	$(".cmt").click(function()
 	{
 		$('body,html').animate({scrollTop:vitricmt},700);
 		return false;
 	})

 	$(".lh").click(function()
 	{
 		$('body,html').animate({scrollTop:vitrilienhe},700);
 		return false;
 	})
})  
 