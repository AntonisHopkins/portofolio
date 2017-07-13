$(document).ready(function(){
	//classes
	$wrapper= $(".wrapper");
	$center= $wrapper.find('.cntr');
	$leftbar= $wrapper.find('.leftsidebar');
	$list=$wrapper.find('.list');
	$home_center = $wrapper.find('.home_center');
	//id's
	$home = $list.find('#home');
	$work = $list.find('#work');
	//variables
	var leftbar_data="<h3>Medical Office: <a href='https://github.com/AntonisHopkins/Medical_Office' target='_blank'>GITHUB</a></h3>"
			+"<div class='slider'>"
			+"	<ul class='slides'>"
			+"		<li><img src='./imgs/medical_office/index.jpg' title='Index' class='slide' /></li>"
			+"		<li><img src='./imgs/medical_office/adminpage.jpg' title='adminpage' class='slide' /></li>"
			+"		<li><img src='./imgs/medical_office/adminpage2.jpg' title='adminpage2' class='slide' /></li>"
			+"		<li><img src='./imgs/medical_office/adminpage3.jpg' title='adminpage3' class='slide' /></li>"
			+"		<li><img src='./imgs/medical_office/check_schedule.jpg' title='check_schedule' class='slide' /></li>"
			+"	</ul>"
			+"	<h3>Binary Search Tree:<a href='' target='_blank'>NOT UPLOADED YET</a></h3>"
			+"	<ul class='slides3'>"
			+"	<li><img src='./imgs/binary search tree/page_0.jpg' title='page_0' class='slide' /></li>"
			+"		<li><img src='./imgs/binary search tree/page_1.jpg' title='page_1' class='slide' /></li>"
			+"		<li><img src='./imgs/binary search tree/page_2.jpg' title='page_2' class='slide' /></li>"
			+"		<li><img src='./imgs/binary search tree/page_3.jpg' title='page_3' class='slide' /></li>"
			+"	</ul>"
			+"	<h3>Cookbook: <a href='https://github.com/AntonisHopkins/Cookbook' target='_blank'>GITHUB</a></h3>"
			+"	<ul class='slides2'>"
			+"		<li><img src='./imgs/cookbook/cook-index.jpg' title='Index' class='slide' /></li>"
			+"		<li><img src='./imgs/cookbook/login.jpg' title='login' class='slide' /></li>"
			+"		<li><img src='./imgs/cookbook/cook-search.jpg' title='cook-search' class='slide' /></li>"
			+"		<li><img src='./imgs/cookbook/cook-recipe.jpg' title='recipe' class='slide' /></li>"
			+"		<li><img src='./imgs/cookbook/adminpage.jpg' title='adminpage' class='slide' /></li>"
			+"	</ul>"
			+"</div>"
	var center_data= "<img src='./imgs/me.jpg' alt='img' title='Me' id='me'/> "
			+"<h1>Hello Again!</h1><p>Hello again,those are some of my projects(not all)!<br/>"
			+"<u><b>Medical Office technologies</b></u>: PHP, JAVASCRIPT/JQUERY, AJAX, MYSQL, HTML,CSS.<br/>"
			+"<b>Summary</b>:As an admin.You can add/remove patients.Add/update/delete appointments.Check schedule of specific day.Add prescription to a patient.<br/>"
			+"<u><b>Binary Search Tree technologies</b></u>: JAVASCRIPT/JQUERY, HTML,CSS.<br/>"
			+ "<b>Summary</b>:You can see a visualization of binary tree insertion,deletion and search.Change the distance between outter and inner nodes seperately."
			+"Print the steps of each node in deletion/search/insertion.<br/>"
			+"<u><b>Cookbook technologies</b></u>:In this project I did everything but css and html. I used PHP, MYSQL and some JAVASCRIPT/JQUERY.<br/>"
			+"<b>Summary</b>:This is my first website project.You can insert/delete ingredients and recipes.Sign in/Login.<br/>"
			+"<u><b>... This portfolio</b></u>:For this site I used, CSS , HTML, JAVASCRIPT/JQUERY.</p>";
	//functions
	function work_clicked(event){
		if($home_center.is(':visible')){
			$home_center.toggle(400);
			timeOut(600,function(){$center.append(center_data).toggle().fadeIn(400)});
			timeOut(900,function(){$leftbar.append(leftbar_data).toggle().fadeIn(400);
				$.getScript("./scripts/slider.js");
				$.getScript("./scripts/slider2.js");
				$.getScript("./scripts/slider3.js")});
		}
	}
	function home_clicked(){
		$center.contents(':not("div")').toggle(400);
		timeOut(300,function(){$center.contents(':not("div")').remove()});
		timeOut(600,function(){$center.toggle().fadeIn(400);
			$home_center.fadeIn(300)});
		timeOut(800,function(){$leftbar.contents(':not(".leftsidebar")').toggle(400)});
		timeOut(1200,function(){$leftbar.contents(':not(".leftsidebar")').remove();
			$leftbar.toggle();
			timeOut(200,function(){$leftbar.fadeIn(400)});
		});
	}
	function timeOut(time,func){
		setTimeout(function(){
			func();
		},time);
	}
	function addPointer($object){
		$object.each(function(){
			$(this).find('li').each(function(){$(this).addClass('pointer')
				$(this).on('click',function(){
					$(this).addClass('clicked');
					$(this).removeClass('unclicked');
					$(this).siblings().addClass('unclicked');
				});
			});
		});
	}
	$work.on('click',work_clicked);
	$home.on('click',home_clicked);
	addPointer($list);
});