* [MDfile format](https://guides.github.com/features/mastering-markdown/)

## TOC
* [CSS](#CSS)
* [RxJS](#RxJS)

## CSS
flexbox, layout module
Before flex box layout module, there were 4 layout modes.
1. Block, for sections in a webpage.
2. Inlin, for text.
3. Table, for 2-dimensional table data.
4. Positioned, for explicit position of an element

The flexbox, makes it easier to design flexible reponsive layout structure without using float or positioning. To start with flexbox, define a container with flex display
```css
.class {
    display: flex;
}
```
* Child Elements (items under flex display)
the direct child elements of a flex container automatically becomes flexible(flex) items. 
flex property under the display: flex element is shorthand propertyy for 'flex-grow', 'flex-shrink' and 'flex-basis'
```css
.class{
    /* not growable (0) not shrinkable(0) and inital length 200px */
    flex: 0 0 200px 
}
## RxJS

