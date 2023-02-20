// create a module from a directory of files

var fs = require("fs");
const path = require("path");

var module = process.argv[2];

if (!module) {
	console.log("Usage: node make-module.js <module>");
	process.exit(1);
}

const files = [
	{
		file: ".controller.js",
		examplePath: "examples/controller.txt",
	},
	{
		file: ".model.js",
		examplePath: "examples/model.txt",
	},
	{
		file: ".route.js",
		examplePath: "examples/route.txt",
	},
	{
		file: ".service.js",
		examplePath: "examples/service.txt",
	},
	{
		file: ".validator.js",
		examplePath: "examples/validator.txt",
	},
];

files.forEach((file) => {
	const folderPath = `app/modules/${module}`;
	const filePath = path.join(folderPath, `${module}${file.file}`);
	let content;

	// read the example file
	const examplePath = path.join(__dirname, file.examplePath);

	content = fs.readFileSync(examplePath, "utf-8").toString();

	content = content.replace(
		/Example/g,
		module.charAt(0).toUpperCase() + module.slice(1)
	);
	content = content.replace(/example/g, module);

	if (!fs.existsSync(folderPath)) {
		fs.mkdirSync(folderPath);
	}

	fs.writeFile(filePath, content, (err) => {
		if (err) throw err;
	});

	console.log(`File ${filePath} created successfully!`);
});
