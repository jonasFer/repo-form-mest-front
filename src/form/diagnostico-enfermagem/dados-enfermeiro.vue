<template>
    <el-card>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="16" :lg="16">
                <el-form-item label="Nome">
                    <el-input v-model="dadosEnfermeiro.nome"></el-input>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="8" :lg="8">
                <el-form-item label="COREN">
                    <el-input v-model="dadosEnfermeiro.coren"></el-input>
                </el-form-item>
            </el-col>
        </el-row>
    </el-card>
</template>

<script>
export default {
    props: {
        dadosEnfermeiro: {
            type: Object
        }
    }
}
</script>

<style scoped>

</style>