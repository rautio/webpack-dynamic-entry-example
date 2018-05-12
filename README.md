# Webpack dynamic entry with multiple use cases

*Note: This is just a proof of concept and is still work in progress*

Using webpack and npm scripts we can dynamically load and build
different versions of the same application for different use cases.

This idea is useful for applications that have multiple distinct uses
that require some customization. For example you might have a core
engine that does some data handling or heavy user interaction that is
the main purpose of the application. But then you have different customer
segments that use it for different purposes and might require different
styles, processes or even logic that is unique to their use case.

Using webpack and dynamic entry points we can share the same core code
across all use cases but implement custom code in each to satisfy this scenario.
