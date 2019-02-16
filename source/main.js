#!/usr/local/bin/node

/**
* @file pacter.js
* @brief The ultimate project metadata and build config tool.
* @author Anadian
* @copyright MITlicensetm(2019,Canosw)
*/

//Dependencies
	//Internal
	const Log = require('./log.js');
	//Standard
	const FileSystem = require('fs');
	//External
	const DirectoryTree = require('directory-tree');
	const Request = require('request');
	const StripJSONComments = require('strip-json-comments');
	const ParseJSON = require('parse-json');

//Constants
const FILENAME = 'pacter.js';
const MODULE_NAME = 'Pacter';
var PROCESS_NAME = '';
if(require.main === module){
	PROCESS_NAME = 'pacter';
} else{
	PROCESS_NAME = process.argv0;
}

//Functions

var Parsers = new Map([
	'pacter-master-jsonic', Pacter_Parser_pacter_master_jsonic,
	'npm-package-json', Pacter_Parser_npm_package_json
]);
var Generators = new Map([
	'npm-package-json', Pacter_Generator_npm_package_json
	'pacter-master-jsonic', Pacter_Generator_pacter_master_jsonic
]);

function Pacter_Parser_Add(parser_key, parser_func);
function Pacter_Parser_Remove(parser_key);
function Pacter_Parser_List();
function Pacter_Parser_Clear();

function Pacter_Generator_Add(generator_key, generator_func);
function Pacter_Generator_Remove(generator_key);
function Pacter_Generator_List();
function Pacter_Generator_Clear();

function Pacter_Parser_pacter_master_jsonic(input_data){
	Log.log(process.argv0,'Pacter','source/main.js','',)
	var _return = [0,null];
	if(filename != null){
		var file_data = FileSystem.readFileSync(filename,'utf8');
		if(file_data != null){
			var json_data = StripJSONComments(file_data);
			if(json_data != null){
				var json_object = ParseJSON(json_data);
				if(json_object != null){
					_return = [1,json_object];
				} else{
					_return = [-104, 'A problem occurred while parsing JSON data.'];
					Log.log(process.argv0,'Pacter','source/main.js','Master_jsonic_Parser','error',(_return[0].toString()+': '+_return[1]),json_data,json_object);
				}
			} else{
				_return = [-103,'A problem occurred when replacing comments from the JSON data.'];
				Log.log(process.argv0,'Pacter','source/main.js','Master_jsonic_Parser','error',(_return[0].toString()+': '+_return[1]),file_data,json_data);
			}
		} else{
			_return = [-102,'A problem occurred while reading file.'];
			Log.log(process.argv0,'Pacter','source/main.js','Master_jsonic_Parser','error',(_return[0].toString()+': '+_return[1]),filename,file_data);
		}
	} else{
		_return = [-101,'Filename not specificied.'];
		Log.log(process.argv0,'Pacter','source/main.js','Master_jsonic_Parser','error',(_return[0].toString()+': '+_return[1]),filename);
	}
	return _return;
}

//Exports and Execution
if(require.main === module){
	//const CommandLineCommands = require('command-line-commands');
	const CommandLineArgs = require('command-line-args');
	const CommandLineUsage = require('command-line-usage');
	/*const CommandDefinitions = [
		null, //valid
		'help', //valid
		'update', //valid
		'check', //valid
		//'parse', //valid
		//learn, //placeholder
		//teach, //placeholder
		//absorb, //placeholder
		//'generate', //valid
		//install, //placeholder
		//uninstall, //placeholder
		//list, //placeholder
		'generate-npm-package-json',
		'config' //valid
	];*/
	const OptionDefinitions = [
		{name: 'configfile', alias: 'C', type: String},
		{name: 'configuration', alias: 'c', Boolean, description: 'Print configuration information and exit.'},
		{name: 'debug', alias: 'd', type: Boolean, description: 'Enable debugging.'},
		{name: 'exit', alias: 'E', type: Boolean, description: 'Disable premature exiting such as after printing help text.'},
		{name: 'fail', alias: 'F', type: Boolean, description: 'Stop at the first sign of something being wrong.'},
		{name: 'force', alias: 'f', type: Boolean, description: 'Overwrite existing files if necessary.'},
		{name: 'generator', alias: 'g', type: String, description: 'Specify generator.'},
		{name: 'help', alias: 'h', type: Boolean, description: 'Display this help text.'},
		{name: 'input', alias: 'I', type: String, description: 'File to be used as master.jsonic would.'},
		{name: 'log', alias: 'l', type: String, description: 'Log to the given file.'},
		{name: 'noop', alias: 'n', type: Boolean, description: 'Describe what actions would be done (including files that would be changed) without actually doing (changing) them.'},
		{name: 'parser', alias: 'p', type: String, description: 'Specify parser.'},
		{name: 'prefix', alias: 'P', type: String},
		{name: 'quiet', alias: 'q', type: Boolean, description: 'Only output errors.'},
		{name: 'repl', alias: 'r', type: Boolean, description: 'Interactive REPL shell.'},
		{name: 'silent', alias:  's', type: Boolean, description: 'Silence all logging.'},
		{name: 'source', alias: 'S', type: String, description: 'Source commands from the given file.'},
		{name: 'stderr', alias: 'e', type: String, description: 'Redirect stderr to the given stream.'},
		{name: 'stdin', alias: 'i', type: Boolean, description: 'Read input from stdin.'},
		{name: 'stdout', alias: 'o', type: Boolean, description: 'Write to stdout instead of the given file.'},
		{name: 'output', alias: 'O', type: String, description: 'Write output to the given file.'},
		{name: 'verbose', alias: 'v', type: Boolean, description: 'Verbose output.'},
		{name: 'version', alias: 'V', type: Number, description: 'Display version number.'}
	];
	//const Command = CommandLineCommands(CommandDefinitions);
	const Options = CommandLineArgs(OptionDefinitions);
	var input_file = 'master.jsonic';
	if(Options.input != null){
		input_file = Options.input;
	}
	var output_file = 'packge.json';
	if(Options.output != null){
		output_file = Options.output;
	}
	var parser_key = 'pacter-master-jsonic';
	if(Options.parser != null){
		parser_key = Options.parser;
	}
	var generator_key = 'npm-package-json';
	if(Options.generator != null){
		generator_key = Options.generator;
	}
	var parser_return = Pacter_Parser_pacter_master_jsonic(input_file);
	Log.log(process.argv0,'Pacter','source/main.js','Pacter','debug','parser_return: ',parser_return);
	
} else{
	
}
