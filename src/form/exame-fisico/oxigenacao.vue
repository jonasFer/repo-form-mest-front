<template>
    <el-row :gutter="20">
        <el-col :xs="12" :sm="7" :md="5" :lg="5">
            <el-form-item label="Ventilação">
                <el-checkbox v-model="oxigenacao.ventilacao">Espontânea</el-checkbox>
            </el-form-item>
        </el-col>
        <!--
            id: null,
            ventilacao: null,
            descricaoVentilacao: null,
            auscutaPulmonar: null,
            tosse: null,
            drenagemToracica: null,
            descricaoDrenagemToracica: null,
            gasometriaHora: null,
            gasometriaPh: null,
            gasometriaPaco2: null,
            gasometriaPao2: null,
            gasometriaHco3: null,
            gasometriaBe: null,
            gasometriaSo2: null
        -->
    </el-row>
</template>

<script>
export default {
    props: {
        oxigenacao: {
            type: Object
        }
    }
}
</script>

<style>

</style>