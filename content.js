genComments('#body-text');
function genComments(afterThis)
{
	$(afterThis).after('<div class="dictum commentSection" id="replies-dictum"></div>');
	var length = comments.length;
	for (var i = 0; i < length; i++)
	{
		createComment(comments[i], 'dictum');
	}
}

function collapseComment(id)
{
	var speed = 250;
	if ($('#commentBody-' + id).css('display') !== 'none')
	{
		$('#collapse-' + id).html("[+]");
		$('#commentBody-'+id).hide(speed);
		$('#bottomBar-'+id).hide(speed);
		$('#replies-'+id).hide(speed);
	}
	else
	{
		$('#collapse-' + id).html("[&minus;]");
		$('#commentBody-'+id).show(speed);
		$('#bottomBar-'+id).show(speed);
		$('#replies-'+id).show(speed);
	}
}

function expandReplyBox(id)
{
	var speed = 250;
	console.log('TEST');
	if ($('#replyBox-' + id).css('display') == 'none')
	{
		console.log('TEST1');
		$('#replyBox-' + id).show(speed);
	}
}

function closeReplyBox(id)
{
	var speed = 250;
	if ($('#replyBox-' + id).css('display') != 'none')
	{
		$('#replyBox-' + id).hide(speed);
	}
}

function createComment(obj, id)
{
	//Add new Frame for comment
	$('#replies-' + id).append('<div class="dictum commentFrame" id="commentFrame-'+obj.id+'"></div>');
	//Add collapse button
	$('#commentFrame-'+obj.id).append('<p href="javascript:void(0);" class="dictum button collapse" id="collapse-'+obj.id+'">[&minus;]</p>');
	//Add voting buttons div
	$('#commentFrame-'+obj.id).append('<div class="vote"><img src="res/upvote.png"><img src="res/downvote.png"></div>');
	//Add div for comment
	$('#commentFrame-'+obj.id).append('<div class="dictum commentAndReplies" id="commentAndReplies-'+obj.id+'"></div>');
	//Add Comment div
	$('#commentAndReplies-'+obj.id).append('<div class="dictum comment" id="comment-'+obj.id+'"></div>');
	//Add Replies div
	$('#commentAndReplies-'+obj.id).append('<div class="dictum replies" id = "replies-'+obj.id+'"></div>');
	//Add Top bar
	$('#comment-'+obj.id).append('<div class="dictum topbar" id="topbar-'+obj.id+'"<b><span id="handle-'+obj.id+'">'+obj.handle+'</span></b><i><small> &bull; <span id="points-'+obj.id +'">'+obj.points+'</span> points &middot; <span id="time-' + obj.time + '">'+ obj.time +'</span> hours ago</small></i><br></div>');
	//Add Comment body
	$('#comment-'+obj.id).append('<div class="dictum commentBody" id="commentBody-' + obj.id + '"><div class="dictum commentBody" id="commentBody-'+obj.id+'">'+obj.comment+'</div></div>');
	//Add Lower Bar
	$('#comment-'+obj.id).append('<div class="bottomBar" id="bottomBar-'+obj.id+'"><span class="button" id="replyButton-'+obj.id+'">reply</span></div>');
	//Add Reply Box
	$('#comment-'+obj.id).append('<div class replyBox" id="replyBox-'+obj.id+'" style="display:none;"><textarea rows="4" class="replyTextArea" id="textarea-'+obj.id+'">TEST</textarea><button class="dictum saveButton" id="saveButton-'+obj.id+'">SAVE</button><button class="dictum cancelButton"id="cancelButton-'+obj.id+'">CANCEL</button></div>');
	//Add button functionality
	$('#collapse-'+obj.id).on("click", function(){collapseComment(obj.id);});
	$('#replyButton-'+obj.id).on("click", function(){expandReplyBox(obj.id);});
	$('#cancelButton-'+obj.id).on("click", function(){closeReplyBox(obj.id);});
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
