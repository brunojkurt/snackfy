# Snackfy

Snackfy is a notification provider for React that can easily show, stack up, queue and customize notifications inside your react app.

![snackfy](https://user-images.githubusercontent.com/31192708/92314503-ba781000-efae-11ea-8524-045dc61b9568.gif)

## Installation

Use npm package manager to install snackfy.

```bash
npm install snackfy
```

## Basic usage

1) Wrap your App inside SnackbarProvider
```javascript
import { SnackbarProvider } from 'snackfy';

<SnackbarProvider>
  <App/>
</SnackbarProvider>
```

2) Import useSnackbar, this hook has two methods "enqueueSnackbar" and "closeSnackbar". the method "enqueueSnackbar" returns the snackbar id that can be provided to "closeSnackbar" if needed.
```javascript
import { useSnackbar } from 'snackfy';

const MyComponent = () => {
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar({
      message: 'This is an awesome Snackbar!'
    });
  };

  return (
    <Button onClick={handleClick}>Show snackbar</Button>
  );
}
```

## Props

### SnackbarProvider
| Property  |  Type | Default | Description |
| ------------------- | ------------------- | ------------------- | ------------------- |
| maxSnacks | number | 3 | Maximum amount of snackbars that will be displayed at same time (recommended to keep the maximum to 3 snackbars) |
| placement | placement object | undefined | Object that determines the vertical and horizontal placement |
| customIcon | any | undefined | Property that replace the default snackbar icon |
| customDismiss | any | undefined | Property to replace the default dismiss icon |
| customStyle | custom style object | undefined | Object that replace the default style for all snackbars |

### placement props (object prop from SnackbarProvider)
| Property  |  Type | Default | Description |
| ------------------- | ------------------- | ------------------- | ------------------- |
| vertical | 'top' or 'bottom' | | Prop that determines the vertical placement |
| horizontal | 'left' or 'center' or 'right' |  | Props that determines the horizontal placement |

### custom style props (object prop from SnackbarProvider and enqueueSnackbar options)
| Property  |  Type | Default | Description |
| ------------------- | ------------------- | ------------------- | ------------------- |
| default | React.CSSProperties | undefined | Prop that overides snackbar default style |
| success | React.CSSProperties | undefined | Prop that overides snackbar success variant default style |
| error | React.CSSProperties | undefined | Prop that overides snackbar error variant default style |
| warning | React.CSSProperties | undefined | Prop that overides snackbar warning variant default style |
| info | React.CSSProperties | undefined | Prop that overides snackbar info variant default style |

### enqueueSnackbar props (returns id type: number)
| Property  |  Type | Default | Description |
| ------------------- | ------------------- | ------------------- | ------------------- |
|  message |  string |  |  Message that will be displayed in the snackbar |
|  actions |  object (Actions) |  |  Object that contains the actions (max: 2), for each action will be generated a button |
|  options |  object (Options) |  |  Object that contains the options to customize your snackbars |

### actions props (object prop from enqueueSnackbar)
| Property  |  Type | Default | Description |
| ------------------- | ------------------- | ------------------- | ------------------- |
|  first |  object (Action)|  | This is required only if actions is set on enqueueSnackbar and receive an action object (see below) |
|  second |  object(Action) |  | The second action is not required and receive an action object |

### options props (object prop from enqueueSnackbar)
| Property  |  Type | Default | Description |
| ------------------- | ------------------- | ------------------- | ------------------- |
| countdown |  number | 5000 | The amount of milliseconds the snackbar will remain open |
| persist | boolean | false | If set to true, the snackbar will never be closed, unless if you pass the id to closeSnackbar or set dismissible to true (see more below) |
| dismissible | boolean | false | Set to true to show a close icon (x) in the snackbar that closes the snackbar when pressed|
| variant |  'sucess' or 'error' or 'warning' or 'info' | | Apply the variant style to the snackbar |
| customIcon | any | undefined | Property that replace the default snackbar icon (will override Provider customIcon) |
| customDismiss | any | undefined | Property to replace the default dismiss icon (will override Provider customDismiss) |
| customStyle | custom style object | undefined | Object that replace the default style for all snackbars (will override Provider customStyle) |

### action props (object prop from actions)
| Property  |  Type | Default | Description |
| ------------------- | ------------------- | ------------------- | ------------------- |
|  name |  string|  | The action name that will be displayed in the button |
|  action |  Function |  | The action that will be triggered when the button is pressed |

## Contributing
Pull requests are welcome. If you have any trouble, open an issue and I will solve soon as possible.

## Author

Bruno Kurt

[![e-mail](https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x.png)](mailto:brunojkurt@gmail.com)

[![instagram](https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png)](https://www.instagram.com/bruno_kurt/)