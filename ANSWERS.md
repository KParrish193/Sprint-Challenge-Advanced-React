 1. Why would you use class component over function components (removing hooks from the question)?
 
    Removing hooks from the equation, class components utilize state to create more dynamic interactions and thus if you needed to utilize state or a lyfecycle method, it would be better to utilize a class component. This was a feature not present in functional components until the recent introduction of hooks to functional components. 

 2. Name three lifecycle methods and their purposes.

    componentWillMount: The component will mount shortly. There's not anything rendered yet to manipulate.
    Most commononly used for App configuration in your root component.

    componentDidMount: the component has mounted and allows for a lot of various things to be accomplished: draw on a <canvas> element that was just rendered, add event listeners, etc.
    Effectively, you want to do all the setup you couldn’t do without a DOM, and start getting all the data you need.

    componentWillUnmount: allows us to clean up any final pieces before the component is un-mounted. Often used to cancel outgoing network requests and event-listeners associated with it, and clean up anything to do solely with the component.

 3. What is the purpose of a custom hook?
 
    It is a hook that can create brevity in code due to being a customized, reuseable way to apply non-visual behavior and stateful logic throughout our components with a familiar naming structure.

 
 4. Why is it important to test our apps?

    Testing is important for a wide variety of reasons, chief among them is the usability of the app. Testing will surface bugs quicker, allow us as developers to trust the code, prevent time and moeny being sunk into manual testing, make us think further about how the users may use the app differently than we've designed, act as a safety net for changes, act as documentation for the code, and push us to write better, more testable code. 