$(document).ready(function(){

	console.log("starting AJAX");

//DIGG CALL
  $.ajax({
    url: 'https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json',
    success: function(result){
    console.log('digg it');
      for (i = 0; i < result.data.feed.length; i++) {
        //post variables//
        var postTitle = result.data.feed[i].content.title;
        var postScore = result.data.feed[i].digg_score;
        var postThumbnail = result.data.feed[i].content.media.images[1].url;
        var postUrl = result.data.feed[i].content.url;
        var postSubreddit = result.data.feed[i].content.kicker;


        //HTML Template//
        var newArticle = '<article class="article hidden digg-article">';
        newArticle += '<section class="featuredImage">';
        newArticle += '<img src="' + postThumbnail + '" alt="" />';
        newArticle += '</section>';
        newArticle += '<section class="articleContent">';
        newArticle += '<a href="' + postUrl +'"><h3>' + postTitle + '</h3></a>';
        newArticle += '<h6>'+ postSubreddit +'</h6>';
        newArticle += '</section>';
        newArticle += '<section class="impressions">';
        newArticle += postScore;
        newArticle += '</section>';
        newArticle += '<div class="clearfix"></div>';
        newArticle += '</article>'

        // Add new articles to the site
        $('#main').append(newArticle);
      }
      articleClick();
    },

    error: function() {
      $('#main').text('An error occurred');
    }
  }); //end digg call


//Reddit Call
	$.ajax({
		url: 'https://www.reddit.com/top.json',
		success: function(result){
			console.log(result.data.children[0].data.title);
      $('#main').html('');
			for (i = 0; i < result.data.children.length; i++) {
       
        //post variables//
   			var postTitle = result.data.children[i].data.title;
   			var postScore = result.data.children[i].data.score;
   			var postThumbnail = result.data.children[i].data.thumbnail;
        var postUrl = "https://www.reddit.com" + result.data.children[i].data.permalink;
        var postSubreddit = result.data.children[i].data.subreddit_name_prefixed;


        //HTML Template//
        var newArticle = '<article class="article reddit-article">';
        newArticle += '<section class="featuredImage">';
        newArticle += '<img src="' + postThumbnail + '" alt="" />';
        newArticle += '</section>';
        newArticle += '<section class="articleContent">';
        newArticle += '<a href="' + postUrl +'"><h3>' + postTitle + '</h3></a>';
        newArticle += '<h6>'+ postSubreddit +'</h6>';
        newArticle += '</section>';
        newArticle += '<section class="impressions">';
        newArticle += postScore;
        newArticle += '</section>';
        newArticle += '<div class="clearfix"></div>';
        newArticle += '</article>'

        //Add new articles to the site
   			$('#main').append(newArticle);
   		}
      articleClick();
		},
    
    error: function() {
      $('#main').text('An error occurred');
    }

	});//end reddit ajax call



function articleClick (){
    $("article").click(function() {
        event.preventDefault();
        var popUpTitle = $(this).children('.articleContent').children('a').text();
        var popUpLink = $(this).children('.articleContent').children('a').attr('href');
        var popUpImage = "<img src='" + $(this).children('.featuredImage').children('img').attr('src') + "' />";
        $('#popUp').removeClass('hidden');
        $('#popUp h1').html(popUpTitle);
        $('#popUp p').html(popUpImage);
        $('#popUp a').attr("href", popUpLink);
        $('#popUp .container').show();
        $('#popUp').css('background-image', 'none');
    });
  };



  $('.closePopUp').click(function(){
      event.preventDefault();
      console.log('clicked');
      $('#popUp').addClass('hidden');
    });

  $('#search-digg').click(function(){
    event.preventDefault();
    $('.digg-article').removeClass('hidden');
    $('.reddit-article').addClass('hidden');
  });

  $('#search-reddit').click(function(){
    event.preventDefault();
    $('.digg-article').addClass('hidden');
    $('.reddit-article').removeClass('hidden');
  });

});//docready
