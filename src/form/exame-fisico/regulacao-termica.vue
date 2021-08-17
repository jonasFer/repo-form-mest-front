<template>
    <el-row :gutter="20">
        <el-col :xs="12" :sm="7" :md="5" :lg="5">
            <el-form-item>
                <el-checkbox v-model="regulacaoTermica.normotemico">Normotérmico</el-checkbox>
            </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="7" :md="5" :lg="5">
            <el-form-item>
                <el-checkbox v-model="regulacaoTermica.hipotermico">Hipotérmico</el-checkbox>
            </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="7" :md="5" :lg="5">
            <el-form-item>
                <el-checkbox v-model="regulacaoTermica.hipertermico">Hipertérmico</el-checkbox>
            </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="7" :md="5" :lg="5">
            <el-form-item>
                <el-checkbox v-model="regulacaoTermica.tremor">Tremores</el-checkbox>
            </el-form-item>
        </el-col>
        <el-col  :xs="12" :sm="8" :md="8" :lg="4">
            <el-form-item label="Temperatura axilar(C°)">
                <el-input v-model="regulacaoTermica.temperaturaAxilar"></el-input>
            </el-form-item>
        </el-col>
    </el-row>
</template>

<script>
export default {
    props: {
        regulacaoTermica: {
            type: Object
        }
    }
}
</script>

<style>

</style>