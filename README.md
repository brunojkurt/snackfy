# Snackfy

Snackfy is a notification provider for React that can easily show, stack up, queue and customize notifications inside your react app.

## Installation

Use npm package managerto install snackfy.

```bash
npm install snackfy
```

## Basic usage (documentation will be improved soon)

1) Wrap your App inside SnackbarProvider
```
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

## Contributing
Pull requests are welcome. If you have any trouble, open an issue and I will solve soon as possible.

## Author

Bruno Kurt

[![e-mail](https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x.png)](mailto:brunojkurt@gmail.com)

[![instagram](https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png)](https://www.instagram.com/bruno_kurt/)