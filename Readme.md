# email

  Parse an email address into its components, based on [component/url](https://github.com/component/url).

## Installation

    $ component install ianstormtaylor/email

## Example
    
```js
var email = require('email');
email.parse('johnny+nospam@example.com');
```

```js
{
  local: 'johnny+nospam',
  name: 'johnny',
  filter: 'nospam',
  domain: 'example.com'
}
```

## API

### email.parse(string)
  Parse the given email `string`.

### email.hasFilter(string)
  Check if the given email `string` has a `+` filter.

## License

  MIT
