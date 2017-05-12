
jQuery(document).ready(function ($) {
   
            
            var i;
            i=0;
            
            var timer1;
            timer1 = null;
            
            var timer2;
            timer2 = null;
            
            var timer3;
            timer3 = null;
            
            var clipDuration = 15000;
            var slidesTransition = 500;           
            
            
            var names = ['Gracie Lopez','Nick Powers','Adja Mgs','Roy Gluckman','Minnie-Mouse Bonita','Coranetta Woods','Dj Green'];
        	var videos = ['http://media.chosen.fm/chosen-videos/73/2a/685d3703a0b1410dc3bf2280eb5a15ec/Cover_Freestyle_f2e242a63827051e_d7ff1ef0f1aa11be_record_1.mov',
    	                  'http://media.chosen.fm/chosen-videos/4e/14/a428bc20ca44f5d446cee54837b4fd6f/Cover_Upload_244143829010ed34_36bb57d2b5eed048_asset.mov',
    	                  'http://media.chosen.fm/chosen-videos/a7/09/d9ff90f4000eacd3a6c9cb27f78994cf/Cover_Upload_dacb283d1182b49a_f03528f6f02eccd7_asset.mov',
    	                  'http://media.chosen.fm/chosen-videos/58/26/dccb1c3a558c50d389c24d69a9856730/Original_Upload_c76e4b2fa54f8506_719a5c0dc14c2eb9_asset.mov',
    	                  'http://media.chosen.fm/chosen-videos/0d/2d/c21f4ce780c5c9d774f79841b81fdc6d/Lipsync_28538c394c36e4d5_ea8ff5ad60562a93_record_1.mov',
    	                  'http://media.chosen.fm/chosen-videos/ab/2e/211cbc6c7d410d6372ec40eda30e8baa/Cover_Freestyle_f1b77376e6da9ea8_126410f9331886e8_record_1.mov',
    	                  'http://media.chosen.fm/chosen-videos/46/2c/26fd45817c0a0bb1e951d17fa7df947c/Cover_Freestyle_a9dd7e3c6ee87a48_cb35b729caf61eb5_record_1.mov'];
            
            clipLoad (videos[i], names[i], i);
            
            clipsNum = 6;
            
            function clipLoad(videoCurrent, nameCurrent, currentNum){
            	$('.loader_container').removeClass('hide');	
            	
            	
        		
            	$(".card-performance-timer").html('');
            	$('.card-performance-video').html('<video id="card-video-1" class="card-video" width="100%" height="100%"><source src="' + videoCurrent +'"></video>');
            	$('.card-video')[0].currentTime=0;
            	$('.screen-title').html(nameCurrent);
            	
            	var vid = document.getElementById("card-video-1");
            	
            	vid.addEventListener('loadeddata', function() {
            		$('.loader_container').addClass('hide');
    	        	$(".card-performance-timer").html("<img src='img/timer.gif?timestamp=" + new Date().getTime() + "' />");
                	$('.card-video').trigger('play');
            	}, false);
            	
            	clearTimeout(timer2);
            	timer2 = setTimeout(function(){
            		forward();
            	}, clipDuration);
               
               
            };
            
            previous = function(){            	
            	
            	$('.card-video source').attr('src','');
            	$('.card-video').trigger('pause');
            	$('.game-card').removeClass('animated').removeClass('slideOutRight').removeClass('slideInRight').removeClass('slideOutLeft').removeClass('slideOutLeft').removeClass('slideInLeft').addClass('animated').addClass('slideOutRight');
            	timer = null;
            	clearTimeout(timer);
            	timer = setTimeout(function() { 
            		$('.game-card').removeClass('animated').removeClass('slideOutLeft').removeClass('slideInRight').removeClass('slideOutLeft').removeClass('slideOutRight').addClass('animated').addClass('slideInLeft'); 
            		if (i>0){
            			i--;
            		} else {
            			i=clipsNum;
            		}
            		clipLoad (videos[i], names[i], i);
            	}, slidesTransition);  
	
            };
            
            forward = function(){            	
            	
            	$('.card-video source').attr('src','');
            	$('.card-video').trigger('pause');
            	$('.game-card').removeClass('animated').removeClass('slideOutLeft').removeClass('slideInLeft').removeClass('slideOutRight').removeClass('slideInRight').addClass('animated').addClass('slideOutLeft');
            	timer = null;
            	clearTimeout(timer);
            	timer = setTimeout(function() { 
            		$('.game-card').removeClass('animated').removeClass('slideOutLeft').removeClass('slideInLeft').removeClass('slideOutRight').removeClass('slideInRight').addClass('animated').addClass('slideInRight'); 
            		if (i<clipsNum){
            			i++;
            		} else {
            			i=0;
            		}
                	clipLoad (videos[i], names[i], i);
            	}, slidesTransition);  

            };
            
            $('.jssora21r').click(function(){
            	forward();     	
            });
            
            $('.jssora21l').click(function(){
            	previous();    	
            });
            
            
            
           
            
});

