# LayITout Objects

## Grids

Split the parent element filling all the space available. We can split it horizontal or vertically.

### o-hgrid

Horizontal Grid. Splits horizontally the parent.

```html
<div class='o-hgrid'>
	<div class='o-hgrid__fixed'>A</div>
	<div class='o-hgrid__fluid'>C</div>
	<div class='o-hgrid__fixed'>B</div>
</div>
```

Inside the **.o-hgrid**, you can add as many elements as you need. The layout will be built according this logic:

- **fixed**: the element will fill the space defined by the content.
- **fluid**: will fill the remained space.

Feel free to add your own modifiers in order to define fixed heights. Like:

```css
.o-hgrid__fixed--big {
	height: 60px;
}
```

### o-vgrid

Vertical Grid. Splits vertically the parent. Its logic is completely analog to [o-hgrid](#o-hgrid)

```html
<div class='o-vgrid'>
	<div class='o-vgrid__fixed'>A</div>
	<div class='o-vgrid__fluid'>C</div>
	<div class='o-vgrid__fixed'>B</div>
</div>
```

### Wrappers

They add padding to their content but still filling all the space that the parent element allows.

```html
<div class='some object'>
	<div class='o-wrapper'>
		<div class='some other object'></div>
	</div>
</div>
```


There are some variations here:

- **o-wrapper**: Add full padding (top, bottom, left, right)
- **o-wrapper-tbl**: Add padding on top, bottom and left
- **o-wrapper-tbr**: Add padding on top, bottom and right
- **o-wrapper-tb**: Add padding on top and bottom
- **o-wrapper-lr**: Add padding on right and left

## Fillers

Their pourpose is to fill the available space in different ways.

- **o-full-screen**: Just make the element as big as the viewport. Recommended for the root element.
- **o-fill**: Just get 100% of the parent element size.
	+ **o-fill--floated**: The element became `position: absolute`

## Floaters

These objects will position the element in one of the corners of the parent one.

- **o-floated**: Just the block element, requires one of the next modifiers to work properly:
	+ **o-floated-tl**: Position into top-left corner
	+ **o-floated-tr**: Position into top-right corner
	+ **o-floated-bl**: Position into bottom-left corner
	+ **o-floated-br**: Position into bottom-right corner

## Aligners

Aligner objects are good to center children elements inside the current block. You can center them vertically, horizontally or both simultaniously.

- **o-aligner**: Block definition, needs a modifier.
	+ **o-aligner--h**: Center horizontally
	+ **o-haligner--v**: Center vertically
	+ **o-haligner--flip**: Flips how children elements are position. By default they'll be in the same line but with this modifier they'll be positioned vertically.



