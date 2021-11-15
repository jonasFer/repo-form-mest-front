<template>
    <el-card>
        <el-row :gutter="20">
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="sexualidade.alteracaoMama">Mamas</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="sexualidade.alteracaoVulva">Vulvas</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="sexualidade.alteracaoPenis">Pênis</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="sexualidade.alteracaoBolsaEscrotal">Bolsa Escrotal</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item label="Tipo">
                    <el-input v-model="sexualidade.tipoAlteracao"></el-input>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item label="DST">
                    <el-select v-model="sexualidade.dst">
                        <el-option label="Sim" value="1"></el-option>
                        <el-option label="Não" value="0"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item label="Descriçao DST">
                    <el-input v-model="sexualidade.descricaoDst"></el-input>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="sexualidade.preservativo">Usa preservativo</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="sexualidade.anticoncepcional">Usa outros métodos anticoncepcionais</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item label="Descrição">
                    <el-input v-model="sexualidade.descricao"></el-input>
                </el-form-item>
            </el-col>
        </el-row>
    </el-card>
</template>

<script>
export default {
    props: {
        sexualidade: {
            type: Object
        }
    }
}
</script>

<style>

</style>