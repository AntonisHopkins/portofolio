$(document).ready(function(){
	var animationSpeed=450;
	var width = 390;
	var pause=1800;
	var currentSlide=1;
	var $slider = $(".slider");
	var $slideContainer = $slider.find(".slides2");
	var $slides = $slideContainer.find(".slide");
	var pass=false;
	var interval;
	var timeOut;
	var img;
	var div;
	var $popup;
	var $close;
	function startSlider(){
		if(pass){
			$slideContainer.css('margin-left',0);
			currentSlide=1;
		}
		interval = setInterval(function(){
			$slideContainer.animate({'margin-left':'-='+width},animationSpeed,function(){
				currentSlide++;
				if(currentSlide===$slides.length){
					timeOut=setTimeout(function(){
						currentSlide=1;
						$slideContainer.css('margin-left',0);
					},700);
				}
			});
			},pause);
		}
	function stopSlider(){
		if(currentSlide===$slides.length){
			clearInterval(interval);
			clearTimeout(timeOut);
			pass=true;
		}else{
			clearInterval(interval);
			clearTimeout(timeOut);
			pass=false;
		}
	}
	function openSlide(){
		div = "<div class='popup'></div>";
		img = $(this).attr("src");
		img = "<img src='"+ img +"' id='popup_img'></img>";
		var closeImg = "<img src='./imgs/close.png' id='close'></img>";
		$(".wrapper").prepend(div);
		$popup= $(".popup");
		$popup.append(img);
		$popup.append(closeImg);
		$close= $popup.find("#close");
		$close.css('cursor','pointer');
		$close.on('click',closeImage);
	}
	function closeImage(){
		$close.remove();
		$("#popup_img").animate({width: "0%", height: "0%"},100);
		setTimeout(function()
		{
			$popup.remove();
		},130);
	}
	$slides.on('mouseenter',stopSlider).on('mouseleave',startSlider);
	$slides.on('click',openSlide);
	$slides.css('cursor','pointer');
	startSlider();
});