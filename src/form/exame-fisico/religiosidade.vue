<template>
    <el-row :gutter="20">
        <el-col :xs="12" :sm="7" :md="5" :lg="5">
            <el-form-item label="Religiosidade">
                <el-input v-model="religiosidade.religiao"></el-input>
            </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="7" :md="5" :lg="5">
            <el-form-item>
                <el-checkbox v-model="religiosidade.auxilioEspiritual">Necessita de auxilio espiritual?</el-checkbox>
            </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="7" :md="5" :lg="5">
            <el-form-item label="Qual?">
                <el-input v-model="religiosidade.descricaoAuxilioEspiritual"></el-input>
            </el-form-item>
        </el-col>
    </el-row>
</template>

<script>
export default {
    props: {
        religiosidade: {
            type: Object
        }
    }
}
</script>

<style>

</style>