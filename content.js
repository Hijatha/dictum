// jQuery(document).ready(function(){
	// $('#body-text').after(genComment(comments[0]));
function genBox()
{
	document.write(genComment(comments[0]));
}
// });
function genComment(commentChain)
{
	var html = "";
	html = createBox(commentChain, 'comment', html);

	if (!jQuery.isEmptyObject(commentChain.reply))
	{
		html = genReplies(commentChain.reply, html);
	}
	html = html + '</div>';

	return html;
}

function genReplies(commentChain, html)
{
	html = createBox(commentChain, 'reply', html);

	if (!jQuery.isEmptyObject(commentChain.reply))
	{
		html = genReplies(commentChain.reply, html);
	}
	html = html + '</div></div>';

	return html;
}

function createBox(commentChain, type, html)
{
	html = html + '<div class="' + type + '"><p class="collapse"><a href="javascript:void(0);">[&#8211]</a></p><div><b>' +
	commentChain.handle + '</b><i><small><b> &#8226 </b>' +
	commentChain.points + ' points<b> &#183 </b>' +
	commentChain.time + ' hours ago</small></i><br>' +
	commentChain.comment + '<br>';
	return html;
}
