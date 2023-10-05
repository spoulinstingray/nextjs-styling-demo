# styled-components

## Pros

- Easy to pass props in the css in order to have custom styling logic
- Can use the theme in the css using interpolation, like props
- Easily extensible styled components
- Can target other styled components using javascript defined variables

## Cons

- Files become longer vertically unless the components are all exported to seperate files
- Can be tricky to work with styled-components and media queries
- Can be hard to name components for them to stay readable in the jsx, just like it might be hard to find good css class names

# TailwindCSS

## Pros

- Extremely fast to write styling when used to the class names.
- Reduces ambiguity when deciding what css properties we should use when we need to style something in a way.
- Easy to lookup cheatsheet.
- Extensions make it much better on the eyes and automatically sort the class names for easy peer review.
- Every style applied to an element will be used, which reduces the amount of junk css left in the codebase.
- Theme is automatically available in the classnames and intellisense is great

## Cons

- Complex css selectors can require importing css files that use the @apply tailwind directive, which is not really suggested
- Classnames can become really long

# Vanilla CSS

## Pros

- We are used to having css files
- Can sometimes be easier to debug
- Will be the least-config, most supported way to do styling in bleeding edge versions of next.js

## Cons

- Managing the import statement in each page or component
- having to use `className={classNames(styles.[...], condition ? styles.[...] : styles.[...])}` in order to use multiple classes or have conditionnal styling.
- Greatly increase the amount of files in the project and harder on the eyes when browsing directories
- Classes can become forgotten in their .css files if they are no longer used by the components.
- Have to manually configure and use css variables in order to use themes and configs
- More ambiguity when it comes to how things should be done as it lets you do everything your way
- Requires custom config for minimization and autoprefixing
- Have to name css classes with pascal case to make easier to use in javascript
