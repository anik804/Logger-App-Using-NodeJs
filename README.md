# Logger App Using Node.js

## Description
This is a simple Node.js application that logs text messages passed as command line arguments into a log file (`log.txt`) with a timestamp. It is useful for quickly recording notes or messages with the time they were logged.

## Prerequisites
- Node.js installed on your system

## Usage
Run the app using the command line by providing the text you want to log as arguments. For example:

```
node index.js "Hello, World!"
```

This will append the message along with the current date and time to the `log.txt` file.

## Output
- The logged messages are saved in the `log.txt` file located in the same directory as the app.
- Each entry includes the message followed by the timestamp when it was logged.

## Notes
- If no text is provided, the app will prompt you to provide some text and exit.
- You can check the `log.txt` file to see all logged messages.
