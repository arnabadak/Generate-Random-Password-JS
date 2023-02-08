
		/* Function to generate password */
		function generatePassword(Id, PassLength) {
			var id = document.getElementById(Id);
			var pass = '';
			var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
				'abcdefghijklmnopqrstuvwxyz0123456789@#$';

			for (let i = 1; i <= PassLength; i++) {
				var char = Math.floor(Math.random()
					* str.length + 1);

				pass += str.charAt(char)
			}
			id.value = pass;
		}
