# DebugTxt

Simple tool to write colored texts on console

## Tests

```
const logger = require('./lib/logger');

logger.write('!FgGreen','Test','!Reset');
logger.writeln('!FgRed','Test','!Reset');
logger.writeln('!FgBlue','Test','!Reset');
logger.writeR('!FgGreen','Test');
logger.writeln('Test - blank');
logger.writelnR('!FgRed','Test');
logger.writeln('Test - blank');
```