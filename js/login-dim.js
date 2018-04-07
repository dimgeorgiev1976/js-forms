if (email.lenght === 0 ) {
		$("#emptyEmail").addClass("show-error");
		console.log('Email is Empty');
		valid = false;
			} else if ( pattern.test(email) && password.lenght === 0) {
						// Show errors
		$("#emptyPassword").addClass("show-error");
		console.log('Password is Empty ');
		valid = false;
		} else if ( password !== validPassword) {
				$("#emptyPassword").addClass('show-error');
				console.log(' Password is INVALID');
	     valid = false;
		} else {
		console.log('Email & Password are Valid & Not Empty ');

		$(".show-error").removeClass('show-error'); 
						//Check valid Email and password

			if ( email !== validEmail || password !== validPassword ) {
				$('.wrongEmailPass').addClass('show-error');
						console.log ('Email & Password are INVALID or Empty');
						valid = false;
					} else {
						// Hide errors
		$(".wrongEmailPass").removeClass("show-error");
		console.log('Email & Password are Valid  ');
		valid = false;

		if ( email.lenght === 0  || password !== validPassword ) {
				$('.wrongEmailPass"').addClass('show-error');
						console.log ('Email & Password are INVALID or Empty');
						valid = false;
					} else if ( email.lenght === 0  || password.lenght === 0 ) {
				$('.wrongEmailPass"').addClass('show-error');
				console.log ('password !== validPassword Empty');
		valid = false;
				} else { 
		$(".wrongEmailPass").removeClass("show-error");
		console.log('Email & Password are VALID ');
		valid = false;



 if ( !pattern.test(email) || password !== validPassword) {
					
		$("#errorEmail").addClass("show-error");
		console.log('Email is INVALID');
		valid = false;
		
		} else {
		console.log('Email & Password are Valid & Not Empty ');

		$(".show-error").removeClass('show-error'); 

}
}


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
