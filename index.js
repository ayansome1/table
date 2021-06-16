function Table({ id }) {
  this.id = id;
  this.init();
}

Table.prototype.init = function () {
  console.log('init');
  let tableNode = document.createElement('table');
  tableNode.setAttribute('id', this.id);
  tableNode.appendChild(document.createElement('thead'));
  tableNode.appendChild(document.createElement('tbody'));
  document.body.appendChild(tableNode);
};

Table.prototype.createHeader = function (arr) {
  let thead = document.querySelector(`#${this.id} thead`);
  let tr = document.createElement('tr');
  arr.forEach((value) => {
    let th = document.createElement('th');
    th.appendChild(document.createTextNode(value));
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  // thead.appendChild(thead);
};

Table.prototype.createCell = function (value) {
  let td = document.createElement('td');
  td.appendChild(document.createTextNode(value));
  return td;
};

Table.prototype.insertRow = function (rowElements, index) {
  // index starts with 1
  let nthChild = document.querySelector(
    `#${this.id} tbody tr:nth-child(${index})`
  );

  let tbody = document.querySelector(`#${this.id} tbody`);

  let tr = document.createElement('tr');
  rowElements.forEach((rowElement) => {
    tr.appendChild(rowElement);
  });

  if (!nthChild) {
    tbody.appendChild(tr); // just insert row at end
  } else {
    tbody.insertBefore(tr, nthChild); // insert row at given position
  }
};

let x = new Table({ id: 'table-1' });
x.createHeader(['name', 'roll']);
x.insertRow([x.createCell('Ayan'), x.createCell(24)], 2);
x.insertRow([x.createCell('Ayan1'), x.createCell(241)], 1);
x.insertRow([x.createCell('Ayan11'), x.createCell(241)], 1);
