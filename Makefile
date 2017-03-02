.PHONY: notesui image enter ready
notesui:
	docker run -it  --rm --name notesui -v $(PWD):/code -p 4000:4000 -p 5000:5000 \
	--link notesapp notesui ember server --port 4000 --live-reload-port 5000
image:
	docker build -t notesui .
enter:
	docker exec -it notesui bash
ready:
	docker run -it --rm -v $(PWD):/code \
	notesui npm install
init:
	docker run -it  --rm --name notesui-init -v $(PWD):/code notesui bash
