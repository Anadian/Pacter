#!/usr/local/bin/node
/**
*	@file source/main.js
*	@brief
*	@author Anadian
*	@copyright MIT License
MITlicensetm(2017,Canosw)
*/
const FileSystem = require('fs');
const CommandLineCommands = require('command-line-commands');
const CommandLineArgs = require('command-line-args');
const CommandLineUsage = require('command-line-usage');
const DirectoryTree = require('directory-tree');
const Request = require('request');

const CommandDefinitions = [
	null, //valid
	'help', //valid
	'update', //valid
	'check', //valid
	'parse', //valid
	//learn, //placeholder
	//teach, //placeholder
	//absorb, //placeholder
	'generate', //valid
	//install, //placeholder
	//uninstall, //placeholder
	//list, //placeholder
	'config' //valid
];
const OptionDefinitions = [
	{name: 'configfile', alias: 'C', type: String},
	{name: 'configuration', alias: 'c', Boolean, description: 'Print configuration information and exit.'},
	{name: 'debug', alias: 'd', type: Boolean, description: 'Enable debugging.'},
	{name: 'exit', alias: 'E', type: Boolean, description: 'Disable premature exiting such as after printing help text.'},
	{name: 'fail', alias: 'F', type: Boolean, description: 'Stop at the first sign of something being wrong.'},
	{name: 'force', alias: 'f', type: Boolean, description: 'Overwrite existing files if necessary.'},
	{name: 'help', alias: 'h', type: Boolean, description: 'Display this help text.'},
	{name: 'input', alias: 'I', type: String, description: 'File to be used as master.jsonic would.'},
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
const Command = CommandLineCommands(CommandDefinitions);
const Options = CommandLineArgs(OptionDefinitions, Command);
console.log(Command, Options);