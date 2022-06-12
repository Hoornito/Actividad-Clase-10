import './style.css'
import './funciones.js'
import './node_modules/bootstrap/dist/css/bootstrap.min.css'
import './node_modules/bootstrap/dist/js/bootstrap.min.js'

document.querySelector('#app').innerHTML = `
<h1>Calculadora IMC</h1>
<div id="form">
  <div class="Contenedor-imc">
    <div class="input-group mb-3">
      <span class="input-group-text" id="inputGroup-sizing-lg">Peso</span>
      <input type="text" id="imcPeso" placeholder="Peso en Kg" class="form-control">
      <span class="input-group-text" id="inputGroup-sizing-lg">KG</span>
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text">Altura</span>
      <input type="text" id="imcAltura" placeholder="Altura en CM" class="form-control">
      <span class="input-group-text">CM</span>
    </div>
    <div>
    <button type="button" class="btn btn-outline-dark" onclick="IMC.limpiar()">Limpliar</button>
    <button type="button" class="btn btn-outline-dark" onclick="IMC.calcular()">Calcular</button>
    </div>   
    <div class="input-group mt-3">
      <span class="input-group-text">IMC</span>
      <input type="text" id="imcResultado" class="form-control">
    </div>
  </div>
</div>
<div id="Tab" class="imcTable mt-3 hidden">
  <table class="table">
    <thead>
      <tr>
        <th scope="col"><h3>#</h3></th>
        <th scope="col"> <h3>Composicion Corporal</h3> </th>
        <th scope="col"> <h3>Indice de Masa Corporal (IMC)</h3> </th>
      </tr>
    </thead>
    <tbody>
      <tr id="inferior" class="warning hidden">
        <th scope="row">-</th>
        <td> <strong>Peso Inferior al Normal </strong> </td>
        <td> <strong>Menos de 18.5</strong> </td>
      </tr>
      <tr id="normal" class="success hidden">
        <th scope="row">-</th>
        <td> <strong>Normal</strong> </td>
        <td> <strong>18.5 - 24.9</strong> </td>
      </tr>
      <tr id="superior" class="warning hidden">
        <th scope="row">-</th>
        <td> <strong>Peso Superior al Normal</strong> </td>
        <td> <strong>25.0 - 29.9</strong> </td>
      </tr>
      <tr id="Obesidad" class="error hidden">
        <th scope="row">-</th>
        <td> <strong>Obesidad</strong> </td>
        <td> <strong>Mas de 30</strong> </td>
      </tr>
    </tbody>
  </table>
</div> 
`
