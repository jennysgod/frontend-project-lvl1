install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/isEven.js

brain-calc:
	node bin/calc.js
	
brain-gcd:
	node bin/gcd.js

brain-progression:
	node bin/progression.js

brain-prime:
	node bin/isPrime.js

publish:
	npm publish --dry-run

lint:
	npx eslint .