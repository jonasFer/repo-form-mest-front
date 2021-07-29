<template>
    <el-row :gutter="20">
        <el-col  :xs="12" :sm="8" :md="8" :lg="4">
            <el-form-item label="Escala de coma">
                <el-input v-model="regulacaoNeurologica.escalaComa"></el-input>
            </el-form-item>
        </el-col>
        <el-col  :xs="6" :sm="8" :md="8" :lg="2">
            <el-form-item label="AO">
                <el-input v-model="regulacaoNeurologica.aberturaOcular"></el-input>
            </el-form-item>
        </el-col>
        <el-col  :xs="6" :sm="8" :md="8" :lg="2">
            <el-form-item label="RV">
                <el-input v-model="regulacaoNeurologica.respostaVerbal"></el-input>
            </el-form-item>
        </el-col>
        <el-col  :xs="6" :sm="8" :md="8" :lg="2">
            <el-form-item label="RM">
                <el-input v-model="regulacaoNeurologica.respostaMotora"></el-input>
            </el-form-item>
        </el-col>
        <el-col  :xs="18" :sm="8" :md="8" :lg="14">
            <el-form-item label="Observações">
                <el-input v-model="regulacaoNeurologica.observacao"></el-input>
            </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="7" :md="5" :lg="4">
            <el-form-item label="Pupilas">
                <el-select v-model="regulacaoNeurologica.pupila">
                <el-option label="Isocóricas" value="1"></el-option>
                <el-option label="Anisocóricas" value="2"></el-option>
                <el-option label="Midríase" value="3"></el-option>
                </el-select>
            </el-form-item>
        </el-col>
        <el-col  :xs="12" :sm="8" :md="8" :lg="4">
            <el-form-item label="Observacao Pupila">
                <el-input v-model="regulacaoNeurologica.observacaoPupila"></el-input>
            </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="7" :md="5" :lg="4">
            <el-form-item label="Reflexo fotomotor">
                <el-select v-model="regulacaoNeurologica.reflexoFotomotor">
                <el-option label="Normal" value="1"></el-option>
                <el-option label="Diminuído" value="2"></el-option>
                <el-option label="Abolido" value="3"></el-option>
                </el-select>
            </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="7" :md="5" :lg="4">
            <el-form-item label="Mobilidade física">
                <el-select v-model="regulacaoNeurologica.mobilidadeFisicaMmss">
                <el-option label="Preservada" value="1"></el-option>
                <el-option label="Paresia" value="2"></el-option>
                <el-option label="Plegia" value="3"></el-option>
                <el-option label="Parestesia" value="4"></el-option>
                </el-select>
            </el-form-item>
        </el-col>
        <el-col  :xs="12" :sm="8" :md="8" :lg="4">
            <el-form-item label="Observacao MMSS">
                <el-input v-model="regulacaoNeurologica.observacaoMobilidadeFisicaMmss"></el-input>
            </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="7" :md="5" :lg="4">
            <el-form-item label="Mobilidade física">
                <el-select v-model="regulacaoNeurologica.mobilidadeFisicaMmii">
                <el-option label="Preservada" value="1"></el-option>
                <el-option label="Paresia" value="2"></el-option>
                <el-option label="Plegia" value="3"></el-option>
                <el-option label="Parestesia" value="4"></el-option>
                <el-option label="Movimentos lentos" value="5"></el-option>
                <el-option label="Movimentos involuntários" value="6"></el-option>
                <el-option label="Força motora diminuida" value="7"></el-option>
                <el-option label="Cefaleia" value="8"></el-option>
                <el-option label="Crises convulsivas" value="9"></el-option>
                <el-option label="Fotofobia" value="10"></el-option>
                <el-option label="Rigidez de nuca" value="11"></el-option>
                <el-option label="Sinal de Kernig" value="12"></el-option>
                <el-option label="Sinal de Brudzinski" value="13"></el-option>
                </el-select>
            </el-form-item>
        </el-col>
        <el-col  :xs="12" :sm="8" :md="8" :lg="4">
            <el-form-item label="Observacao MMII">
                <el-input v-model="regulacaoNeurologica.observacaoMobilidadeFisicaMmii"></el-input>
            </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="7" :md="5" :lg="4">
            <el-form-item label="Psicotrópicos">
                <el-select v-model="regulacaoNeurologica.medicacaoPsicotropico">
                    <el-option label="Sim" value="true"></el-option>
                    <el-option label="Não" value="false"></el-option>
                </el-select>
            </el-form-item>
        </el-col>
        <el-col  :xs="24" :sm="8" :md="8" :lg="4">
            <el-form-item label="Observacao psicotropico">
                <el-input v-model="regulacaoNeurologica.observacaoMedicacaoPsicotropico"></el-input>
            </el-form-item>
        </el-col>
        <el-col  :xs="24" :sm="8" :md="8" :lg="3">
            <el-form-item label="Dose ml/h">
                <el-input v-model="regulacaoNeurologica.dosePsicotropico"></el-input>
            </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="7" :md="5" :lg="5">
            <el-form-item label="Bloqueadores neuromusculares">
                <el-select v-model="regulacaoNeurologica.medicacaoBloqueador">
                    <el-option label="Sim" value="true"></el-option>
                    <el-option label="Não" value="false"></el-option>
                </el-select>
            </el-form-item>
        </el-col>
        <el-col  :xs="12" :sm="8" :md="8" :lg="4">
            <el-form-item label="Observacao bloqueador">
                <el-input v-model="regulacaoNeurologica.observacaoMobilidadeFisicaMmii"></el-input>
            </el-form-item>
        </el-col>
        <el-col  :xs="12" :sm="8" :md="8" :lg="3">
            <el-form-item label="Dose ml/h">
                <el-input v-model="regulacaoNeurologica.doseBloqueador"></el-input>
            </el-form-item>
        </el-col>
            <!--
                
                        medicacaoPsicotropico: null,
                        observacaoMedicacaoPsicotropico: null,
                        dosePsicotropico: null,
                        medicacaoBloqueador: null,
                        observacaoMedicacaoBloqueador: null,
                        doseBloqueador: null
            -->
    </el-row>
</template>

<script>
export default {
    props: {
        regulacaoNeurologica: {
            type: Object
        }
    }
}
</script>

<style>

</style>