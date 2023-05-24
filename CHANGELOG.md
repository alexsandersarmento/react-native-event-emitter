**Version 1.1.0** - simplify the implementation of listener management

**Changes:**

- The `listenersMap` declaration was updated to allow only one listener function per event.
- The `addListener` method was modified to directly store the listener function in `listenersMap`, instead of an array.
- The `removeListener` method was simplified to directly remove the listener by the event name.
- The `removeAllListeners` method was updated to completely reset `listenersMap`, removing all registered listeners.
- The `notify` method was modified to directly access the corresponding listener in `listenersMap` and invoke it, instead of iterating over an array of listeners.
<br>
These changes aim to simplify the implementation of listener management, allowing only a single listener per event.