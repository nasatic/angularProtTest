// 'use strict';
// const log4js = require('../node_modules/log4js');
// // log the cheese logger messages to a file, and the console ones as well.
// log4js.configure({
//   appenders: {
//     cheeseLogs: { type: 'file', filename: 'application.log' },
//     console: { type: 'console' }
//   },
//   categories: {
//     cheese: { appenders: ['cheeseLogs'], level: 'error' },
//     another: { appenders: ['console'], level: 'trace' },
//     default: { appenders: ['console', 'cheeseLogs'], level: 'trace' }
//   }
// });
// // a custom logger outside of the log4js/lib/appenders directory can be accessed like so
// // log4js.configure({
// //  appenders: { outside: { type: 'what/you/would/put/in/require', otherArgs: 'blah' } }
// //  ...
// // });
// const logger = log4js.getLogger('cheese');
// // const logger = log4js.getLogger('../config/log4js.json');
// // only errors and above get logged.
// const otherLogger = log4js.getLogger();
// // this will get coloured output on console, and appear in application.log
// otherLogger.error('AAArgh! Something went wrong', { some: 'otherObject', useful_for: 'debug purposes' });
// otherLogger.log('This should appear as info output');
// // these will not appear (logging level beneath error)
// logger.trace('Entering cheese testing');
// logger.debug('Got cheese.');
// logger.info('Cheese is Gouda.');
// logger.log('Something funny about cheese.');
// logger.warn('Cheese is quite smelly.');
// // these end up only in cheese.log
// logger.error('Cheese %s is too ripe!', 'gouda');
// logger.fatal('Cheese was breeding ground for listeria.');
// // these don't end up in cheese.log, but will appear on the console
// const anotherLogger = log4js.getLogger('another');
// anotherLogger.debug('Just checking');
// // will also go to console and cheese.log, since that's configured for all categories
// const pantsLog = log4js.getLogger('pants');
// pantsLog.debug('Something for pants');
// ------------------------------------------------------------------------------------------------------
// 'use strict';
// const log4js = require('../node_modules/log4js');
// log4js.configure({ // configure to use all types in different files.
//     appenders: [
//         {   type: 'file',
//             filename: "/logs/error.log", // specify the path where u want logs folder error.log
//             category: 'error',
//             maxLogSize: 20480,
//             backups: 10
//         },
//         {   type: "file",
//             filename: "/logs/info.log", // specify the path where u want logs folder info.log
//             category: 'info',
//             maxLogSize: 20480,
//             backups: 10
//         },
//         {   type: 'file',
//             filename: "/logs/debug.log", // specify the path where u want logs folder debug.log
//             category: 'debug',
//             maxLogSize: 20480,
//             backups: 10
//         }
//     ]
// });
// var loggerinfo = log4js.getLogger('info'); // initialize the var to use.
// var loggererror = log4js.getLogger('error'); // initialize the var to use.
// var loggerdebug = log4js.getLogger('debug'); // initialize the var to use.
// loggerinfo.info('This is Information Logger');
// loggererror.info('This is Error Logger');
// loggerdebug.info('This is Debugger');
// ------------------------------------------------------------------------------------------------------
// import { configure, getLogger } from 'log4js';
// configure('./support/logger.ts');
// const logger = getLogger();
// logger.level = 'debug';
// logger.debug("Some debug messages");
// configure({
//     appenders: { cheese: { type: 'file', filename: 'cheese.log' } },
//     categories: { default: { appenders: ['cheese'], level: 'error' } }
// });
// ------------------------------------------------------------------------------------------------------
'use strict';
var log4js = require('../node_modules/log4js');
log4js.configure({
    "appenders": {
        "access": {
            "type": "dateFile",
            "filename": "logs/access.log",
            "pattern": "-yyyy-MM-dd",
            "category": "http"
        },
        "app": {
            "type": "file",
            "filename": "logs/app.log",
            "maxLogSize": 10485760,
            "numBackups": 5
        },
        "console": {
            "type": "console"
        },
        "errorFile": {
            "type": "file",
            "filename": "logs/errors.log"
        },
        "errors": {
            "type": "logLevelFilter",
            "level": "ERROR",
            "appender": "errorFile"
        }
    },
    "categories": {
        "default": { "appenders": ["console", "app", "errors", "errorFile"], "level": "DEBUG" },
        "http": { "appenders": ["access"], "level": "DEBUG" }
    }
});
