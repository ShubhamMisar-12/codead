   /*welcome_animation*/
  	
  $("#msg2").hide();
  $("#msg3").hide();
  $("#msg4").hide();
  $("#global_msg2").hide();
  $("#global_msg3").hide();
  $("#global_msg4").hide();
  $("#wlc_img2").hide();
  $("#wlc_img3").hide();
  $("#contest_redirect").hide();
  $(".inst1").hide();
  $(".inst2").hide();
  $(".inst3").hide();
  $(".inst4").hide();

$(document).ready(function(){
 	
 	/*-------------------------dashborad animation--------------------------------*/




 	 /*------------------------Welcome Intro--------------------------------------*/
    function fn1(){
 		
	 	$("#msg1").hide();
	 	$("#msg2").show();
	 	window.setTimeout(fn2,1200);
 	
    };
 		
 	function fn2(){

	 	$("#msg2").hide();
	 	$("#msg3").show();
		$("#wlc_img").hide();
	 	$("#wlc_img2").show();
	 	window.setTimeout(fn3,1800);
 

 	};
 	function fn3(){

 		$("#msg3").hide();
 		$("#msg4").show();
 		window.setTimeout(fn4,1800);
 	
 	}
 	function fn4(){

 		$("#msg4").hide();
 		$("#wlc_img2").hide(); 
 	}
 	function f(){
 				
 			window.setTimeout(fn1,200);
 	}

		
	
 	/*tide animation*/
 	
 	function f2(){
		$("#tide").animate({
			height:"200px"
		},22000);
 	};
 	
 		

 	/*global warming messages pop-up*/
 	function fp1(){
 		
	 	$("#global_msg1").hide();
	 	$("#global_msg2").show();
	 	window.setTimeout(fp2,5000);
 	
    };
 		
 	function fp2(){

	 	$("#global_msg2").hide();
	 	$("#global_msg3").show();
	 	window.setTimeout(fp3,5000);
 

 	};
 	function fp3(){

 		$("#global_msg3").hide();
 		$("#global_msg4").show();
 		window.setTimeout(fp4,5000);
 	
 	}
 	function fp4(){

 		$("#global_msg4").hide();
 		$("#theme").hide();
 		$("#contest_redirect").show(); 
 	}
 	function f3(){
 				
 			window.setTimeout(fp1,5000);

 	}
 	/*-----------------Contest_Page--------------*/
 	function fq1(){
 		
 		$("#tree_monkey1").animate({top:"+=300",left:"-=360"},1200);
	 	$(".inst1").hide();
	 	window.setTimeout(1200);
	 	$(".inst2").show();
	 	window.setTimeout(fq2,5000);
 	
    };
 		
 	function fq2(){

 		$("html, body").animate({ scrollTop: $(document).height() }, 100);
   		$("#tree_monkey1").animate({top:"+=300",left:"+=360"},1200);
	 	window.setTimeout(1200);
		$(".inst2").hide();
	 	$(".inst3").show();
	 	window.setTimeout(fq3,5000);
 

 	};
 	function fq3(){

 		$("#tree_monkey1").animate({top:"+=300",left:"-=360"},1200);
 		$(".inst3").hide();
 		window.setTimeout(1200);
 		$(".inst4").show();
 		window.setTimeout(fq4,5000);
 	
 	}
 	function fq4(){

 		$("#tree_monkey1").hide();
 		$(".inst4").hide();
 		 		 
 	}
 	function f4(){
 				
 			
 			$(".inst1").show();
 			window.setTimeout(fq1,5000);
    }



 	$("#msg1").mouseenter(f);
 	$("#theme").mouseenter(f2);
 	$("#theme").mouseenter(f3);
 	$("#trees").mouseenter(f4);
 });
