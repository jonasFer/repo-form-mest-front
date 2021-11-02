<template>
    <el-card>
        <el-row :gutter="20">
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="regulacaoVascular.intoleranciaAtividadeFisica">Intolerância a atividade fisica</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="regulacaoVascular.capacidadeFisicaPrejudicada">Capacidade fisica prejudicada</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="regulacaoVascular.choqueSeptico">Choque séptico</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="regulacaoVascular.choqueHipovolemico">Choque hipovolemico</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="regulacaoVascular.debitoCardiacoDiminuido">Débito cardíaco diminuido</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="regulacaoVascular.debitoCardiacoAumentado">Débito cardíaco aumentado</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="regulacaoVascular.perfusaoPrejudicada">Perfusão periférica prejudicada</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="regulacaoVascular.arritmia">Arritmia</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="regulacaoVascular.perfusaoIneficaz">Perfusão tissular ineficaz</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="regulacaoVascular.pressaoSanguineaDiminuida">Pressão saguínea diminuída</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="regulacaoVascular.riscoChoque">Risco de choque</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="regulacaoVascular.pressaoSanguineaAumentada">Pressão sanguínea elevada</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="regulacaoVascular.redeVascularPrejudicada">Rede vascular periférica prejudicada</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="regulacaoVascular.riscoSangramento">Risco de sangramento</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="regulacaoVascular.hemorragia">Hemorragia</el-checkbox>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="12" :sm="10" :md="6" :lg="8">
                <el-form-item label="Outros">
                    <el-input v-model="regulacaoVascular.outro"></el-input>
                </el-form-item>
            </el-col>
        </el-row>
    </el-card>
</template>

<script>
export default {
    props: {
        regulacaoVascular: {
            type: Object
        }
    }
}
</script>

<style scoped>

</style>