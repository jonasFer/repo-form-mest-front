<template>
    <el-card>
        <el-row :gutter="20">
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="eliminacao.constipacao">Constipação</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="12" :md="7" :lg="6">
                <el-form-item>
                    <el-checkbox v-model="eliminacao.motilidade">Motilidade gastrointestinal disfuncional</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="eliminacao.retencaoUrinaria">Retenção urinária</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="eliminacao.diarreia">Diarreia</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="6">
                <el-form-item>
                    <el-checkbox v-model="eliminacao.eliminacaoIntestinalPrejudicada">Eliminação intestinal prejudicada</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="eliminacao.incontinenciaUrinaria">Intercorrência urinária</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="eliminacao.eliminacaoUrinariaDiminuida">Eliminação urinária reduzida</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="eliminacao.eliminacaoUrinariaAumentada">Eliminação urinária ai,emtada</el-checkbox>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="24" :lg="24">
                <el-form-item label="Outros">
                    <el-input v-model="eliminacao.outro"></el-input>
                </el-form-item>
            </el-col>
        </el-row>
    </el-card>
</template>

<script>
export default {
    props: {
        eliminacao: {
            type: Object
        }
    }
}
</script>

<style scoped>

</style>