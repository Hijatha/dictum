genComments('#body-text');
console.log("TESTING");
function genComments(afterThis)
{
	$(afterThis).after('<div class="commentSection" id="replies-dictum"></div>');

	createComment(comments[0], 'dictum');
}

function collapseComment(id)
{
	var speed = 250;
	console.log("CALLED");
	if ($('#commentBody-' + id).css('display') !== 'none')
	{
		console.log("HIDE");
		$('#collapse-' + id).html("[+]");
		$('#commentBody-'+id).hide(speed);
		$('#bottomBar-'+id).hide(speed);
		$('#replies-'+id).hide(speed);
	}
	else
	{
		console.log("SHOW");
		$('#collapse-' + id).html("[&minus;]");
		$('#commentBody-'+id).show(speed);
		$('#bottomBar-'+id).show(speed);
		$('#replies-'+id).show(speed);
	}
}

function createComment(obj, id)
{
	//Add new Frame for comment
	$('#replies-' + id).append('<div class="commentFrame" id="commentFrame-'+obj.id+'"></div>');
	//Add collapse button
	$('#commentFrame-'+obj.id).append('<p href="javascript:void(0);" class="collapse" id="collapse-'+obj.id+'">[&minus;]</p>');
	//Add div for comment
	$('#commentFrame-'+obj.id).append('<div class="commentAndReplies" id="commentAndReplies-'+obj.id+'"></div>');
	//Add Comment div
	$('#commentAndReplies-'+obj.id).append('<div class="comment" id="comment-'+obj.id+'"></div>');
	//Add Replies div
	$('#commentAndReplies-'+obj.id).append('<div class="replies" id = "replies-'+obj.id+'"></div>');
	//Add Top bar
	$('#comment-'+obj.id).append('<div class="topbar" id="topbar-'+obj.id+'"<b><span id="handle-'+obj.id+'">'+obj.handle+'</span></b><i><small> &bull; <span id="points-'+obj.id +'">'+obj.points+'</span> points &middot; <span id="time-' + obj.time + '">'+ obj.time +'</span> hours ago</small></i><br></div>');
	//Add Comment body
	$('#comment-'+obj.id).append('<div class="commentBody" id="commentBody-' + obj.id + '"><div class="commentBody" id="commentBody-'+obj.id+'">'+obj.comment+'</div></div>');
	//Add Lower Bar
	$('#comment-'+obj.id).append('<div id="bottomBar-'+obj.id+'"><i><small>reply</small></i></div>');
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
