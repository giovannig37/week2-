

function main(args) {

	 x = 0;

		while (x <= 100) {
			console.log(x);
			x += 2;
		}

		// Ensure x is at 100
		x = 100;

		while (x >= 0) {
			console.log(x);
			x -= 3;
		}

		for ( i = 1; i <= 100; i += 2) {
			console.log(i);
		}


		for ( i = 0; i <= 100; i++) {

			if (i % 15 == 0) {
				console.log("HelloWorld");
			} else if (i % 5 == 0) {

                



				console.log("World");
			} else if (i % 3 == 0) {
				console.log("Hello");
			} else {
				console.log(i);
			}

		}

	}


main()

