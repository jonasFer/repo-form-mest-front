<template>
    <el-card>
        <el-row :gutter="20">
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="termica.hipertermia">Hipertermia</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="termica.temperaturaDiminuida">Temperatura corporal diminuída</el-checkbox>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="24" :lg="24">
                <el-form-item label="Outros">
                    <el-input v-model="termica.outro"></el-input>
                </el-form-item>
            </el-col>
        </el-row>
    </el-card>
</template>

<script>
export default {
    props: {
        termica: {
            type: Object
        }
    }
}
</script>

<style scoped>

</style>