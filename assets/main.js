var blocks = {
	"black":   {"type": "color", "value": "\\[\\e[30m\\]"},
	"red":     {"type": "color", "value": "\\[\\e[31m\\]"},
	"green":   {"type": "color", "value": "\\[\\e[32m\\]"},
	"yellow":  {"type": "color", "value": "\\[\\e[33m\\]"},
	"blue":    {"type": "color", "value": "\\[\\e[34m\\]"},
	"magenta": {"type": "color", "value": "\\[\\e[35m\\]"},
	"cyan":    {"type": "color", "value": "\\[\\e[36m\\]"},
	"reset":   {"type": "color", "value": "\\[\\e[39m\\]"},

	"username": {"type": "escape", "value": "\\u"},
	"hostname": {"type": "escape", "value": "\\h"},
	"path":     {"type": "escape", "value": "\\W"}
}

var current_color = "white";

function write_block(block_name, colored=false) {
	var PS1 = document.getElementById('PS1-editor');

	// Add the block
	var block = document.createElement('span');
	block.classList.add("block");
	block.id = block_name;
	block.contentEditable = "false";
	block.innerHTML = block_name;
	PS1.appendChild(block);

	if (blocks[block_name].type == "color") { current_color = block_name; }

	// Create a new editable span after
	var text_after = document.createElement('span');
	text_after.style.color = current_color;
	text_after.contentEditable = "true";
	text_after.spellCheck = "false";
	PS1.appendChild(text_after);
}
