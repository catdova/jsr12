/*
  Please add all Javascript code to this file.




*/
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

          function popUp(){
            event.preventDefault();
            $('#popUp').removeClass('hidden');

          var popContent = '<div id="popUp" class="loader hidden">';
          popContent += '<a href="'+ +'" class="closePopUp">X</a>'
          popContent += '<div class="container">';
          popContent += '<h1>' + postTitle + '</h1>';
          popContent += '<a href="'+ postUrl +'" class="popUpAction" target="_blank">Read more from source</a>'
          popContent += '</div>';
          }

          $( "a" ).click(function() {
            popUp;
          });

   				}

		}

	});


});
