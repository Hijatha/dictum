// jQuery(document).ready(function(){
	// $('#body-text').after(genComment(comments[0]));
function genBox()
{
	document.write(genComment(comments[0]));
}
// });

function genComment(obj)
{
	var html = "";
	html = createBox(obj, 'comment_frame', html, 0);
	var length = obj.reply.length;
	for (var i = 0; i < length; i++)
	{
		if (!jQuery.isEmptyObject(obj.reply[i]))
		{
			html = genReplies(obj.reply[i], html, obj.id);
		}
	}
	html = html + '</div>';

	return html;
}

function genReplies(obj, html, parent_id)
{

	html = createBox(obj, 'comment_reply_frame', html, parent_id);
	var length = obj.reply.length;
	for (var i = 0; i < length; i++)
	{
		if (!jQuery.isEmptyObject(obj.reply[i]))
		{
			html = genReplies(obj.reply[i], html, obj.id);
		}
		html = html + '</div></div>';
	}

	return html;
}

function createBox(obj, type, html, parent_id)
{
	html = html +
	'<div class="' + type + ' replyof-' + parent_id + '">' +
		'<p href="javascript:void(0);" class="collapse" id="collapse-' + obj.id + '" onclick="collapseComment(' + obj.id + ')">[&ndash;]</p>' +
	'<div class="comment"><b>' + obj.handle + '</b><i><small> &#8226 ' +
		obj.points + ' points &#183 ' +
		obj.time + ' hours ago</small></i><br><div id="comment-' + obj.id + '">' +
		obj.comment + '</div>';
	return html;
}

function collapseComment(id)
{
	console.log('&ndash;');
	if ($('#collapse-' + id).text == "[–]")
	{
		$('#collapse-' + id).text = "[+]";
	}
	else
	{
		$('#collapse-' + id).text === "[&ndash;]";
	}

	$('#comment-' + id).toggle();
	$('.replyof-' + id).toggle();
}
