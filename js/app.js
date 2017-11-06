$(document).ready(function(){

	console.log("starting AJAX");
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
          var newArticle = '<article class="article">';
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


   				$('#main').append(newArticle);

          


   			}
      $( "article").click(function() {
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

		}

	});

  $('.closePopUp').click(function(){
    event.preventDefault();
    console.log('clicked');
    $('#popUp').addClass('hidden');
  });


});
