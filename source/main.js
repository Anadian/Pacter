#!/usr/local/bin/node
/**
*	@file source/main.js
*	@brief
*	@author Anadian
*	@copyright MIT License
MITlicensetm(Canosw,2017)
*/
const FileSystem = require('fs');
const CommandLineArgs = require('command-line-args');
const CommandLineCommands = require('command-line-commands');
const CommandLineUsage = require('command-line-usage');
const DirectoryTree = require('directory-tree');
const Request = require('request');

const ValidCommands = [
	null,
	help,
	update,
	check,
	learn,
	teach,
	absorb,
	generate,
	install,
	uninstall,
	list,
	config
];
const OptionDefinitions = [
	{name: 'configfile', alias: 'C', type: String},
	{name: 'configuration', alias: 'c', Boolean, description: 'Print configuration information and exit.'},
	{name: 'debug', alias: 'd', type: Boolean, description: 'Enable debugging.'},
	{name: 'exit', alias: 'E', type: Boolean, description: 'Disable premature exiting such as after printing help text.'},
	{name: 'fail', alias: 'F', type: Boolean, description: 'Stop at the first sign of something being wrong.'},
	{name: 'force', alias: 'f', type: Boolean, description: 'Overwrite existing files if necessary.'},
	{name: 'help', alias: 'h', type: Boolean, description: 'Display this help text.'},
	{name: 'input', alias: 'I', type: String},
	{name: 'log', alias: 'l', type: String, description: 'Log to the given file.'},
	{name: 'noop', alias: 'n', type: Boolean, description: 'Describe what actions would be done (including files that would be changed) without actually doing (changing) them.'},
	{name: 'pipe', alias: 'p', type: String, description: 'Pipe output to the given command.'},
	{name: 'prefix', alias: 'P', type: String},
	{name: 'quiet', alias: 'q', type: Boolean, description: 'Only output errors.'},
	{name: 'repl', alias: 'r', type: Boolean, description: 'Interactive REPL shell.'},
	{name: 'silent', alias:  's', type: Boolean, description: 'Silence all logging.'},
	{name: 'source', alias: 'S', type: String, description: 'Source commands from the given file.'},
	{name: 'stderr', alias: 'e', type: String, description: 'Redirect stderr to the given stream.'},
	{name: 'stdin', alias: 'i', type: Boolean, description: 'Read input from stdin.'},
	{name: 'stdout', alias: 'o', type: String, description: 'Redirect stdout to the given stream.'},
	{name: 'verbose', alias: 'v', type: Boolean, description: 'Verbose output.'},
	{name: 'version', alias: 'V', type: Number, description: 'Display version number.'}
];
