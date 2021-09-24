<template>
    <el-card>
        <el-row :gutter="20">
            <el-col :xs="12" :sm="7" :md="5" :lg="4">
                <el-form-item label="Condição visual">
                    <el-select v-model="percepcaoOrgaoSentido.condicaoVisual" @change="condicaoVisualChange($event)">
                        <el-option label="Normal" value="1"></el-option>
                        <el-option label="Alterada" value="2"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col  :xs="12" :sm="8" :md="8" :lg="4" v-if="exibeObsVisual">
                <el-form-item label="Observação">
                    <el-input v-model="percepcaoOrgaoSentido.descricaoCondicaoVisual"></el-input>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="4">
                <el-form-item label="Condição audição">
                    <el-select v-model="percepcaoOrgaoSentido.condicaoAudicao">
                        <el-option label="Normal" value="1"></el-option>
                        <el-option label="Diminuida" value="2"></el-option>
                        <el-option label="Surdez" value="3"></el-option>
                        <el-option label="Uso de aparelho de audição" value="4"></el-option>
                        <el-option label="Otorreia" value="5"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="4">
                <el-form-item label="Sensibilidade à dor">
                    <el-select v-model="percepcaoOrgaoSentido.sensibilidadeDor">
                        <el-option label="Comportamento não verbal de dor" value="1"></el-option>
                        <el-option label="Verbalização de dor" value="2"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col  :xs="12" :sm="8" :md="8" :lg="12">
                <el-form-item label="Uso de medicamentos">
                    <el-input v-model="percepcaoOrgaoSentido.medicamentos"></el-input>
                </el-form-item>
            </el-col>
            <el-col  :xs="24" :sm="24" :md="24" :lg="24">
                <el-form-item label="Tipo, localização, frequência e intensidade da dor">
                    <el-input v-model="percepcaoOrgaoSentido.intensidadeDor"></el-input>
                </el-form-item>
            </el-col>
        </el-row>
    </el-card>
</template>

<script>
export default {
    props: {
        percepcaoOrgaoSentido: {
            type: Object
        }
    },
    data() {
        return {
            exibeObsVisual: false
        }
    },
    methods: {
        condicaoVisualChange(value) {
            this.exibeObsVisual = value == 2 ? true : false
        }
    }
}
</script>

<style>

</style>