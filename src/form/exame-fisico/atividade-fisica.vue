<template>
    <el-card>
        <el-row :gutter="20">
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item label="Restrição de movimento">
                    <el-select v-model="atividadeFisica.restricao">
                        <el-option label="Absoluto" value="1"></el-option>
                        <el-option label="Relativo" value="2"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item label="Deambulação">
                    <el-select v-model="atividadeFisica.deambulacao">
                        <el-option label="Parcialmente dependente" value="1"></el-option>
                        <el-option label="Dependente" value="2"></el-option>
                        <el-option label="Não deambula" value="3"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="atividadeFisica.atrofia">Atrofia muscular</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item label="Descrição atrofia">
                    <el-input v-model="atividadeFisica.descricaoAtrofia"></el-input>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="atividadeFisica.deficiencia">Deficiência física</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item label="Descrição deficiência">
                    <el-input v-model="atividadeFisica.descricaoDeficiencia"></el-input>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="atividadeFisica.dorMovimento">Dor ao movimento</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item label="Descrição dor ao movimento">
                    <el-input v-model="atividadeFisica.descricaoDorMovimento"></el-input>
                </el-form-item>
            </el-col>
        </el-row>
    </el-card>
</template>

<script>
export default {
    props: {
        atividadeFisica: {
            type: Object
        }
    }
}
</script>

<style>

</style>