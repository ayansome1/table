## To test in local

`npm install reload -g`
`reload -b`

## example usage

```
let x = new Table({ id: 'table-1' });
x.createHeader(['name', 'roll']);
x.insertRow([x.createCell('Ayan'), x.createCell(24)], 2);
x.insertRow([x.createCell('Ayan1'), x.createCell(241)], 1);
x.insertRow([x.createCell('Ayan11'), x.createCell(241)], 1);
```
