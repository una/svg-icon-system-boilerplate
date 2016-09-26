# svg-icon-system-boilerplate

A boilerplate for building a custom icon system via a linked external SVG sprite. [Configuration Options](https://github.com/jkphl/svg-sprite) -- this system is based on SVG-sprite.

## Usage

1. Place SVG icons into `svg/` folder (you can create subfolders within this, and the icons will be namespaced appropriately based on sublevel)
2. Run `gulp` to build the sprite and a reference page (located at `sprite/sprite.symbol.html`)

`sprite.svg` is the main file containing a sprite of each SVG included using `<symbol>` inside of SVG `<defs>`. This system implements SVG icons via [<use>](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use) to access individual icons.

The icons are their original color by default (see your reference page) but can be edited using CSS. If you use subfolders, the naming structure is as follows: `folderName--iconName`.

HTML:
```html
<svg>
  <use xlink:href="sprite.svg#glasses--wine"></use>
</svg>
```

You may then style this SVG in CSS. Make sure to give it a width and height (default is 100% of parent). It is best to edit these icons in CSS after adding a class to the `<svg>`. For example:

```html
<svg class="icon--wineglass">
  <use xlink:href="sprite.svg#glasses--wine"></use>
</svg>
```

Sass:
```scss
.icon--wineglass {
  fill: red; // additional styling

  &:hover {
    fill: white; // styling on hover
  }
}
```
