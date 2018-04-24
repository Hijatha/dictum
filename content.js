console.log("TESTING");
jQuery(document).ready(function(){

});

function genComment(commentChain)
{
	var html = "";
	if (level = 0)
	{
		html = html + '<div id="comment"><b>'
	}
	else if (!jQuery.isEmptyObject(commentChain.reply) && level != 0)
	{
		html = html +
		'<div id="reply"><b>' + commentChain.handle + '</b><i><small><b> • </b>' +
		commentChain.points + ' points' + '<b> ∙ </b>' + commentChain.time + '</small></i><br>' +
		commentChain.comment + '<br>' +
	}
}

function genReplies(commentChain, html)
{

}
