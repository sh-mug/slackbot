/* eslint-env node, jest */

const fs = jest.genMockFromModule('fs');
const Path = require('path');
const {PassThrough} = require('stream');

fs.virtualFiles = {};

fs.readFile = jest.fn((...args) => {
	const [path, callback] = args;
	const fullPath = Path.resolve(process.cwd(), path);

	if (fs.virtualFiles.hasOwnProperty(fullPath)) {
		callback(null, fs.virtualFiles[fullPath]);
		return null;
	} else {
		return fs._readFile(...args);
	}
});

fs.readFileSync = jest.fn((...args) => {
	const [path] = args;
	const fullPath = Path.resolve(process.cwd(), path);

	if (fs.virtualFiles.hasOwnProperty(fullPath)) {
		return fs.virtualFiles[fullPath];
	} else {
		return fs._readFileSync(...args);
	}
});

fs.access = jest.fn((...args) => {
	const [path, , callback] = args;
	const fullPath = Path.resolve(process.cwd(), path);

	if (fs.virtualFiles.hasOwnProperty(fullPath)) {
		callback(null);
		return null;
	} else {
		return fs._access(...args);
	}
});

fs._accessSync = fs.accessSync;
fs.accessSync = jest.fn((...args) => {
	const [path] = args;
	const fullPath = Path.resolve(process.cwd(), path);

	if (fs.virtualFiles.hasOwnProperty(fullPath)) {
		return null;
	} else {
		return fs._accessSync(...args);
	}
});

fs._createReadStream = fs.createReadStream;
fs.createReadStream = jest.fn((...args) => {
	const [path, options] = args;
	const fullPath = Path.resolve(process.cwd(), path);

	if (fs.virtualFiles.hasOwnProperty(fullPath)) {
		const stream = new PassThrough();
		process.nextTick(() => {
			stream.end(Buffer.from(fs.virtualFiles[fullPath]));
		})
		return stream;
	} else {
		return fs._createReadStream(...args);
	}
});

fs.writeFile = jest.fn((file, data, ...rest) => {
	let options, callback;
	if (rest.length === 1) {
		callback = rest[0];
	}
	else {
		[options, callback] = rest;
	}
	const fullPath = Path.resolve(process.cwd(), file);
	fs.virtualFiles[fullPath] = data;
	callback(null);
});

module.exports = fs;
