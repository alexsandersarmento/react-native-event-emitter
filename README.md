# react-event-emmiter

**react-event-emmiter** is a simple library for handling custom events in React Native applications.

## Installation

To install the library, you can run the following command:

```
npm install react-event-emmiter
```

or

```
yarn add react-event-emmiter
```

## Usage

The library provides the following functions for event handling:

### `addListener(eventName: string, listener: (...params: any[]) => void)`

Adds an event listener for the specified event name. The listener will be called whenever the event is triggered.

Example usage:

```javascript
import { addListener } from 'react-event-emmiter';

const handleEvent = (param1, param2) => {
  // Logic to handle the event
};

addListener('myEvent', handleEvent);
```

### `notify(eventName: string, ...params: any[])`

Triggers the event with the specified name, passing additional parameters. All registered listeners for the event will be called with the provided parameters.

Example usage:

```javascript
import { notify } from 'react-event-emmiter';

notify('myEvent', 'param1', 'param2');
```


### `removeListener(eventName: string)`

Removes an event listener for the specified event name.

Example usage:

```javascript
import { removeListener } from 'react-event-emmiter';

removeListener('myEvent');
```

### `removeAllListeners()`

Removes all event listeners.

Example usage:

```javascript
import { removeAllListeners } from 'react-event-emmiter';

removeAllListeners();
```

## Contribution

Contributions are welcome! Feel free to open issues and submit pull requests to enhance the library.

## License

This library is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.