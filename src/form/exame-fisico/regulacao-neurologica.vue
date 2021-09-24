<template>
    <el-card>
        <el-row :gutter="20">
            <el-col  :xs="12" :sm="6" :md="6" :lg="4">
                <el-form-item label="Escala de coma">
                    <el-input v-model="regulacaoNeurologica.escalaComa"></el-input>
                </el-form-item>
            </el-col>
            <el-col  :xs="12" :sm="3" :md="4" :lg="4">
                <el-form-item label="AO">
                    <el-input v-model="regulacaoNeurologica.aberturaOcular"></el-input>
                </el-form-item>
            </el-col>
            <el-col  :xs="12" :sm="3" :md="3" :lg="3">
                <el-form-item label="RV">
                    <el-input v-model="regulacaoNeurologica.respostaVerbal"></el-input>
                </el-form-item>
            </el-col>
            <el-col  :xs="12" :sm="4" :md="3" :lg="3">
                <el-form-item label="RM">
                    <el-input v-model="regulacaoNeurologica.respostaMotora"></el-input>
                </el-form-item>
            </el-col>
            <el-col  :xs="24" :sm="8" :md="8" :lg="10">
                <el-form-item label="Observações">
                    <el-input v-model="regulacaoNeurologica.observacao"></el-input>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :md="5" :lg="3">
                <el-form-item label="Pupilas">
                    <el-checkbox v-model="regulacaoNeurologica.isocorica">Isocóricas</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :md="5" :lg="3" class="m-t">
                <el-form-item label=" ">
                    <el-checkbox v-model="regulacaoNeurologica.anisocorica">Anisocóricas</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :md="5" :lg="3" v-if="regulacaoNeurologica.anisocorica == true" style="margin-top: 38px">
                <el-form-item>
                    <el-input v-model="regulacaoNeurologica.observacaoAnisocorica"></el-input>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :md="5" :lg="3" class="m-t">
                <el-form-item label=" ">
                    <el-checkbox v-model="regulacaoNeurologica.midriase">Midríase</el-checkbox>
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
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="12" :sm="6" :md="5" :lg="24">
                <el-form-item label="Mobilidade fisíca">
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :md="5" :lg="3">
                <el-form-item label="MMSS">
                    <el-checkbox v-model="regulacaoNeurologica.mmssPreservada">Preservada</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :md="5" :lg="2">
                <el-form-item label=" " class="m-t">
                    <el-checkbox v-model="regulacaoNeurologica.mmssParesia">Paresia</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :md="5" :lg="2" v-if="regulacaoNeurologica.mmssParesia == true" style="margin-top: 38px">
                <el-form-item>
                    <el-input v-model="regulacaoNeurologica.mmssObservacaoParesia"></el-input>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :md="5" :lg="2">
                <el-form-item label=" " class="m-t">
                    <el-checkbox v-model="regulacaoNeurologica.mmssPlegia">Plegia</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :md="5" :lg="2" v-if="regulacaoNeurologica.mmssPlegia == true" style="margin-top: 38px">
                <el-form-item>
                    <el-input v-model="regulacaoNeurologica.mmssObservacaoPlegia"></el-input>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :md="5" :lg="2">
                <el-form-item label=" " class="m-t">
                    <el-checkbox v-model="regulacaoNeurologica.mmssParestesia">Parestesia</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :md="5" :lg="3" v-if="regulacaoNeurologica.mmssParestesia == true" style="margin-top: 38px">
                <el-form-item>
                    <el-input v-model="regulacaoNeurologica.mmssObservacaoParestesia"></el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="12" :sm="6" :md="5" :lg="3">
                <el-form-item label="MMII">
                    <el-checkbox v-model="regulacaoNeurologica.mmiiPreservada">Preservada</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :md="5" :lg="2">
                <el-form-item label=" " class="m-t">
                    <el-checkbox v-model="regulacaoNeurologica.mmiiParesia">Paresia</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :md="5" :lg="2" v-if="regulacaoNeurologica.mmiiParesia == true" style="margin-top: 38px">
                <el-form-item>
                    <el-input v-model="regulacaoNeurologica.mmiiObservacaoParesia"></el-input>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :md="5" :lg="2">
                <el-form-item label=" " class="m-t">
                    <el-checkbox v-model="regulacaoNeurologica.mmiiPlegia">Plegia</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :md="5" :lg="2" v-if="regulacaoNeurologica.mmiiPlegia == true" style="margin-top: 38px">
                <el-form-item>
                    <el-input v-model="regulacaoNeurologica.mmiiObservacaoPlegia"></el-input>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :md="5" :lg="2">
                <el-form-item label=" " class="m-t">
                    <el-checkbox v-model="regulacaoNeurologica.mmiiParestesia">Parestesia</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :md="5" :lg="3" v-if="regulacaoNeurologica.mmiiParestesia == true" style="margin-top: 38px">
                <el-form-item>
                    <el-input v-model="regulacaoNeurologica.mmiiObservacaoParestesia"></el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="12" :sm="6" :md="5" :lg="4">
                <el-form-item>
                    <el-checkbox v-model="regulacaoNeurologica.movimentoLento">Movimentos lentos</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :md="5" :lg="4">
                <el-form-item>
                    <el-checkbox v-model="regulacaoNeurologica.movimentoInvoluntario">Movimentos involuntários</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :md="5" :lg="4">
                <el-form-item>
                    <el-checkbox v-model="regulacaoNeurologica.forcaMotora">Força motora diminuída</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :md="5" :lg="3" v-if="regulacaoNeurologica.forcaMotora == true">
                <el-form-item>
                    <el-input v-model="regulacaoNeurologica.observacaoForcaMotora"></el-input>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :md="5" :lg="4">
                <el-form-item>
                    <el-checkbox v-model="regulacaoNeurologica.cefaleia">Cefaleia</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :md="5" :lg="4">
                <el-form-item>
                    <el-checkbox v-model="regulacaoNeurologica.criseConvulsiva">Crises convulsivas</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :md="5" :lg="4">
                <el-form-item>
                    <el-checkbox v-model="regulacaoNeurologica.fotofobia">Fotofobia</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :md="5" :lg="4">
                <el-form-item>
                    <el-checkbox v-model="regulacaoNeurologica.rigidezNuca">Rigidez de nuca</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :md="5" :lg="4">
                <el-form-item>
                    <el-checkbox v-model="regulacaoNeurologica.kernig">Sinal de Kernig</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :md="5" :lg="4">
                <el-form-item>
                    <el-checkbox v-model="regulacaoNeurologica.brudzinski">Sinal de Brudzinski</el-checkbox>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="12" :sm="6" :md="5" :lg="4">
                <el-form-item class="m-t">
                    <el-checkbox v-model="regulacaoNeurologica.psicotropico">Psicotrópicos</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :md="5" :lg="3" v-if="regulacaoNeurologica.psicotropico == true">
                <el-form-item class="m-t">
                    <el-input v-model="regulacaoNeurologica.observacaoPsicotropico"></el-input>
                </el-form-item>
            </el-col>
            <el-col  :xs="24" :sm="8" :md="8" :lg="10" v-if="regulacaoNeurologica.psicotropico == true">
                <el-form-item class="m-t">
                    <el-input v-model="regulacaoNeurologica.psicotropicoDose" placeholder="dose ml/h"></el-input>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :md="5" :lg="5">
                <el-form-item class="m-t">
                    <el-checkbox v-model="regulacaoNeurologica.bloqueador">Bloqueadores neuromusculares</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :md="5" :lg="6" v-if="regulacaoNeurologica.bloqueador == true">
                <el-form-item class="m-t">
                    <el-input v-model="regulacaoNeurologica.observacaoBloqueador"></el-input>
                </el-form-item>
            </el-col>
            <el-col  :xs="24" :sm="8" :md="8" :lg="3" v-if="regulacaoNeurologica.bloqueador == true">
                <el-form-item class="m-t">
                    <el-input v-model="regulacaoNeurologica.bloqueadorDose" placeholder="dose ml/h"></el-input>
                </el-form-item>
            </el-col>
        </el-row>
    </el-card>
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
.m-t {
    margin-top: 16px;
}
</style>