#!/usr/local/bin/node
/**
*	@file source/main.js
*	@brief
*	@author Anadian
*	@copyright MIT License
*/
const FileSystem = require('fs');
const log4js = require('log4js');
const CommandLineArgs = require('command-line-args');
const CommandLineCommands = require('command-line-commands');
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
	{name: 'help', alias: 'h', type: Boolean, description: 'Display this help text.'},
	{name: 'version', alias: 'V', type: Number, description: 'Display version number.'},
	{name: 'verbose', alias: 'v', type: Boolean, description: 'Sets verbosity to the given level (0 being silent, 5 being maximum verbosity; defaults to 5 if no argument given).'},
	{name: 'noop', alias: 'n', type: Boolean, description: 'Describe what files would be changed without actually changing them.'},
	{name: 'force', alias: 'f', type: Boolean},
	{name: 'interactive', alias: 'i', type: Boolean},
	{name: 'configfile', alias: 'C', type: String},
	{name: 'prefix', alias: 'P', type: String},
	{name: 'silence', alias:  's', type: Boolean},
	{name: 'stdout', alias: 'o', type: String, description: 'Redirect stdout to the given stream.'},
	{name: 'stderr', alias: 'e', type: String, description: 'Redirect stderr to the given stream.'},
	{name: 'fail', alias: 'F', type: Boolean, description: 'Stop at the first sign of something being wrong.'},
	{name: 'debug', alias: 'd', type: Boolean, description: 'Enable debugging.'}
];