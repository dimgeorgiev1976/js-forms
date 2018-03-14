$(document).ready(function() {

	// Validate comment form
	(function(){
		var formCommentValidation = {
			init: function(){
				this._setUpListeners();
			},

			_setUpListeners: function(){
				$('#sendComment').on('click', formCommentValidation._validateSendForm);
			},

			_validateSendForm: function(event){
				event.preventDefault();
				
				var valid = true,
					userCommentTextarea = $("#userCommennt"),
					userComment = $("#userCommennt").val().trim(),
					errorMessage = $("#errorMessage");
				
				if ( userComment.length === 0 ) {
					errorMessage.addClass('show-error');
					valid = false;
				} else {
					errorMessage.removeClass('show-error');
				}
							// Hide errors
				userCommentTextarea.on('change', function(){
					errorMessage.removeClass('show-error');
				});  
				userCommentTextarea.on( 'keydown ', function(){
					errorMessage.fadeOut(800);
				});  

					if ( valid === true ) {
					console.log('Sending form!');
					//Send comment without whitespace
					userCommentTextarea.val(userComment);
					// $("#CommentForm").submit();
					$('#CommentForm').unbind('submit').submit();
				}
			}
		};

		formCommentValidation.init();
	}());
	});
							// End Validate comment form
