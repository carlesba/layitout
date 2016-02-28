![](logo.svg)
A CSS layout library based on BEM IT that uses **Flexbox**.

To a better understanding, please check:

- [BEM](https://css-tricks.com/bem-101/)
- [IT CSS](http://csswizardry.net/talks/2014/11/itcss-dafed.pdf)
- And the convination of both [BEM IT](http://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/) by Harry Roberts

## A use case

The only rule to remember is:

>An element can only have **one** object at the same time.

First of all we need an element with `width` and `height` defined so everything inside it will fit. A good option could be starting with `o-full-screen` but you can choose your own object.

```html
<div class='o-full-screen'>
	<!-- your layout -->
</div>
```

Now you can split your layout as you need. The provided objects will usually try to fill completely the parent one. So, for instance, a common pattern is to have a sidebar. This could be done by using a *Horizontal Grid*:

```html
<div class='o-full-screen'>
	<div class='o-hgrid'>
		<div class='o-hgrid__fixed'>
			<div class='c-sidebar'>sidebar</div>
		</div>
		<div class='o-hgrid__fluid'>
			<div class='c-content'>content</div>
		</div>
	</div>
</div>
```

Then probably you want to add a header in the content. Let's split it vertically with a *Vertical Grid*.

```html
<div class='c-content o-vgrid'>
	<div class='c-content__header o-vgrid__fixed'>
		content header
	</div>
	<div class='c-content__page o-vgrid__fluid'>
		content page
	</div>
</div>
```
But let's say that we want to put three different sections in the sidebar: A header, a footer and something in between that you don't know yet what height will have but should fit in between the other two. Again, let's use another *Vertical Grid*.

```html
<div class='c-sidebar o-vgrid'>
	<div class='c-sidebar__header o-vgrid__fixed'>
		sidebar header
	</div>
	<div class='c-sidebar__menu o-vgrid__fluid'>
		sidebar menu
	</div>
	<div class='c-sidebar__footer o-vgrid__fixed'>
		sidebar footer
	</div>
</div>
```

As you can see, this 6 selectors allow you to build many of most used layouts.

But, as soon as you start adding content to the previous example, you will notice there's a bug. When the content overflows the parent, it's not accessible. That's because these objects fills and fits in the parent elements so we have to tell them where do we want to do the **scroll**.

To get that we can take advantage of the util class: `u-scrollable`.

Following the previous example, we could add this class to the c-content__page element so as soon as the content page grows too much we'll see the scrollable bar inside of this element, keeping the the header and the sidebar always visible. And all this with no needs to use `position: fixed` what has a [worse performance](http://fourkitchens.com/blog/article/fix-scrolling-performance-css-will-change-property).

Now just check [all objects available](objects.md) to get a better picture of all the posibilities.
