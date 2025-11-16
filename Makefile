.PHONY: install run build

install:
	@echo "📦 Installing dependencies..."
	npm install
	@echo "🚀 Starting the application..."
	npm run dev

run:
	@echo "🚀 Starting the application..."
	npm run dev

build:
	@echo "🏗️ Building the application..."
	npm run build