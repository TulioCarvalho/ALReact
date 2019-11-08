var campos=[
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
]

console.log(campos)

document.querySelector('.form').addEventListener('submit',function(event){
    alert('Submite listned');
    var tr = document.createElement('tr');
    campos.forEach(function(campo){
        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);

    });
});