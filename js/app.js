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
   				var postTitle = result.data.children[i].data.title;
   				var postScore = result.data.children[i].data.score;
   				var postThumbnail = result.data.children[i].data.thumbnail;
   				console.log(postTitle);
   				console.log(postScore);
   				console.log(postThumbnail);

   				//$('h3').append(postTitle); this doesnt work -- adds all titles to every h3

          var newArticle = '<article class="article">';
          newArticle += '<section class="featuredImage">';
          newArticle += '<img src="' + postThumbnail + '" alt="" />';
          newArticle += '</section>';
          newArticle += '<section class="articleContent">';
          newArticle += '<a href="#"><h3>' + postTitle + '</h3></a>';
          newArticle += '<h6>Lifestyle</h6>';
          newArticle += '</section>';
          newArticle += '<section class="impressions">';
          newArticle += postScore;
          newArticle += '</section>';
          newArticle += '<div class="clearfix"></div>';
          newArticle += '</article>'


   				$('#main').append(newArticle);



   				}

		}

	});


/*<article class="article">
            <section class="featuredImage">
              <img src="images/article_placeholder_1.jpg" alt="" />
            </section>
            <section class="articleContent">
                <a href="#"><h3>Test article title</h3></a>
                <h6>Lifestyle</h6>
            </section>
            <section class="impressions">
              526
            </section>
            <div class="clearfix"></div>
</article> */



});
