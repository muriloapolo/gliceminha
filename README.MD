<form id="formGlicemiaPeso">
    <!-- Todos os campos de glicemia, peso e altura dentro de um único form -->
    <div class="mb-3">
        <label for="glicemiaInput" class="form-label">Glicemia (mg/dL)</label>
        <input type="number" class="form-control" id="glicemiaInput" placeholder="Digite a glicemia">
    </div>
    <div class="mb-3">
        <label for="data-da-afericao" class="form-label">Data</label>
        <input type="date" class="form-control" id="data-da-afericao">
    </div>
    <div class="mb-3">
        <label for="pesoInput" class="form-label">Peso (kg)</label>
        <input type="number" class="form-control" id="pesoInput" placeholder="Digite o peso">
    </div>
    <div class="mb-3">
        <label for="alturaInput" class="form-label">Altura (cm)</label>
        <input type="number" step="0.01" class="form-control" id="alturaInput" placeholder="Digite a altura">
    </div>
    <div class="mb-3">
        <button type="button" class="btn btn-primary w-100" onclick="cadastrarGlicemia()">Cadastrar Glicemia</button>
    </div>
    <div class="mb-3">
        <button type="button" class="btn btn-secondary w-100" onclick="calcularIMC()">Calcular IMC</button>
    </div>
</form>
################
