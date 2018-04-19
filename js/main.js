$(document).ready(function() {

	// Validate comment form
	(function(){
	var formCommentValidation = {
	init: function(){
	this._setUpListeners();
	},
		_setUpListeners: function(){
		$('#sendComment').on('click',
		formCommentValidation._validateSendForm);
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
// End Validate comment form
// ...................... Start Login ................................
	(function(){
		var formLoginValidation = {
			isValid: true,
		init: function(){
		// вызов внутренних функций
		this._setUpListeners();
		},
		_setUpListeners: function(){
			$('#submitLoginForm').on('click', formLoginValidation._validateForm );
	var inputs = $('#loginForm').find('input');
		//	loop through each fields
	$.each(inputs, function(index, val){
	var input = $(val);

	// Hide errors
	inputs.on('focus keydown change', function(){
		$(".show-error").removeClass('show-error');
		});	
		});
		},
		_validateForm: function(event){
		event.preventDefault();
		var form = $('#loginForm'),
		email = $('#email').val().trim(),
		password = $("#password").val().trim(),
		validEmail = "mail@mail.com",
		validPassword = "123",
		pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i,
		valid = true;

		if (email.lenght === 0 || !pattern.test(email)) {
		$("#emptyEmail").addClass("show-error");
		console.log('Email is Empty!');
		valid = false;
			} else if ( !pattern.test(email) || email !== validEmail) {
						// Show errors
		$(".wrongEmailPass").addClass("show-error");
						console.log ('Email is not pattern !');
						valid = false;
		} else {
		console.log('Email is Valid !');
		$(".show-error").removeClass('show-error'); 
						//Check Password
			if ( password.lenght === 0 || password !== validPassword) {
				$("#emptyPassword").addClass('show-error');
				console.log('Password is Empty!');
				valid = false;
			 } else if	(password !== validPassword) {
				console.log(' Password is Not Valid ! ');
					$(".wrongEmailPass").addClass('show-error');
									valid = false;
									}
			}
		if ( valid === true ) {
		console.log('Sending form');
		form.submit()
		}
		}
		};
		formLoginValidation.init();
	}());
// ..............................Start Registration Form........................
	(function(){
			var formRegistrationValidation = {
			isValid: true,
			init: function(){
			// вызов внутренних функций
			this._setUpListeners();
			},
			_setUpListeners: function(){
			$('#submitRegistrationForm').on('click',
			 formRegistrationValidation._validateForm );

			var inputs = $("#registrationForm").find('input');
			$.each(inputs, function(index, val){
			var input = $(val);
			// Hide errors
			input.on('focus keydown change', function(){
			$(".show-error").removeClass('show-error');
			});	
			});
			},
			_validateForm: function(event){
			event.preventDefault();
			var form = $('#registrationForm'),
			email = $('#email').val().trim(),
			password = $("#password").val().trim(),
			validEmail = "mail@mail.com",
			pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i,
			valid = true;

			//Check email
			if (email.lenght === 0 || !pattern.test(email)) {
		$("#emptyEmail").addClass("show-error");
		console.log('Email is Empty!');
		valid = false;
			} else if ( !pattern.test(email) || email !== validEmail) {
						// Show errors
		$(".wrongEmailPass").addClass("show-error");
						console.log ('Email is not pattern !');
						valid = false;
		} else {
		console.log('Email is Valid !');
		$(".show-error").removeClass('show-error'); 
						//Check Password
			if ( password.lenght === 0 ) {
			// Show errors
			$("#emptyPassword").addClass('show-error');
			console.log('Password is empty');
			valid = false;
			} 
			}
			if ( valid === true ) {
			console.log("Sending form!");
			form.submit();
			}
			}
			};
			formRegistrationValidation.init();
	}());
	});

