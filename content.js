genComments('#body-text');
console.log("TESTING");
function genComments(afterThis)
{
	$(afterThis).after('<div class="commentSection" id="commentAndReplies-dictum"></div>');

	createComment(comments[0], 'dictum');
}

function collapseComment(id)
{
	if ($('#collapse-' + id).text == "[–]")
	{
		$('#collapse-' + id).text = "[+]";
	}
	else
	{
		$('#collapse-' + id).text === "[&ndash;]";
	}

	$('#commentAndReplies-'+id).toggle();
}

function createComment(obj, id)
{
	//Add new Frame for comment
	$('#commentAndReplies-' + id).append('<div class="reply" id="commentFrame-'+obj.id+'"></div>');
	//Add collapse button
	$('#commentFrame-'+obj.id).append('<p href="javascript:void(0);" class="collapse" id="collapse-'+obj.id+'">[&ndash;]</p>');
	//Add div for comment
	$('#commentFrame-'+obj.id).append('<div class="comment" id="comment-'+obj.id+'"></div>');
	//Add Top bar
	$('#comment-'+obj.id).append('<div class="topbar" id="topbar-'+obj.id+'"<b><span id="handle-'+obj.id+'">'+obj.handle+'</span></b><i><small> &#8226 <span id="points-' + obj.id + '">'+ obj.points +'</span> points &#183 <span id="time-' + obj.time + '">'+ obj.time +'</span> hours ago</small></i><br></div>');
	//Add Comment body
	$('#comment-'+obj.id).append('<div id="commentAndReplies-' + obj.id + '"><div class="commentBody" id="commentBody-'+obj.id+'">'+obj.comment+'</div></div>');
	//Add Lower Bar
	$('#commentAndReplies-'+obj.id).append('<div id="bottomBar-' + obj.id + '"><i><small>reply</small></i></div>');
	//Add collapse button functionality
	$('#collapse-'+obj.id).on("click", function(){collapseComment(obj.id);});
	//Add divs for child if child exists
	var length = obj.reply.length;
	for (var i = 0; i < length; i++)
	{
		if (!jQuery.isEmptyObject(obj.reply[i]))
		{
			createComment(obj.reply[i], obj.id);
		}
	}
}

















// .
