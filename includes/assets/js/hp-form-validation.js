jQuery(document).ready(function($) {

	jQuery("#commentform #submit").click(function (e) {

		var valid = true;

		// Check comment filed is emply or not
		if( jQuery("#commentform .comment-form-comment #comment").val() == "" ){
			jQuery("#commentform .comment-form-comment #comment").css('border-color', '#FF0000');
			jQuery("#commentsection").remove();
			jQuery("#commentform .comment-form-comment").append('<span id="commentsection">Enter your Comment</span>');
			valid = false;
		}
		else
		{
			jQuery("#commentform .comment-form-comment #comment").css('border-color', '#000');
			jQuery("#commentsection").remove();
		}
		
		// Check name filed is emply or not
		if( jQuery("#commentform .comment-form-author #author").val() == "" ){
			jQuery("#commentform .comment-form-author #author").css('border-color', '#FF0000');
			jQuery("#authorsection").remove();
			jQuery("#commentform .comment-form-author").append('<span id="authorsection">Enter your Name</span>');
			valid = false;
		}
		else
		{
			jQuery("#commentform .comment-form-author #author").css('border-color', '#000');
			jQuery("#authorsection").remove();
		}
		
		// Check email filed is emply or not
		if( jQuery("#commentform .comment-form-email #email").val() == "" || 
			! validateEmail( jQuery("#commentform .comment-form-email #email").val() ) ){
			jQuery("#commentform .comment-form-email #email").css('border-color', '#FF0000');
			jQuery("#emailsection").remove();
			jQuery("#commentform .comment-form-email").append('<span id="emailsection">Enter your Email</span>');
			valid = false;
		}
		else
		{
			jQuery("#commentform .comment-form-email #email").css('border-color', '#000');
			jQuery("#emailsection").remove();
		}

		if( valid == true ){
			return true;
		}else{
			return false;
		}
		
	});

	jQuery("#commentform .comment-form-comment #comment").keyup(function(event) {
		var valid = true;

		// Check comment filed is emply or not
		if( jQuery("#commentform .comment-form-comment #comment").val() == "" ){
			jQuery("#commentform .comment-form-comment #comment").css('border-color', '#FF0000');
			jQuery("#commentsection").remove();
			jQuery("#commentform .comment-form-comment").append('<span id="commentsection">Enter your Comment</span>');
			valid = false;
		}
		else
		{
			jQuery("#commentform .comment-form-comment #comment").css('border-color', '#000');
			jQuery("#commentsection").remove();
		}

		if( valid == true ){
			return true;
		}else{
			return false;
		}
	});

	jQuery("#commentform .comment-form-author #author").keyup(function(event) {
		var valid = true;

		// Check name filed is emply or not
		if( jQuery(this).val() == "" ){
			jQuery(this).css('border-color', '#FF0000');
			jQuery("#authorsection").remove();
			jQuery("#commentform .comment-form-author").append('<span id="authorsection">Enter your Name</span>');
			valid = false;
		}
		else
		{
			jQuery(this).css('border-color', '#000');
			jQuery("#authorsection").remove();
		}

		if( valid == true ){
			return true;
		}else{
			return false;
		}
	});

	jQuery("#commentform .comment-form-email #email").keyup(function(event) {
		var valid = true;

		// Check email filed is emply or not
		if( jQuery(this).val() == "" || 
			! validateEmail( jQuery(this).val() ) ){
			jQuery(this).css('border-color', '#FF0000');
			jQuery("#emailsection").remove();
			jQuery("#commentform .comment-form-email").append('<span id="emailsection">Enter your Email</span>');
			valid = false;
		}
		else
		{
			jQuery(this).css('border-color', '#000');
			jQuery("#emailsection").remove();
		}

		if( valid == true ){
			return true;
		}else{
			return false;
		}
	});

	function validateEmail(email){
	  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	  return re.test(email);
	}
});